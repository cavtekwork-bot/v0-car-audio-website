import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

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

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <SportsCarIcon className="w-16 h-8 text-primary" />
              <div>
                <span className="font-serif font-bold text-xl tracking-wide text-foreground">TOP NOTCH</span>
                <span className="block text-[10px] tracking-[0.2em] text-primary uppercase font-semibold">Auto Audio & Security</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Full service auto shop - car audio, security, and mechanic services. Professional work at affordable prices.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Car Audio</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security Systems</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Remote Starters</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">CarPlay / Android Auto</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Backup Cameras</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gallery</Link></li>
              <li><Link href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Products</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Financing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>2514 Hoffman Road</li>
              <li>Bronx, NY 10458</li>
              <li><a href="tel:7183645070" className="hover:text-foreground transition-colors">(718) 364-5070</a></li>
              <li><a href="mailto:topnotchautoaudio@gmail.com" className="hover:text-foreground transition-colors">topnotchautoaudio@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Top Notch Auto Audio and Security. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
