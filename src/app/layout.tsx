import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Shea Harrington - Full Stack Developer",
  description: "Portfolio site for Shea Harrington, a full stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-foreground relative overflow-visible">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
