import { getWelcomeEmailHtml } from "./email-template";

export interface SubscribeParams {
  email: string;
  name?: string;
  whatsapp?: string;
  branch?: string;
  year?: string;
  college?: string;
}

export interface SubscribeResponse {
  success: boolean;
  status: "success" | "already_subscribed" | "error";
  message: string;
}

/**
 * Updates contact attributes in Brevo (e.g. WELCOME_SENT)
 */
async function updateContactAttributesBrevo(
  email: string,
  attributes: Record<string, string>,
  apiKey: string
): Promise<void> {
  try {
    await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: "PUT",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({ attributes }),
    });
  } catch (err) {
    console.error("[Brevo Contact Update Attribute Error]", err);
  }
}

/**
 * Sends welcome email via Brevo Transactional Email API (v3)
 * Returns true if email was delivered to SMTP relay, false if failed or quota limit reached.
 */
async function sendWelcomeEmailBrevo(email: string, name?: string, apiKey?: string): Promise<boolean> {
  try {
    if (!apiKey) {
      console.error("[Brevo Transactional Email Error] Missing API Key");
      return false;
    }

    const htmlContent = getWelcomeEmailHtml(email, name);
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: process.env.EMAIL_SENDER_NAME || "AI & Machine Learning Club OCT",
          email: process.env.EMAIL_SENDER_EMAIL || "info@aimlcluboct.in",
        },
        to: [{ email, name: name || email }],
        subject: "Welcome to AIML Club OCT — You're Subscribed! 🚀",
        htmlContent,
      }),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => "");
      console.error("[Brevo Transactional Email Failed]", response.status, errText);
      // Mark WELCOME_SENT as false so automated retry system will re-send when quota resets
      if (apiKey) updateContactAttributesBrevo(email, { WELCOME_SENT: "false" }, apiKey).catch(() => {});
      return false;
    }

    const data = await response.json().catch(() => ({}));
    console.log("[Brevo Transactional Email Success]", email, data?.messageId || "sent");

    // Mark WELCOME_SENT as true
    if (apiKey) updateContactAttributesBrevo(email, { WELCOME_SENT: "true" }, apiKey).catch(() => {});
    return true;
  } catch (err) {
    console.error("[Brevo Transactional Email Exception]", err);
    if (apiKey) updateContactAttributesBrevo(email, { WELCOME_SENT: "false" }, apiKey).catch(() => {});
    return false;
  }
}

/**
 * Normalizes email address by trimming whitespace and converting to lower case
 */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/**
 * Validates email format according to standard email regex
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string" || email.length > 254) {
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

/**
 * Adds a contact to Brevo (Sendinblue API v3) and triggers welcome email
 * API Spec: POST https://api.brevo.com/v3/contacts
 */
async function subscribeBrevo(
  params: SubscribeParams,
  apiKey: string,
  listIdStr?: string
): Promise<SubscribeResponse> {
  try {
    const { email, name, whatsapp, branch, year, college } = params;
    const listIds = listIdStr ? [parseInt(listIdStr, 10)].filter((n) => !isNaN(n)) : [];

    const attributes: Record<string, string> = {
      WELCOME_SENT: "false",
    };
    if (name?.trim()) {
      attributes.FIRSTNAME = name.trim();
      attributes.NAME = name.trim();
    }
    if (branch?.trim()) attributes.BRANCH = branch.trim();
    if (year?.trim()) attributes.YEAR = year.trim();
    if (college?.trim()) attributes.COLLEGE = college.trim();
    if (whatsapp?.trim()) attributes.WHATSAPP = whatsapp.trim();

    const bodyData: Record<string, unknown> = {
      email,
      updateEnabled: true,
    };

    if (listIds.length > 0) {
      bodyData.listIds = listIds;
    }

    if (Object.keys(attributes).length > 0) {
      bodyData.attributes = attributes;
    }

    let response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(bodyData),
    });

    // Fallback: If Brevo rejects 400 (e.g. duplicate WHATSAPP/SMS or format error), retry with safe attributes
    if (!response.ok && response.status === 400) {
      const safeAttributes: Record<string, string> = {
        WELCOME_SENT: "false",
      };
      if (name?.trim()) {
        safeAttributes.FIRSTNAME = name.trim();
        safeAttributes.NAME = name.trim();
      }
      if (branch?.trim()) safeAttributes.BRANCH = branch.trim();
      if (year?.trim()) safeAttributes.YEAR = year.trim();
      if (college?.trim()) safeAttributes.COLLEGE = college.trim();

      response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email,
          updateEnabled: true,
          listIds: listIds.length > 0 ? listIds : undefined,
          attributes: safeAttributes,
        }),
      });
    }

    // Always attempt welcome email dispatch so subscribers get instant confirmation
    const emailSent = await sendWelcomeEmailBrevo(email, name, apiKey);

    if (response.ok || response.status === 201 || response.status === 204 || emailSent) {
      return {
        success: true,
        status: "success",
        message: "You're in! We've sent a welcome email to your inbox.",
      };
    }

    const errorData = await response.json().catch(() => ({}));
    const code = errorData?.code || "";
    const msg = (errorData?.message || "").toLowerCase();

    if (
      code === "duplicate_parameter" ||
      msg.includes("already exists") ||
      msg.includes("duplicate")
    ) {
      return {
        success: true,
        status: "already_subscribed",
        message: "You're already subscribed! We've saved your details.",
      };
    }

    console.error("[Brevo Error]", response.status, errorData);

    return {
      success: false,
      status: "error",
      message: "Could not complete subscription right now. Please try again later.",
    };
  } catch (err) {
    console.error("[Brevo Exception]", err);
    return {
      success: false,
      status: "error",
      message: "Network error when contacting email service. Please try again.",
    };
  }
}

