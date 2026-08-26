import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

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

        {/* Global Glass Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="glass-panel rounded-full px-6 py-3 flex justify-between items-center bg-white/40 border border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl">
              <Link href="/" className="font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-deepblue to-primary">
                PulseFit
              </Link>
              
              <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
                <Link href="/" className="hover:text-primary transition-colors">Overview</Link>
                <Link href="/explainability" className="hover:text-primary transition-colors">Model Explainability</Link>
                <Link href="/methodology" className="hover:text-primary transition-colors">Limitations</Link>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </nav>

              <a href="/predict">
                <button className="bg-primary hover:bg-deepblue text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  Predict Body Fat %
                </button>
              </a>
            </div>
          </div>
        </header>

        <div className="pt-28 pb-12">
          {children}
        </div>
      </body>
    </html>
  );
}
