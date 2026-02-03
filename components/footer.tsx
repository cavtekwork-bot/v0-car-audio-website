import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <svg 
                viewBox="0 0 60 24" 
                className="w-14 h-6 text-primary"
                fill="currentColor"
              >
                <path d="M2 16c0 0 3-1 6-1s8 2 14 2c4 0 8-1 12-2s10-2 14-2c3 0 6 0.5 8 1l2 1v2c0 1-1 2-3 2.5s-5 0.5-8 0.5c-4 0-10-0.5-14-0.5s-8 0.5-12 0.5-7-0.5-10-1c-2-0.4-3-1-4-2l-1-1.5v-1.5z M8 14c1-3 3-5 6-6s7-1 11-1c5 0 10 1 14 2s7 3 9 5l-2 0.5c-2-2-4-3-7-4s-8-1.5-13-1.5c-4 0-8 0.5-11 1.5s-5 2-6 4l-1-0.5z M52 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M10 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
              <div>
                <span className="font-serif font-bold text-2xl tracking-wide text-foreground">FORDHAM</span>
                <span className="block text-[10px] tracking-[0.25em] text-primary uppercase font-semibold">Auto & Security</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Premium car audio and security solutions. Professional installation by certified technicians.
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
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
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
              <li><a href="tel:+17185551234" className="hover:text-foreground transition-colors">(718) 555-1234</a></li>
              <li><a href="mailto:info@fordhamauto.com" className="hover:text-foreground transition-colors">info@fordhamauto.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Fordham Auto and Security. All rights reserved.
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
