"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

// Sleek minimalist sports coupe with wind lines
function SportsCarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 32" fill="currentColor" className={className}>
      {/* Wind/motion lines */}
      <rect x="0" y="14" width="12" height="1.5" rx="0.75" opacity="0.4" />
      <rect x="2" y="18" width="8" height="1.5" rx="0.75" opacity="0.25" />
      <rect x="4" y="22" width="6" height="1.5" rx="0.75" opacity="0.15" />
      {/* Sleek coupe body */}
      <path d="M20 24c0-1.5 1.2-2.7 2.7-2.7h1.6c1.5 0 2.7 1.2 2.7 2.7M53 24c0-1.5 1.2-2.7 2.7-2.7h1.6c1.5 0 2.7 1.2 2.7 2.7" />
      <path d="M18 22h46c2 0 3-1 3-2v-1c0-1-0.5-2-1.5-2.5L60 14l-6-4c-1-0.7-2.2-1-3.4-1H36c-2 0-4 0.8-5.4 2.2L26 16l-6 1.5c-1.5 0.4-2.5 1.5-2.5 3v0.5c0 0.6 0.2 1 0.5 1z" />
      {/* Windows */}
      <path d="M32 12.5l3.5-2.5h12l4 3.5v4h-19.5v-5z" fillOpacity="0.3" />
      {/* Wheels */}
      <circle cx="25" cy="24" r="4" />
      <circle cx="25" cy="24" r="2" fillOpacity="0.3" />
      <circle cx="57" cy="24" r="4" />
      <circle cx="57" cy="24" r="2" fillOpacity="0.3" />
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
            <SportsCarIcon className="w-14 h-7 text-primary" />
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
