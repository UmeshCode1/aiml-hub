import { getWelcomeEmailHtml } from "./email-template";

export interface SubscribeParams {
  email: string;
}

export interface SubscribeResponse {
  success: boolean;
  status: "success" | "already_subscribed" | "error";
  message: string;
}

/**
 * Sends welcome email via Brevo Transactional Email API (v3)
 */
async function sendWelcomeEmailBrevo(email: string, apiKey: string): Promise<void> {
  try {
    const htmlContent = getWelcomeEmailHtml();
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "AI & Machine Learning Club OCT",
          email: "aimlcluboct@gmail.com",
        },
        to: [{ email }],
        subject: "Welcome to AIML Club OCT — You're Subscribed! 🚀",
        htmlContent,
      }),
    });
  } catch (err) {
    console.error("[Brevo Transactional Email Exception]", err);
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
  email: string,
  apiKey: string,
  listIdStr?: string
): Promise<SubscribeResponse> {
  try {
    const listIds = listIdStr ? [parseInt(listIdStr, 10)].filter((n) => !isNaN(n)) : [];

    const bodyData: Record<string, unknown> = {
      email,
      updateEnabled: false,
    };

    if (listIds.length > 0) {
      bodyData.listIds = listIds;
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(bodyData),
    });

    if (response.ok || response.status === 201 || response.status === 204) {
      // Trigger welcome email asynchronously
      sendWelcomeEmailBrevo(email, apiKey).catch(() => {});

      return {
        success: true,
        status: "success",
        message: "You're in. We'll keep you updated.",
      };
    }

    const errorData = await response.json().catch(() => ({}));

    // Check for duplicate subscriber error from Brevo API
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
        message: "You're already on the list.",
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
 * Adds a contact to Resend Audiences (API v1)
 * API Spec: POST https://api.resend.com/audiences/:audience_id/contacts
 */
async function subscribeResend(
  email: string,
  apiKey: string,
  audienceId?: string
): Promise<SubscribeResponse> {
  try {
    const endpoint = audienceId
      ? `https://api.resend.com/audiences/${audienceId}/contacts`
      : `https://api.resend.com/contacts`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    });

    if (response.ok || response.status === 200 || response.status === 201) {
      return {
        success: true,
        status: "success",
        message: "You're in. We'll keep you updated.",
      };
    }

    const errorData = await response.json().catch(() => ({}));
    const msg = (errorData?.message || "").toLowerCase();

    if (msg.includes("already exists") || msg.includes("duplicate")) {
      return {
        success: true,
        status: "already_subscribed",
        message: "You're already on the list.",
      };
    }

    console.error("[Resend Error]", response.status, errorData);

    return {
      success: false,
      status: "error",
      message: "Could not complete subscription right now. Please try again later.",
    };
  } catch (err) {
    console.error("[Resend Exception]", err);
    return {
      success: false,
      status: "error",
      message: "Network error when contacting email service.",
    };
  }
}

/**
 * Main subscription dispatcher based on process.env configuration
 */
export async function addSubscriber(rawEmail: string): Promise<SubscribeResponse> {
  const email = normalizeEmail(rawEmail);

  if (!isValidEmail(email)) {
    return {
      success: false,
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

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
    case "resend":
      return subscribeResend(email, apiKey, listId);
    case "brevo":
    case "sendinblue":
    default:
      return subscribeBrevo(email, apiKey, listId);
  }
}
