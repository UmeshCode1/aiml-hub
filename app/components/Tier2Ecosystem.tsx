import { siteConfig } from "../config/site";

function IconUsers() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>
    </svg>
  );
}

function IconImage() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>
  );
}

function IconBookOpen() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
    </svg>
  );
}

function IconBlog() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>
    </svg>
  );
}

function IconPackage() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>
    </svg>
  );
}

interface Tier2EcosystemProps {
  activeTab?: "all" | "social" | "official" | "resources";
}

export function Tier2Ecosystem({ activeTab = "all" }: Tier2EcosystemProps) {
  const items = [
    {
      name: "Commudle Community",
      desc: "Tech Events & Community Portal",
      url: siteConfig.socials.commudle,
      icon: <IconUsers />,
      color: "rgb(99,102,241)",
      categories: ["social", "resources"],
    },
    {
      name: "Photopia (Media)",
      desc: "Club Photography & Event Media",
      url: siteConfig.socials.instagramPhotopia,
      icon: <IconImage />,
      color: "rgb(168,85,247)",
      categories: ["social"],
    },
    {
      name: "Resources Portal",
      desc: "Study Guides & Learning Paths",
      url: siteConfig.pages.resources,
      icon: <IconBookOpen />,
      color: "rgb(59,130,246)",
      categories: ["resources", "official"],
    },
    {
      name: "Events & Workshops",
      desc: "Hackathons, Talks & Sessions",
      url: siteConfig.pages.events,
      icon: <IconCalendar />,
      color: "rgb(34,211,238)",
      categories: ["official", "resources"],
    },
    {
      name: "Our Team & Leads",
      desc: "Core Leaders & Mentors",
      url: siteConfig.pages.team,
      icon: <IconUsers />,
      color: "rgb(132,204,22)",
      categories: ["official", "social"],
    },
    {
      name: "Gallery",
      desc: "Event Memories & Media",
      url: siteConfig.pages.gallery,
      icon: <IconImage />,
      color: "rgb(236,72,153)",
      categories: ["social"],
    },
    {
      name: "Blog & Tech Articles",
      desc: "AI Articles & Insights",
      url: siteConfig.pages.blog,
      icon: <IconBlog />,
      color: "rgb(249,115,22)",
      categories: ["resources", "official"],
    },
    {
      name: "APK Distribution Drive",
      desc: "Official App Releases",
      url: siteConfig.resources.apkDrive,
      icon: <IconPackage />,
      color: "rgb(168,85,247)",
      categories: ["resources"],
    },
  ];

  const filteredItems = items.filter(
    (item) => activeTab === "all" || item.categories.includes(activeTab)
  );

  if (filteredItems.length === 0) return null;

  return (
    <section aria-label="Ecosystem and community portals" className="animate-fade-up">
      <div className="mb-2.5 px-1 flex items-center justify-between">
        <span className="section-label text-xs font-black tracking-widest text-[rgb(var(--text-secondary))]">
          COMMUNITY &amp; ECOSYSTEM
        </span>
        <span className="text-[10px] font-mono text-[rgb(var(--text-muted))]">Explore Portal</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {filteredItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-3 rounded-xl border border-[rgba(var(--border-default))] bg-[rgba(var(--bg-surface),0.85)] hover:bg-[rgba(var(--bg-card-hover))] transition-all duration-200 min-h-[56px]"
            aria-label={`Open ${item.name} (opens in new tab)`}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-[rgba(var(--bg-card))]"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <span className="text-xs font-bold text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent-lime-bright))] transition-colors truncate">
                {item.name}
              </span>
              <span className="text-[11px] text-[rgb(var(--text-secondary))] truncate">
                {item.desc}
              </span>
            </div>
            <span className="text-xs text-[rgb(var(--text-muted))] group-hover:text-[rgb(var(--text-primary))] transition-colors">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
