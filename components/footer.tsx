import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-orange-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="block mb-4">
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  TOP NOTCH
                </span>
                <span className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase">
                  Auto Audio & Security
                </span>
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
        <div className="pt-8 border-t border-orange-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
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
