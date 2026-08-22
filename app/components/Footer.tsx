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
          {siteConfig.clubName}
        </p>
        <p className="text-xs text-[rgb(var(--text-secondary))]">
          {siteConfig.institution}
        </p>
        <p className="text-[11px] font-black tracking-widest uppercase mt-0.5 text-[rgb(var(--accent-lime-bright))]">
          “{siteConfig.tagline}”
        </p>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-3 text-xs font-semibold pt-1">
        <a
          href={siteConfig.website}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          aria-label="Official AIML Club website aimlcluboct.in (opens in new tab)"
        >
          aimlcluboct.in ↗
        </a>
        <span className="text-[rgba(var(--border-default))]">•</span>
        <a
          href={siteConfig.voice}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          aria-label="Voice of AIML Club portal voice.aimlcluboct.in (opens in new tab)"
        >
          voice.aimlcluboct.in ↗
        </a>
        <span className="text-[rgba(var(--border-default))]">•</span>
        <a
          href={siteConfig.legacySocialHub}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link text-[rgb(var(--text-muted))]"
          aria-label="Legacy social directory (opens in new tab)"
        >
          Legacy Social Directory ↗
        </a>
      </div>

      <p className="text-[11px] text-[rgb(var(--text-muted))] pt-1">
        © {year} AI &amp; Machine Learning Club OCT, Bhopal • All rights reserved
      </p>
    </footer>
  );
}
