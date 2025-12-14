import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alwin Zawadzki | Portfolio",
  description: "Portfolio d'Alwin Zawadzki, Ingénieur Logiciel",
};
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300 relative`}
        >
        <Providers>
            <div className="ambient-light-bg" aria-hidden="true" />
            <NavBar />
            <ThemeToggle />

            <main className="flex-grow z-10 relative w-full max-w-3xl mx-auto px-6 pt-24 sm:pt-32">
                {children}
            </main>

            <Footer />
        </Providers>
        </body>
        </html>
    );
}