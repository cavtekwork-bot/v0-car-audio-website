"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Volume2, Shield, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            <p className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              Premium Car Audio & Security
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
              Elevate Your
              <span className="block text-primary">Driving Experience</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transform your vehicle with cutting-edge audio systems and advanced security solutions. 
              Professional installation by certified technicians.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                View Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary text-base px-8 bg-transparent">
                Get Free Quote
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">5K+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Customers</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <Volume2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-serif font-semibold text-lg text-foreground">Car Audio</h3>
                <p className="text-sm text-muted-foreground mt-2">Premium speakers, subwoofers & amplifiers</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-serif font-semibold text-lg text-foreground">Security Systems</h3>
                <p className="text-sm text-muted-foreground mt-2">Advanced alarms & GPS tracking</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-serif font-semibold text-lg text-foreground">Remote Starters</h3>
                <p className="text-sm text-muted-foreground mt-2">Start your car from anywhere</p>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                <p className="text-sm font-medium text-primary mb-2">Free Consultation</p>
                <p className="font-serif text-2xl font-bold text-foreground">Call Today!</p>
                <p className="text-primary font-semibold mt-2">(718) 555-1234</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-border relative overflow-hidden">
          <div className="w-full h-1/2 bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
