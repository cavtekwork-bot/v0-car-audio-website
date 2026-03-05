"use client"

import { Wrench, Car, Droplets, Disc, Battery, Key, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const mechanicServices = [
  {
    icon: Wrench,
    title: "Engine Repair",
    description: "Complete engine diagnostics and repairs. From minor fixes to major overhauls, we've got you covered.",
  },
  {
    icon: Car,
    title: "Headers Replacement",
    description: "Professional exhaust header installation and replacement for improved performance and sound.",
  },
  {
    icon: Droplets,
    title: "Oil Changes",
    description: "Quick and thorough oil changes using quality oils to keep your engine running smoothly.",
  },
  {
    icon: Disc,
    title: "Brake Services",
    description: "Brake pad replacement, rotor resurfacing, and complete brake system repairs for your safety.",
  },
  {
    icon: Battery,
    title: "Car Battery Changes",
    description: "Battery testing, replacement, and installation. We carry batteries for all vehicle makes and models.",
  },
  {
    icon: Key,
    title: "Key Fob Battery",
    description: "Quick key fob battery replacement service. Get your remote working like new in minutes.",
  },
]

export function MechanicServicesSection() {
  return (
    <section id="mechanic-services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Auto Repair</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Full Mechanic Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Beyond audio and security, we offer complete auto repair and maintenance services to keep your vehicle in top shape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mechanicServices.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <a 
                href="tel:7183645070" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Call for Quote <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Need a repair? Give us a call!</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="tel:7183645070">(718) 364-5070</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
