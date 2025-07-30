"use client";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";

// Import all weights from 100 to 800
const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const HideNavAndFooter = ["/dashboard", "/login", "/register"].some((path) =>
    pathname?.startsWith(path)
  );

  return (
    <html lang="en" className={`${sora.variable}`}>
      <body className="antialiased bg-primaryBG">
        {!HideNavAndFooter && <Navbar />}
        {children}
        <Toaster position="top-center" />
        {!HideNavAndFooter && <Footer />}
      </body>
    </html>
  );
}
