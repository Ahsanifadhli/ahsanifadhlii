import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot"; // <-- 1. Import Chatbot

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portofolio Profesional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Chatbot /> {/* <-- 2. Pasang Chatbot di paling bawah (di luar children) */}
      </body>
    </html>
  );
}