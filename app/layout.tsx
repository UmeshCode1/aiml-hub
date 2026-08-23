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
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: [
    "AI",
    "Machine Learning",
    "AIML Club",
    "Oriental College of Technology",
    "OCT Bhopal",
    "Student Club",
    "Artificial Intelligence",
    "Deep Learning",
    "Data Science",
    "Bhopal",
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
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
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
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
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
