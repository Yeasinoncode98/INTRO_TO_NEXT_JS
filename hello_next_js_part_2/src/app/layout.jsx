// src/app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Food App",
  description: "A food ordering app built with Next.js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <header className="items-center px-5 py-4 flex justify-between gap-5 bg-stone-800 text-white shadow-md">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="w-[120px]" />
          </Link>

          <nav className="flex gap-5">
            <Link
              href="/foods"
              className="px-4 py-2 rounded-md hover:bg-stone-700 transition"
            >
              Food
            </Link>
            <Link
              href="/reviews"
              className="px-4 py-2 rounded-md hover:bg-stone-700 transition"
            >
              Reviews
            </Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="px-5 py-8">
          <CartProvider>{children}</CartProvider>
        </main>

        {/* Footer */}
        <footer className="text-center py-5 border-t border-gray-200 mt-10 text-gray-500">
          © {new Date().getFullYear()} Next.js Food App. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
