import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Om Yewale — Full Stack Developer & Engineering Student",
  description: "Full stack developer based in Mumbai specializing in Next.js, DevOps, and Agentic AI. Building production-grade web interfaces and autonomous tools.",
  keywords: ["Om Yewale", "Full Stack Developer", "Mumbai", "Software Engineer", "AI", "Full Stack"],
  authors: [{ name: "Om Yewale" }],
  creator: "Om Yewale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omeey.vercel.app", 
    title: "Om Yewale | Portfolio",
    description: "Engineering student and full-stack developer building the future of agentic web tools.",
    siteName: "Om Yewale Portfolio",
  },
  twitter: {

    title: "Om Yewale | @omee_y",
    description: "Full Stack Developer & Engineering Student in Mumbai.",
    creator: "@omee_y",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Analytics />
        
      </body>
    </html>
  );
}
