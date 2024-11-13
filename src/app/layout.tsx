import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YuZhou",
  description: "YuZhou The Universe's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/yuzhou.png" type="image/png" /> {/* Link to your favicon */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
