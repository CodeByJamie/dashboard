'use client'
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/15c33e8a67.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <html lang="en" className="bg-zinc-800">
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
