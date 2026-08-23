import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.digitalHub),
  title: "AI & Machine Learning Club OCT | Official Social Hub & Linktree",
  description:
    "Official AIML Club OCT Digital Hub at Oriental College of Technology, Bhopal. Access hackathons, workshops, AI resources, social links, and real-time updates.",
  keywords: [
    "AIML Club OCT",
    "social.aimlcluboct.in",
    "aimlcluboct",
    "AI Machine Learning Club",
    "Oriental College of Technology",
    "OCT Bhopal",
    "AIML Club Bhopal",
    "Student Club",
    "Artificial Intelligence",
    "Deep Learning",
    "Data Science",
    "AIML Linktree",
    "AIML Digital Hub",
  ],
  authors: [{ name: "AI & Machine Learning Club OCT" }],
  creator: "AI & Machine Learning Club OCT",
  publisher: "Oriental College of Technology, Bhopal",
  category: "education",
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteConfig.digitalHub,
  },
  openGraph: {
    type: "website",
    url: siteConfig.digitalHub,
    siteName: siteConfig.clubName,
    title: "AI & Machine Learning Club OCT | Official Social Hub",
    description:
      "Official AIML Club OCT Digital Hub at Oriental College of Technology, Bhopal. Access hackathons, workshops, AI resources, social links, and real-time updates.",
    locale: "en_IN",
    images: [
      {
        url: "/aiml-club-logo.png",
        width: 512,
        height: 512,
        alt: "AI & Machine Learning Club OCT logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Machine Learning Club OCT | Official Social Hub",
    description:
      "Official AIML Club OCT Digital Hub at Oriental College of Technology, Bhopal.",
    images: ["/aiml-club-logo.png"],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "AIML Club OCT",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/aiml-club-logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/aiml-club-logo.png"],
    apple: [
      { url: "/aiml-club-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0c",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "AI & Machine Learning Club OCT",
  "alternateName": [
    "AIML Club OCT",
    "AIML Club Bhopal",
    "AIML Club Oriental College of Technology",
    "aimlcluboct"
  ],
  "url": "https://social.aimlcluboct.in",
  "logo": "https://social.aimlcluboct.in/aiml-club-logo.png",
  "image": "https://social.aimlcluboct.in/aiml-club-logo.png",
  "description":
    "Official AIML Club OCT Digital Hub at Oriental College of Technology, Bhopal. Access hackathons, workshops, AI resources, social links, and real-time updates.",
  "parentOrganization": {
    "@type": "CollegeOrUniversity",
    "name": "Oriental College of Technology, Bhopal",
    "url": "https://aimlcluboct.in"
  },
  "sameAs": [
    "https://aimlcluboct.in",
    "https://live.aimlcluboct.in",
    "https://voice.aimlcluboct.in",
    "https://www.linkedin.com/company/aimlcluboct",
    "https://github.com/aimlcluboct",
    "https://www.instagram.com/aimlcluboct",
    "https://whatsapp.com/channel/0029VbAthv38V0tfulumuV1D",
    "https://chat.whatsapp.com/ITBTDOgerQVLnw9dq7jxN6?s=cl&p=a&ilr=0",
    "https://www.commudle.com/communities/ai-ml-club"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/aiml-club-logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/aiml-club-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/aiml-club-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('aiml_hub_theme');
                  var theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);

                  var savedPerf = localStorage.getItem('aiml_hub_perf');
                  var isLowCores = typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
                  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                  var perf = savedPerf || (isLowCores || prefersReduced ? 'saver' : 'ultra');
                  document.documentElement.setAttribute('data-performance', perf);
                  document.documentElement.setAttribute('data-thermal', perf);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
