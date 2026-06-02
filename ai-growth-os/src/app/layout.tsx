import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXUS OS — AI-Powered Growth Operating System",
  description: "We build daily attention systems that make brands impossible to ignore. AI-powered content, UGC ads, automation, and growth infrastructure for modern internet brands.",
  keywords: "AI growth, content automation, UGC ads, TikTok marketing, brand visibility, AI content engine",
  openGraph: {
    title: "NEXUS OS — AI-Powered Growth Operating System",
    description: "AI-powered content, UGC ads, automation, and growth infrastructure built for modern internet brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
