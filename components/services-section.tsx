"use client"

import { Volume2, Shield, Smartphone, Radio, Camera, Settings, ArrowRight, Wrench, Car, Battery, Disc, Key } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Volume2,
    title: "Car Audio Systems",
    description: "Premium speakers, subwoofers, and amplifiers from top brands. Crystal clear sound for any vehicle.",
    features: ["Component Speakers", "Subwoofers", "Amplifiers", "Head Units"],
  },
  {
    icon: Shield,
    title: "Security & Alarms",
    description: "Protect your investment with state-of-the-art car alarm systems and theft deterrents.",
    features: ["Car Alarms", "Kill Switches", "GPS Tracking", "Smart Alerts"],
  },
  {
    icon: Smartphone,
    title: "Remote Starters",
    description: "Start your car from anywhere with advanced remote start systems. Perfect for any weather.",
    features: ["2-Way Remotes", "Smartphone Control", "Climate Control", "Long Range"],
  },
  {
    icon: Radio,
    title: "Apple CarPlay & Android Auto",
    description: "Upgrade your dash with seamless smartphone integration for navigation, music, and calls.",
    features: ["Wireless CarPlay", "Android Auto", "Screen Mirroring", "USB Integration"],
  },
  {
    icon: Wrench,
    title: "Engine Repair",
    description: "Full engine diagnostics and repair services. We keep your vehicle running smoothly.",
    features: ["Diagnostics", "Engine Repair", "Headers Replacement", "Tune-Ups"],
  },
  {
    icon: Car,
    title: "Oil Changes & Maintenance",
    description: "Regular maintenance to extend the life of your vehicle. Quick and affordable service.",
    features: ["Oil Changes", "Fluid Top-Offs", "Filter Replacement", "Inspections"],
  },
  {
    icon: Disc,
    title: "Brake Services",
    description: "Complete brake repair and replacement. Keep your family safe on the road.",
    features: ["Brake Pads", "Rotors", "Brake Fluid", "Full Inspection"],
  },
  {
    icon: Battery,
    title: "Battery Services",
    description: "Car battery testing, replacement, and key fob battery services.",
    features: ["Battery Testing", "Battery Replacement", "Key Fob Batteries", "Jump Starts"],
  },
  {
    icon: Camera,
    title: "Backup Cameras & Sensors",
    description: "Enhanced visibility and parking assistance for safer driving and maneuvering.",
    features: ["HD Cameras", "Parking Sensors", "Blind Spot Monitors", "360° View"],
  },
  {
    icon: Settings,
    title: "Custom Installation",
    description: "Expert installation with clean wiring and professional finish. We do it right the first time.",
    features: ["Clean Wiring", "Custom Mounts", "Sound Tuning", "Warranty"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Our Services</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Audio, Security & Mechanic Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            From premium sound systems and security to full mechanic services. Your one-stop auto shop in the Bronx.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Not sure what you need?</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
