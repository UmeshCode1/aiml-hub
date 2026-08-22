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
    canonical: siteConfig.website,
  },
  openGraph: {
    type: "website",
    url: siteConfig.website,
    siteName: siteConfig.clubName,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    locale: "en_IN",
    images: [
      {
        url: siteConfig.seo.ogImage,
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
    images: [siteConfig.seo.ogImage],
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
    ],
    apple: [
      { url: "/aiml-club-logo.png", sizes: "180x180" },
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('aiml_hub_theme');
                  var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
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
