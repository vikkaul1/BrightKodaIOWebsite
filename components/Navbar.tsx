"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-koda-teal flex items-center justify-center">
            <span className="text-white font-bold text-sm font-display">BK</span>
          </div>
          <span className="text-koda-navy font-display text-xl font-semibold">BrightKoda</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#products" className="text-gray-600 hover:text-koda-teal text-sm font-medium transition-colors">Products</Link>
          <Link href="/#about" className="text-gray-600 hover:text-koda-teal text-sm font-medium transition-colors">About</Link>
          <Link href="/apply" className="text-gray-600 hover:text-koda-teal text-sm font-medium transition-colors">Apply as Caregiver</Link>
          <Link href="/contact" className="text-gray-600 hover:text-koda-teal text-sm font-medium transition-colors">Contact Us</Link>
          <Link href="/contact" className="btn-primary text-sm py-2">Get Started</Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-koda-navy transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-koda-navy transition-opacity ${open ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-koda-navy transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          <Link href="/#products" className="block text-gray-700 py-2 text-sm font-medium" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/#about" className="block text-gray-700 py-2 text-sm font-medium" onClick={() => setOpen(false)}>About</Link>
          <Link href="/apply" className="block text-gray-700 py-2 text-sm font-medium" onClick={() => setOpen(false)}>Apply as Caregiver</Link>
          <Link href="/contact" className="block text-gray-700 py-2 text-sm font-medium" onClick={() => setOpen(false)}>Contact Us</Link>
          <Link href="/contact" className="btn-primary block text-center text-sm py-2" onClick={() => setOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
}
