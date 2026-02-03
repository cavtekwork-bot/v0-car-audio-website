"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
              Premium Car Audio & Security
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
              Elevate Your
              <span className="block text-primary">Driving Experience</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Transform your vehicle with cutting-edge audio systems and advanced security solutions. 
              Professional installation by certified technicians.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                View Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary text-base px-8 bg-transparent">
                Get Free Quote
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 max-w-sm mx-auto">
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-primary">15+</p>
                <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-primary">5K+</p>
                <p className="text-xs text-muted-foreground mt-1">Happy Customers</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground mt-1">Satisfaction</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      </section>
  )
}
