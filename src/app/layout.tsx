import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
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
  title: "Om Yewale",
  description: "Om Yewale is a Full Stack Developer based in Mumbai specializing in Next.js, T3 Stack, MERN/PERN, Java Spring Boot, Agentic AI, Data Science, and Web3 development. Building production-grade web applications and autonomous tools.",
  keywords: [
    "Om Yewale", 
    "Full Stack Developer Mumbai", 
    "Software Engineer", 
    "Next.js Developer", 
    "Agentic AI", 
    "Machine Learning",
    "T3 Stack", 
    "MERN Stack", 
    "PERN Stack", 
    "Java Backend Developer", 
    "Spring Boot", 
    "Data Science", 
    "Web3 Developer", 
    "DevOps Engineer", 
    "React TypeScript", 
    "Autonomous Tools",
    "Mumbai",
    "India",
    "Student",

    
  ],
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
    title: "Om Yewale",
    description: "Full-stack engineer and engineering student building the future of agentic web tools, MERN/PERN applications, Java backends",
    siteName: "Om Yewale Portfolio",
    images: [
      {
        url: "/opengraph.png", 
        width: 1200,
        height: 630,
       
      },
    ],
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
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (() => {
          const theme = localStorage.getItem('theme');

          if (
            theme === 'dark' ||
            (!theme &&
              window.matchMedia('(prefers-color-scheme: dark)').matches)
          ) {
            document.documentElement.classList.add('dark');
          }
        })();
      `,
    }}
  />

  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
  />
</head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}