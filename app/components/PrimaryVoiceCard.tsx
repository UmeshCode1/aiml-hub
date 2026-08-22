import { siteConfig } from "../config/site";

export function PrimaryVoiceCard() {
  return (
    <div className="animate-fade-up delay-150">
      <a
        href={siteConfig.voice}
        target="_blank"
        rel="noopener noreferrer"
        className="card card-primary block rounded-2xl p-5 sm:p-6 group cursor-pointer"
        aria-label="Voice of AIML Club — Share your ideas and feedback (opens in new tab)"
      >
        <div className="flex flex-col gap-4">
          {/* Top row: Icon + Highlight Badge */}
          <div className="flex items-start justify-between gap-3">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 bg-[rgba(var(--accent-lime-glow))] border border-[rgba(var(--border-accent))] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md"
              aria-hidden="true"
            >
              {/* Microphone icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(var(--accent-lime-bright))"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
            </div>

            {/* Live Indicator / Primary Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(var(--accent-lime-glow))] border border-[rgba(var(--border-accent))] text-[rgb(var(--accent-lime-bright))] text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent-lime))] animate-ping" />
              <span>Primary Initiative</span>
            </div>
          </div>

          {/* Title & Copy */}
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent-lime-bright))] transition-colors">
              Voice of AIML Club
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[rgb(var(--text-secondary))]">
              Your ideas can shape the club. Share your thoughts, suggestions, feedback, and initiatives directly with the leadership team.
            </p>
          </div>

          {/* CTA Action */}
          <div className="pt-1 flex items-center justify-between">
            <span className="btn-primary shadow-md">
              <span>Share Your Voice</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>

            <span className="hidden sm:inline-block text-xs font-mono text-[rgb(var(--text-muted))] group-hover:text-[rgb(var(--text-secondary))] transition-colors">
              voice.aimlcluboct.in ↗
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
