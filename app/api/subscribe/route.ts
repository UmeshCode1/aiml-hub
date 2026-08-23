import { NextResponse } from "next/server";
import { addSubscriber, isValidEmail, normalizeEmail } from "@/app/lib/newsletter";

// In-memory rate limiting store (max 5 requests per 60s per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.count += 1;
  return false;
}

// Clean up stale rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

export async function POST(request: Request) {
  try {
    // 1. IP extraction for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          status: "error",
          error: "Too many subscription requests. Please try again in a minute.",
        },
        { status: 429 }
      );
    }

    // 2. Parse JSON body safely
    let body: { email?: string };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          status: "error",
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const rawEmail = body?.email;

    // 3. Validation & Normalization
    if (!rawEmail || typeof rawEmail !== "string") {
      return NextResponse.json(
        {
          success: false,
          status: "error",
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const email = normalizeEmail(rawEmail);

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          status: "error",
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // 4. Execute subscription via newsletter service adapter
    const result = await addSubscriber(email);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          status: result.status,
          error: result.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        status: result.status,
        message: result.message,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Subscribe API Error]", error);
    return NextResponse.json(
      {
        success: false,
        status: "error",
        error: "Unable to process subscription right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
