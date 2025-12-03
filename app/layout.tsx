import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StemLab | Elite Research & Data Intelligence",
  description: "Decoding data, empowering research. The bridge between academic theory and high-end industry application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans bg-brand-dark text-slate-200 selection:bg-brand-blue selection:text-white`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.link/71cwna"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl z-50 hover:scale-110 transition-transform cursor-pointer shadow-2xl animate-[pulse-green_2s_infinite]"
        >
          <WhatsappLogo weight="fill" />
        </a>
      </body>
    </html>
  );
}
