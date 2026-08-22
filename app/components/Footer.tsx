"use client";

import { siteConfig } from "../config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="flex flex-col items-center text-center gap-3 pt-6 pb-4"
      role="contentinfo"
    >
      <div className="section-divider w-full" aria-hidden="true" />

      <div className="flex flex-col items-center gap-1 pt-3">
        <p className="text-sm font-bold text-[rgb(var(--text-primary))]">
          AI &amp; Machine Learning Club
        </p>
        <p className="text-xs text-[rgb(var(--text-secondary))]">
          Oriental College of Technology, Bhopal
        </p>
        <p className="text-[11px] font-black tracking-widest uppercase mt-0.5 text-[rgb(var(--accent-lime))]">
          {siteConfig.tagline}
        </p>
      </div>

      <div className="flex items-center gap-4 text-xs font-semibold pt-1">
        <a
          href={siteConfig.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-lime))] transition-colors"
          aria-label="Official AIML Club website (opens in new tab)"
        >
          aimlcluboct.in ↗
        </a>
        <span className="text-[rgba(var(--border-default))]">•</span>
        <a
          href={siteConfig.voice}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-lime))] transition-colors"
          aria-label="Voice of AIML Club portal (opens in new tab)"
        >
          voice.aimlcluboct.in ↗
        </a>
      </div>

      <p className="text-[11px] text-[rgb(var(--text-muted))] pt-1">
        © {year} AI &amp; Machine Learning Club OCT, Bhopal • All rights reserved
      </p>
    </footer>
  );
}
