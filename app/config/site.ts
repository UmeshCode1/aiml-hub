/**
 * AIML Club OCT Digital Hub — Site Configuration
 * All links verified from aimlcluboct.in on 2026-08-21
 *
 * To update any link, edit the value below.
 * Unverified links are marked as CONFIGURE_URL — replace with the actual URL.
 */

export const siteConfig = {
  // ── Club Identity ─────────────────────────────────────────────────────────
  clubName: "AI & Machine Learning Club",
  institution: "Oriental College of Technology, Bhopal",
  tagline: "Innovate • Implement • Inspire",
  shortName: "AIML Club OCT",
  description:
    "A student-driven ecosystem for learning, building and exploring Artificial Intelligence & Machine Learning.",
  established: "2025",

  // ── Primary URLs ──────────────────────────────────────────────────────────
  website: "https://aimlcluboct.in",
  voice: "https://voice.aimlcluboct.in",
  socialHub: "https://social.aimlclub.tech",

  // ── SEO ───────────────────────────────────────────────────────────────────
  seo: {
    title: "AIML Club OCT | AI & Machine Learning Club",
    description:
      "AI & Machine Learning Club at Oriental College of Technology, Bhopal — connect with our community, explore events, projects, resources and share your voice.",
    ogImage: "https://aimlcluboct.in/aiml-club-logo-new.png",
    canonical: "https://aimlcluboct.in",
    themeColor: "#080a0c",
  },

  // ── Official Pages (verified from aimlcluboct.in nav/footer) ──────────────
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

  // ── Ecosystem Resources (verified from /resources page) ───────────────────
  resources: {
    github: "https://aimlcluboct.in/resources/github",
    notion: "https://aimlcluboct.in/resources/notion",
    drive: "https://aimlcluboct.in/resources/media-drive",
    whatsappChannel: "https://aimlcluboct.in/resources/whatsapp-channel",
    apkDrive:
      "https://drive.google.com/drive/folders/1xRzPHXexGDH9ggROAhSjkI2hPsdRcE9F?usp=sharing",
    // CONFIGURE_URL: Replace with your direct WhatsApp Group invite link
    whatsappGroup: "CONFIGURE_URL",
  },

  // ── Social Media (verified from aimlcluboct.in footer) ────────────────────
  socials: {
    linkedin: "https://www.linkedin.com/company/aimlcluboct",
    github: "https://github.com/aimlcluboct",
    instagram: "https://www.instagram.com/aimlcluboct",
    instagramPhotopia: "https://www.instagram.com/photopia_",
    commudle: "https://www.commudle.com/communities/ai-ml-club",
    // CONFIGURE_URL: Direct WhatsApp channel link (website uses redirect)
    whatsappChannel: "https://aimlcluboct.in/resources/whatsapp-channel",
    // CONFIGURE_URL: Replace with direct WhatsApp group invite link
    whatsappGroup: "CONFIGURE_URL",
  },
} as const;

export type SiteConfig = typeof siteConfig;
