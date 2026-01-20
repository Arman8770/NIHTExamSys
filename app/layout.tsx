import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



import { SessionProvider } from "@/components/providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ExamSys | Premium Exam Management",
  description: "Advanced exam management for modern education.",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background antialiased selection:bg-blue-600/10 selection:text-blue-600`}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
