"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

// Modern minimalist sports car icon
function SportsCarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 32" fill="currentColor" className={className}>
      <path d="M58 20h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-1c0 2.2-1.8 4-4 4s-4-1.8-4-4H13c0 2.2-1.8 4-4 4s-4-1.8-4-4H2c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2l4-6c1.5-2.3 4-4 7-4h10l8-4c1-.5 2.1-.5 3 0l12 6c2 1 4 3 5 5l7 2v3zM9 28c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm46 0c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM12 14H8l-2 4h8l-2-4zm6-4v8h12v-8H18zm14 0v8h10l-4-6-6-2z" />
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
            <SportsCarIcon className="w-12 h-6 text-primary" />
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
