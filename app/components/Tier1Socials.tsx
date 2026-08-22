import { siteConfig } from "../config/site";

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#E4405F" strokeWidth="2.2"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="#E4405F" strokeWidth="2.2"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#E4405F" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#25D366" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(34,211,238)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[rgb(var(--accent-lime-bright))]">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#0A66C2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2" y="9" width="4" height="12" stroke="#0A66C2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="4" cy="4" r="2" stroke="#0A66C2" strokeWidth="2.2"/>
    </svg>
  );
}

export function Tier1Socials() {
  const primaryLinks = [
    {
      name: "Instagram",
      handle: "@aimlcluboct",
      description: "Official Instagram Page",
      url: siteConfig.socials.instagram,
      icon: <InstagramIcon />,
      badge: "Primary",
      borderGlow: "hover:border-[#E4405F]/50",
    },
    {
      name: "WhatsApp Channel",
      handle: "AIML Club Official",
      description: "Announcements & Fast Notices",
      url: siteConfig.socials.whatsappChannel,
      icon: <WhatsAppIcon />,
      badge: "Updates",
      borderGlow: "hover:border-[#25D366]/50",
    },
    {
      name: "Official Website",
      handle: "aimlcluboct.in",
      description: "Complete Club Ecosystem",
      url: siteConfig.website,
      icon: <GlobeIcon />,
      badge: "Official",
      borderGlow: "hover:border-[rgb(34,211,238)]/50",
    },
    {
      name: "GitHub",
      handle: "AIML Club OCT",
      description: "Open Source AI Repositories",
      url: siteConfig.socials.github,
      icon: <GitHubIcon />,
      badge: "Open Source",
      borderGlow: "hover:border-[rgb(163,230,53)]/50",
    },
    {
      name: "LinkedIn",
      handle: "AI & Machine Learning Club OCT",
      description: "Professional Network & Careers",
      url: siteConfig.socials.linkedin,
      icon: <LinkedInIcon />,
      badge: "Careers",
      borderGlow: "hover:border-[#0A66C2]/50",
    },
  ];

  return (
    <section aria-label="Primary social and official connections" className="animate-fade-up">
      <div className="mb-2.5 px-1 flex items-center justify-between">
        <span className="section-label text-xs font-black tracking-widest text-[rgb(var(--text-secondary))]">
          PRIMARY CONNECT
        </span>
        <span className="text-[10px] font-mono text-[rgb(var(--text-muted))]">Direct Platforms</span>
      </div>

      <div className="flex flex-col gap-3">
        {primaryLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`link-card group flex items-center gap-4 p-4 rounded-2xl min-h-[68px] border border-[rgba(var(--border-default))] bg-[rgba(var(--bg-surface),0.95)] hover:bg-[rgba(var(--bg-card-hover))] ${item.borderGlow} transition-all duration-200 shadow-sm`}
            aria-label={`Connect on ${item.name} (${item.handle}) (opens in new tab)`}
          >
            {/* Left Icon Wrap */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[rgba(var(--bg-card))] border border-[rgba(var(--border-default))] group-hover:scale-105 transition-transform duration-200">
              {item.icon}
            </div>

            {/* Center Content Hierarchy */}
            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent-lime-bright))] transition-colors truncate">
                  {item.name}
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[rgba(var(--accent-lime-glow))] text-[rgb(var(--accent-lime-bright))] border border-[rgba(var(--border-accent),0.3)]">
                  {item.badge}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[rgb(var(--text-secondary))] truncate">
                <span className="font-mono font-bold text-[rgb(var(--text-primary))]">{item.handle}</span>
                <span className="text-[rgba(var(--border-default))]">•</span>
                <span className="truncate">{item.description}</span>
              </div>
            </div>

            {/* Right Arrow */}
            <svg
              className="text-[rgb(var(--text-muted))] group-hover:text-[rgb(var(--accent-lime-bright))] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}
