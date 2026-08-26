import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PulseFit | AI Body Composition",
  description: "Lab-grade body composition in 8 seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen text-slate-800 relative selection:bg-primary/30`}>
        
        {/* Apple-style Dynamic Mesh Gradient Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#F2F6FA]">
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-[#1D6FE0]/30 to-[#12A594]/30 blur-[120px] animate-blob mix-blend-multiply opacity-80" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#12A594]/30 to-[#0B3C8C]/30 blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply opacity-80" />
          <div className="absolute top-[20%] left-[40%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#1D6FE0]/20 to-[#60A5FA]/30 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply opacity-80" />
        </div>

        <Navbar />

        <div className="pt-28 pb-12">
          {children}
        </div>
      </body>
    </html>
  );
}
