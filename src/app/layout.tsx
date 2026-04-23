import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Om Yewale",
    

  description: "Full stack developer based in Mumbai specializing in Next.js, DevOps, and Agentic AI. Building production-grade web interfaces and autonomous tools.",
  keywords: ["Om Yewale", "Full Stack Developer", "Mumbai", "Software Engineer", "Next.js", "Agentic AI", "DevOps"],
  authors: [{ name: "Om Yewale", url: "https://omeey.vercel.app" }],
  creator: "Om Yewale",
  metadataBase: new URL("https://omeey.vercel.app"), 
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omeey.vercel.app",
    title: "Om Yewale | Full Stack Engineer",
    description: "Engineering student building the future of agentic web tools and production-grade interfaces.",
    siteName: "Om Yewale",
    images: [
      {
        url: "/opengraph.png", 
        width: 1200,
        height: 630,
        alt: "Om Yewale Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", 
    title: "Om Yewale (@omee_y)",
    description: "Full Stack Developer & Engineering Student in Mumbai.",
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
      { url: "/favicon.ico", sizes: "any" },
    
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" 
        />
        
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      
        
          {children}
          <Script 
          src="https://sleepie.uk/oneko.js" 
          strategy="beforeInteractive" 
        />

        <Analytics />
        <SpeedInsights/>
 </body>
    </html>
  );
}