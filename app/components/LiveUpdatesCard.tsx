import { siteConfig } from "../config/site";

export function LiveUpdatesCard() {
  return (
    <div className="animate-fade-up delay-200">
      <a
        href={siteConfig.live}
        target="_blank"
        rel="noopener noreferrer"
        className="card block rounded-2xl p-5 sm:p-6 group cursor-pointer border border-[rgba(var(--accent-cyan),0.3)] bg-[rgba(var(--bg-surface),0.9)] hover:bg-[rgba(var(--bg-card-hover))] hover:border-[rgb(var(--accent-cyan))] transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
        aria-label="AIML Club Real-Time Live Updates — Stay updated live (opens in new tab)"
      >
        {/* Subtle accent glow gradient overlay */}
        <div
          className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-[rgba(var(--accent-cyan),0.12)] blur-2xl pointer-events-none group-hover:bg-[rgba(var(--accent-cyan),0.20)] transition-all duration-500"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col gap-3.5 sm:gap-4">
          {/* Top row: Icon + Live Pulsing Badge */}
          <div className="flex items-start justify-between gap-3">
            <div
              className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex-shrink-0 bg-[rgba(var(--accent-cyan),0.12)] border border-[rgba(var(--accent-cyan),0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-md"
              aria-hidden="true"
            >
              {/* Radio Signal / Live Stream Broadcast Icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(var(--accent-cyan))"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4.9 19.1C1.9 16.1 1.9 11.3 4.9 8.3" />
                <path d="M7.8 16.2c-1.6-1.6-1.6-4.1 0-5.7" />
                <circle cx="12" cy="12" r="2" fill="rgb(var(--accent-cyan))" />
                <path d="M16.2 7.8c1.6 1.6 1.6 4.1 0 5.7" />
                <path d="M19.1 4.9c3 3 3 7.8 0 10.8" />
              </svg>
            </div>

            {/* Live Indicator Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(var(--accent-cyan),0.15)] border border-[rgba(var(--accent-cyan),0.4)] text-[rgb(var(--accent-cyan))] text-xs font-black uppercase tracking-wider shadow-sm">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--accent-cyan))] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[rgb(var(--accent-cyan))]"></span>
              </span>
              <span>Real-Time Live</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex flex-col gap-1">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent-cyan))] transition-colors">
              AIML Live Updates
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[rgb(var(--text-secondary))]">
              Stay synchronized with instant announcements, event coverage, broadcasts, and real-time updates directly on live.aimlcluboct.in.
            </p>
          </div>

          {/* CTA Action */}
          <div className="pt-1 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black rounded-xl bg-[rgba(var(--accent-cyan),0.15)] hover:bg-[rgba(var(--accent-cyan),0.25)] border border-[rgba(var(--accent-cyan),0.4)] text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent-cyan))] transition-all active:scale-95 shadow-sm">
              <span>View Real-Time Live</span>
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
              live.aimlcluboct.in ↗
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
