"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-8 md:py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-car.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex items-center justify-center">
          {/* Left Column - Text */}
          <div className="text-center">
            <p className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              Full Service Auto Shop - Audio, Security & Mechanic Services
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
              Elevate Your
              <span className="block text-primary">Driving Experience</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Your complete auto shop for car audio, security systems, oil changes, brake service, engine repair, and more. 
              Professional service by experienced technicians.
            </p>
            
            {/* CTA Button */}
            <div className="mt-6 flex justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8" asChild>
                <a href="tel:7183645070">
                  <Phone className="mr-2 w-4 h-4" />
                  Call for a Quote
                </a>
              </Button>
            </div>

            {/* Tagline */}
            <div className="mt-6 max-w-lg mx-auto">
              <p className="text-base md:text-lg font-medium text-primary text-center">
                Your All-In-One Stop Shop for Audio, Electrical, Mechanical Repairs & Upgrades
              </p>
            </div>
          </div>

          
        </div>
      </div>

      </section>
  )
}