/**
 * Automatically fetches pending subscribers from Brevo (WELCOME_SENT != 'true')
 * and re-sends their welcome email when quota resets.
 */
export async function resendPendingWelcomeEmails(): Promise<{
  totalPending: number;
  sentCount: number;
  failedCount: number;
}> {
  const apiKey = process.env.EMAIL_API_KEY;
  const listIdStr = process.env.EMAIL_LIST_ID || "2";

  if (!apiKey || apiKey === "your_brevo_api_key_here") {
    return { totalPending: 0, sentCount: 0, failedCount: 0 };
  }

  try {
    const listId = parseInt(listIdStr, 10) || 2;
    const response = await fetch(
      `https://api.brevo.com/v3/contacts/lists/${listId}/contacts?limit=500`,
      {
        headers: {
          "accept": "application/json",
          "api-key": apiKey,
        },
      }
    );

    if (!response.ok) {
      console.error("[Resend Pending Error] Failed to fetch Brevo list contacts", response.status);
      return { totalPending: 0, sentCount: 0, failedCount: 0 };
    }

    const data = await response.json().catch(() => ({}));
    const contacts: Array<{ email: string; attributes?: Record<string, string> }> =
      data.contacts || [];

    // Filter contacts where WELCOME_SENT is explicitly 'false' (failed initial delivery)
    const pendingContacts = contacts.filter((c) => c.attributes?.WELCOME_SENT === "false");
    console.log(`[Resend Pending] Found ${pendingContacts.length} pending contacts out of ${contacts.length}`);

    let sentCount = 0;
    let failedCount = 0;

    for (const contact of pendingContacts) {
      const email = contact.email;
      const name = contact.attributes?.FIRSTNAME || contact.attributes?.NAME;

      const sent = await sendWelcomeEmailBrevo(email, name, apiKey);
      if (sent) {
        sentCount++;
      } else {
        failedCount++;
        // If sending failed (e.g. quota limit still active), stop processing further to save requests
        break;
      }
      // Small pause between dispatches
      await new Promise((r) => setTimeout(r, 100));
    }

    return {
      totalPending: pendingContacts.length,
      sentCount,
      failedCount,
    };
  } catch (err) {
    console.error("[Resend Pending Exception]", err);
    return { totalPending: 0, sentCount: 0, failedCount: 0 };
  }
}

/**
 * Main subscription dispatcher based on process.env configuration
 */
export async function addSubscriber(params: SubscribeParams): Promise<SubscribeResponse> {
  const email = normalizeEmail(params.email);

  if (!isValidEmail(email)) {
    return {
      success: false,
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  const cleanParams: SubscribeParams = {
    ...params,
    email,
  };

  const provider = (process.env.EMAIL_PROVIDER || "brevo").toLowerCase();
  const apiKey = process.env.EMAIL_API_KEY;
  const listId = process.env.EMAIL_LIST_ID;

  // Fallback mode if API key is not yet configured in environment
  if (!apiKey || apiKey === "your_brevo_api_key_here") {
    console.warn(
      `[Newsletter Dev Mode] Received subscription for "${email}" (EMAIL_API_KEY is not set). Simulated success.`
    );
    return {
      success: true,
      status: "success",
      message: "You're in. We'll keep you updated.",
    };
  }

  switch (provider) {
    case "brevo":
    case "sendinblue":
    default:
      return subscribeBrevo(cleanParams, apiKey!, listId);
  }
}
