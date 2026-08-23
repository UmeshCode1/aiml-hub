import { NextResponse } from "next/server";
import { resendPendingWelcomeEmails } from "@/app/lib/newsletter";

/**
 * Automated Cron Job Endpoint / Retry Handler
 * Triggered automatically by Vercel Cron at 01:00 UTC daily (or called manually anytime)
 */
export async function GET(request: Request) {
  try {
    // Optional CRON_SECRET authorization check for security
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      const url = new URL(request.url);
      const keyQuery = url.searchParams.get("key");
      if (keyQuery !== cronSecret) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    console.log("[Cron Job Triggered] Starting automated resend for pending welcome emails...");
    const result = await resendPendingWelcomeEmails();

    return NextResponse.json(
      {
        success: true,
        message: "Automated resend check completed successfully.",
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Cron Job Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process automated resend check.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  return GET(request);
}
