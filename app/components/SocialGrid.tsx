import { siteConfig } from "../config/site";

/* ──────────────────────────────────────────────────────────────────────────
   Inline SVG Icons (no icon library dep, zero runtime cost)
   ────────────────────────────────────────────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#0A66C2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2" y="9" width="4" height="12" stroke="#0A66C2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="4" cy="4" r="2" stroke="#0A66C2" strokeWidth="2.2"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[rgb(var(--text-primary))]">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

function InstagramIcon({ color = "#E4405F" }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke={color} strokeWidth="2.2"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke={color} strokeWidth="2.2"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#25D366" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CommudleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="7" r="4" stroke="#6366f1" strokeWidth="2.2"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[rgb(var(--accent-cyan))]">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Social item definition
   ────────────────────────────────────────────────────────────────────────── */
interface SocialItem {
  href: string;
  label: string;
  shortLabel: string;
  icon: React.ReactNode;
}

export function SocialGrid() {
  const items: SocialItem[] = [
    {
      href: siteConfig.socials.linkedin,
      label: "Follow AIML Club OCT on LinkedIn",
      shortLabel: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    {
      href: siteConfig.socials.instagram,
      label: "Follow AIML Club OCT on Instagram",
      shortLabel: "Instagram",
      icon: <InstagramIcon color="#E4405F" />,
    },
    {
      href: siteConfig.socials.instagramPhotopia,
      label: "Follow AIML Club Photopia on Instagram",
      shortLabel: "Photopia",
      icon: <InstagramIcon color="#833AB4" />,
    },
    {
      href: siteConfig.socials.github,
      label: "AIML Club OCT on GitHub",
      shortLabel: "GitHub",
      icon: <GitHubIcon />,
    },
    {
      href: siteConfig.socials.commudle,
      label: "Join AIML Club OCT community on Commudle",
      shortLabel: "Commudle",
      icon: <CommudleIcon />,
    },
    {
      href: siteConfig.socials.whatsappChannel,
      label: "Join AIML Club official WhatsApp channel",
      shortLabel: "Channel",
      icon: <WhatsAppIcon />,
    },
    ...(siteConfig.socials.whatsappGroup !== "CONFIGURE_URL"
      ? [
          {
            href: siteConfig.socials.whatsappGroup,
            label: "Join AIML Club WhatsApp group",
            shortLabel: "Group",
            icon: <WhatsAppIcon />,
          },
        ]
      : []),
    {
      href: siteConfig.socialHub,
      label: "All AIML Club social links hub",
      shortLabel: "All Links",
      icon: <GlobeIcon />,
    },
  ];

  return (
    <section aria-label="Connect with AIML Club" className="animate-fade-up delay-500">
      <div className="mb-3 px-1 flex items-center justify-between">
        <span className="section-label">Connect &amp; Socials</span>
        <span className="text-[10px] font-mono text-[rgb(var(--text-muted))]">Verified Community</span>
      </div>
      <div
        className="grid gap-2.5 grid-cols-3 sm:grid-cols-4 md:grid-cols-7"
      >
        {items.map((item) => (
          <a
            key={item.href + item.shortLabel}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn group"
            aria-label={`${item.label} (opens in new tab)`}
          >
            <span className="transition-transform duration-200 group-hover:scale-115" aria-hidden="true">
              {item.icon}
            </span>
            <span className="social-btn-label">{item.shortLabel}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
