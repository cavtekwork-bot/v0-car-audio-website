import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

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

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <SportsCarIcon className="w-14 h-7 text-primary" />
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
