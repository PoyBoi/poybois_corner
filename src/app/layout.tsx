import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PoyBoi — Parv Sharma | AI Engineer",
  description: "AI Engineer, Python Dev & Music Producer from Noida, Delhi/NCR. Building intelligent systems that matter.",
  keywords: ["AI Engineer", "Python", "LangChain", "LLaMA", "Machine Learning", "Parv Sharma", "PoyBoi"],
  openGraph: {
    title: "PoyBoi — Parv Sharma | AI Engineer",
    description: "AI Engineer, Python Dev & Music Producer building intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
