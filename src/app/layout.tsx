import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omeey.vercel.app"),

  title: {
    default: "Om Yewale",
    template: "%s | Om Yewale",
  },

  description:
    "Full stack engineer from Mumbai building scalable web applications, DevOps systems, and agentic AI tools using Next.js, TypeScript, and modern cloud infrastructure.",

  applicationName: "Om Yewale Portfolio",

  keywords: [
    "Om Yewale",
    "Full Stack Engineer",
    "Next.js Developer",
    "DevOps Engineer",
    "AI Engineer",
    "Mumbai Developer",
    "TypeScript",
    "React",
    "Node.js",
    "Portfolio",
  ],

  authors: [
    {
      name: "Om Yewale",
      url: "https://omeey.vercel.app",
    },
  ],

  creator: "Om Yewale",
  publisher: "Om Yewale",

  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omeey.vercel.app",

    title: "Om Yewale | Full Stack Engineer",

    description:
      "Engineering student building production-grade web apps, DevOps workflows, and autonomous AI systems.",

    siteName: "Om Yewale",

    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Om Yewale Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Om Yewale | Full Stack Engineer",

    description:
      "Building scalable interfaces, DevOps systems, and AI-powered tools.",

    creator: "@omee_y",

    images: ["/opengraph.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],

    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}