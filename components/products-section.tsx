"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const brands = [
  "JL Audio",
  "Alpine",
  "Kenwood",
  "Pioneer",
  "Kicker",
  "Rockford Fosgate",
  "Sony",
  "Compustar",
]

const featuredProducts = [
  {
    name: "JL Audio 12W6v3",
    category: "Subwoofer",
    rating: 5,
    image: "/images/subwoofer.jpg",
  },
  {
    name: "Alpine iLX-W670",
    category: "Head Unit",
    rating: 5,
    image: "/images/head-unit.jpg",
  },
  {
    name: "Compustar CS7900-AS",
    category: "Remote Start",
    rating: 4,
    image: "/images/remote-start.jpg",
  },
  {
    name: "Kicker KS Series",
    category: "Component Speakers",
    rating: 5,
    image: "/images/speakers.jpg",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Top Brands</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Premium Products We Trust
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            We only work with industry-leading brands to ensure quality and reliability.
          </p>
        </div>

        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 pb-16 border-b border-border">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-muted-foreground/50 hover:text-foreground transition-colors font-serif text-xl font-bold"
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mb-8">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">Featured Products</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-square relative bg-secondary/50 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">{product.category}</p>
                <h4 className="font-semibold text-foreground mb-2">{product.name}</h4>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < product.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a href="tel:7183645070" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                    Call for Quote
                  </a>
                  <Button size="sm" variant="outline" className="text-foreground border-border hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="text-foreground border-border hover:bg-secondary bg-transparent">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
