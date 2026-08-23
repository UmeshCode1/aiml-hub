import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/cron/"],
    },
    sitemap: "https://social.aimlcluboct.in/sitemap.xml",
  };
}
