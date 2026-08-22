/**
 * AIML Club OCT Digital Hub — Site Configuration
 * Verified destinations from aimlcluboct.in and official AIML Club ecosystem
 */

export const siteConfig = {
  // ── Club Identity ─────────────────────────────────────────────────────────
  clubName: "AI & Machine Learning Club",
  institution: "Oriental College of Technology, Bhopal",
  tagline: "Innovate • Implement • Inspire",
  shortName: "AIML Club OCT",
  hubTitle: "AIML Club OCT Digital Hub",
  description:
    "A student-driven ecosystem for learning, building and exploring Artificial Intelligence & Machine Learning.",
  established: "2025",

  // ── Primary URLs ──────────────────────────────────────────────────────────
  website: "https://aimlcluboct.in",
  voice: "https://voice.aimlcluboct.in",
  digitalHub: "https://social.aimlcluboct.in",
  socialHub: "https://social.aimlclub.tech",
  legacySocialHub: "https://social.aimlclub.tech",

  // ── SEO ───────────────────────────────────────────────────────────────────
  seo: {
    title: "AIML Club OCT | AI & Machine Learning Club",
    description:
      "AI & Machine Learning Club at Oriental College of Technology, Bhopal — connect with our community, explore events, resources and share your voice.",
    ogImage: "/aiml-club-logo.png",
    canonical: "https://social.aimlcluboct.in",
    themeColor: "#080a0c",
  },

  // ── Official Pages ────────────────────────────────────────────────────────
  pages: {
    home: "https://aimlcluboct.in",
    events: "https://aimlcluboct.in/events",
    team: "https://aimlcluboct.in/team",
    gallery: "https://aimlcluboct.in/gallery",
    blog: "https://aimlcluboct.in/blog",
    contact: "https://aimlcluboct.in/contact",
    updates: "https://aimlcluboct.in/updates",
    suggestions: "https://aimlcluboct.in/suggestions",
    constitution: "https://aimlcluboct.in/constitution",
  },

  // ── Ecosystem Resources ───────────────────────────────────────────────────
  resources: {
    github: "https://github.com/aimlcluboct",
    githubResourcePage: "https://aimlcluboct.in/resources/github",
    notion: "https://aimlcluboct.in/resources/notion",
    drive: "https://aimlcluboct.in/resources/media-drive",
    whatsappChannel: "https://aimlcluboct.in/resources/whatsapp-channel",
    apkDrive:
      "https://drive.google.com/drive/folders/1xRzPHXexGDH9ggROAhSjkI2hPsdRcE9F?usp=sharing",
  },

  // ── Social Media ──────────────────────────────────────────────────────────
  socials: {
    linkedin: "https://www.linkedin.com/company/aimlcluboct",
    github: "https://github.com/aimlcluboct",
    instagram: "https://www.instagram.com/aimlcluboct",
    instagramPhotopia: "https://www.instagram.com/photopia_",
    commudle: "https://www.commudle.com/communities/ai-ml-club",
    whatsappChannel: "https://aimlcluboct.in/resources/whatsapp-channel",
    whatsappGroup: "https://aimlcluboct.in/resources/whatsapp-channel",
  },
} as const;

export type SiteConfig = typeof siteConfig;
