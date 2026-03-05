"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
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
            <svg 
              viewBox="0 0 60 24" 
              className="w-14 h-6 text-primary"
              fill="currentColor"
            >
              <path d="M2 16c0 0 3-1 6-1s8 2 14 2c4 0 8-1 12-2s10-2 14-2c3 0 6 0.5 8 1l2 1v2c0 1-1 2-3 2.5s-5 0.5-8 0.5c-4 0-10-0.5-14-0.5s-8 0.5-12 0.5-7-0.5-10-1c-2-0.4-3-1-4-2l-1-1.5v-1.5z M8 14c1-3 3-5 6-6s7-1 11-1c5 0 10 1 14 2s7 3 9 5l-2 0.5c-2-2-4-3-7-4s-8-1.5-13-1.5c-4 0-8 0.5-11 1.5s-5 2-6 4l-1-0.5z M52 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M10 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
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

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book Appointment
            </Button>
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
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Book Appointment
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
