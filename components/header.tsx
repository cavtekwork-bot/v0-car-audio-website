"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

// Sleek minimalist supercar silhouette
function SportsCarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" fill="currentColor" className={className}>
      {/* Sleek supercar body - flowing aerodynamic lines */}
      <path d="M5 28 Q8 26 15 25 Q25 24 35 20 Q45 16 55 14 Q65 13 75 14 Q85 15 92 18 L95 20 Q96 22 95 24 L93 26 Q88 28 80 28 Q75 28 72 26 Q70 24 68 24 Q66 24 64 26 Q62 28 58 28 L42 28 Q38 28 36 26 Q34 24 32 24 Q30 24 28 26 Q26 28 22 28 L12 28 Q8 28 5 28 Z" />
      {/* Roof line accent */}
      <path d="M40 18 Q50 14 60 13 Q70 13 78 15" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      {/* Window */}
      <path d="M42 19 Q52 15 62 14 Q70 14 76 16 L74 18 Q65 17 55 18 Q48 19 42 21 Z" opacity="0.3" />
      {/* Front wheel */}
      <circle cx="30" cy="27" r="5" />
      <circle cx="30" cy="27" r="2.5" opacity="0.4" />
      {/* Rear wheel */}
      <circle cx="70" cy="27" r="5" />
      <circle cx="70" cy="27" r="2.5" opacity="0.4" />
      {/* Speed lines */}
      <line x1="0" y1="20" x2="8" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="2" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    </svg>
  )
}

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <SportsCarIcon className="w-16 h-8 text-primary" />
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-xl tracking-wide text-foreground">TOP NOTCH</span>
              <span className="block text-[10px] tracking-[0.2em] text-primary uppercase font-semibold">Auto Audio & Security</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center">
            <a href="tel:7183645070" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              (718) 364-5070
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <a href="tel:7183645070" className="block w-full text-center py-2 text-lg font-semibold text-primary">
                (718) 364-5070
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
