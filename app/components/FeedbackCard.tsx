import { siteConfig } from "../config/site";

export function FeedbackCard() {
  return (
    <section
      aria-label="Feedback and suggestions"
      className="animate-fade-up delay-600"
    >
      <div className="mb-3 px-1 flex items-center justify-between">
        <span className="section-label">Feedback &amp; Suggestions</span>
        <span className="text-[10px] font-mono text-[rgb(var(--text-muted))]">Open to all students</span>
      </div>

      <div className="card p-5 sm:p-6 flex flex-col gap-4 border-[rgba(var(--border-default))]">
        {/* Heading */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent-cyan))]" />
            <h2 className="text-base sm:text-lg font-black tracking-tight text-[rgb(var(--text-primary))]">
              Help Us Build Better.
            </h2>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-[rgb(var(--text-secondary))]">
            Have an idea for a hackathon, workshop, project, or feature? Let the AIML Club know — we review every submission.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <a
            href={siteConfig.voice}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center text-center shadow-sm"
            aria-label="Send feedback via Voice portal (opens in new tab)"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
            <span>Voice Portal</span>
          </a>

          <a
            href={siteConfig.pages.suggestions}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary justify-center text-center shadow-sm"
            aria-label="Open suggestions page on official website (opens in new tab)"
          >
            <span>Suggestions Box</span>
            <span className="text-[10px] opacity-70">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
