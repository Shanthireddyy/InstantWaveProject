import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instant Wave",
  description: "Your Seamless communication hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/instantwave.png" />
      </head>
      <body className={`${inter.className} bg-dark-2`}>{children}</body>
    </html>
  );
}
