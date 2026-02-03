"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marcus Johnson",
    vehicle: "2023 Ford F-150",
    rating: 5,
    text: "The team at Apex completely transformed my truck's sound system. The bass is incredible and the install is flawless. Highly recommend!",
  },
  {
    name: "Sarah Chen",
    vehicle: "2022 BMW X5",
    rating: 5,
    text: "Professional service from start to finish. They installed a remote start and alarm system. Now I can start my car from my phone - amazing!",
  },
  {
    name: "David Rodriguez",
    vehicle: "2024 Chevrolet Camaro",
    rating: 5,
    text: "Best car audio shop in town. They really know their stuff and took the time to explain everything. My Camaro sounds better than ever.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-lg p-6 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.vehicle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-serif text-4xl font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground mt-1">Years in Business</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-primary">5,000+</p>
            <p className="text-sm text-muted-foreground mt-1">Installations</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-primary">4.9</p>
            <p className="text-sm text-muted-foreground mt-1">Average Rating</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground mt-1">Satisfaction Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  )
}
