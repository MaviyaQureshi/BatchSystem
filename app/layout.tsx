import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const oswald = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "uifry Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
