import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James McAdams Software Developer",
  description:
    "Portfolio of James McAdams, featuring software development, game development, and programming projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-pt-24 antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <div className="flex-1 xl:min-h-0">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
