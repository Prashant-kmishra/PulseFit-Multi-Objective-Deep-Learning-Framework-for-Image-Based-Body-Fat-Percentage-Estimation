"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-2xl md:rounded-full px-6 py-3 flex flex-col md:flex-row md:justify-between md:items-center bg-white/40 border border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all">
          
          <div className="flex justify-between items-center w-full md:w-auto">
            <Link href="/" onClick={() => setIsOpen(false)} className="font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-deepblue to-primary">
              PulseFit
            </Link>
            
            {/* Hamburger button */}
            <button 
              className="md:hidden text-slate-800 p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link href="/" className="hover:text-primary transition-colors">Overview</Link>
            <Link href="/explainability" className="hover:text-primary transition-colors">Model Explainability</Link>
            <Link href="/methodology" className="hover:text-primary transition-colors">Limitations</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          <a href="/predict" className="hidden md:block">
            <button className="bg-primary hover:bg-deepblue text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Predict Body Fat %
            </button>
          </a>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="flex flex-col gap-4 mt-6 md:hidden pb-2 animate-in slide-in-from-top-2">
              <Link href="/" onClick={() => setIsOpen(false)} className="font-semibold text-slate-700 hover:text-primary transition-colors">Overview</Link>
              <Link href="/explainability" onClick={() => setIsOpen(false)} className="font-semibold text-slate-700 hover:text-primary transition-colors">Model Explainability</Link>
              <Link href="/methodology" onClick={() => setIsOpen(false)} className="font-semibold text-slate-700 hover:text-primary transition-colors">Limitations</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="font-semibold text-slate-700 hover:text-primary transition-colors">Contact</Link>
              <a href="/predict" onClick={() => setIsOpen(false)} className="mt-2">
                <button className="w-full bg-primary hover:bg-deepblue text-white px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-md">
                  Predict Body Fat %
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
