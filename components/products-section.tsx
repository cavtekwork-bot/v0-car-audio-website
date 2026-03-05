"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const brands = [
  "JVC",
  "Compustar",
  "Viper",
  "Crunch",
  "Nakamichi",
  "Stetsom",
  "PRV Audio",
  "Kole Audio",
  "Mobil 1",
  "Castrol",
  "Pennzoil",
  "Wagner",
  "Bosch",
]

// Audio & Security Products
const audioProducts = [
  {
    name: "Viper 5706V",
    category: "Security & Remote Start",
    rating: 5,
    image: "/images/products/viper-5706v.jpg",
  },
  {
    name: "Crunch GP-3500.1D",
    category: "Amplifier - 3500W",
    rating: 5,
    image: "/images/products/crunch-3500.jpg",
  },
  {
    name: "AP2000W APWM 200",
    category: "Amplifier - 2000W",
    rating: 5,
    image: "/images/products/ap2000w.jpg",
  },
  {
    name: "Kole Audio KP2000.4D",
    category: "4-Channel Amplifier",
    rating: 5,
    image: "/images/products/kole-audio-kp2000.jpg",
  },
  {
    name: "JVC KW-M690BW",
    category: "Head Unit - Wireless CarPlay",
    rating: 5,
    image: "/images/products/jvc-kw-m690bw.jpg",
  },
  {
    name: "JVC KD-X280BT",
    category: "Digital Media Receiver",
    rating: 5,
    image: "/images/products/jvc-kd-x280bt.jpg",
  },
  {
    name: "Nakamichi NA3625-W6",
    category: "Wireless CarPlay/Android Auto",
    rating: 5,
    image: "/images/products/nakamichi-na3625.jpg",
  },
  {
    name: "Compustar CSX9900-AS",
    category: "Remote Start & Security",
    rating: 5,
    image: "/images/products/compustar-9900.jpg",
  },
  {
    name: "Compustar CS8920-AS",
    category: "Remote Start & Security",
    rating: 5,
    image: "/images/products/compustar-8920.jpg",
  },
  {
    name: "Compustar CS4900-AS",
    category: "Remote Start & Security",
    rating: 4,
    image: "/images/products/compustar-4900.jpg",
  },
  {
    name: "Stetsom Attack 3000 Bravo",
    category: "Amplifier - 3000W",
    rating: 5,
    image: "/images/products/stetsom-attack-3000.jpg",
  },
  {
    name: "PRV Audio 6FR200",
    category: "Full Range Speaker - 200W",
    rating: 5,
    image: "/images/products/prv-audio-speaker.jpg",
  },
]

// Motor Oils - American & Japanese
const oilProducts = [
  {
    name: "Mobil 1 Synthetic 5W-30",
    category: "Full Synthetic Oil",
    rating: 5,
    image: "/images/products/mobil1-oil.jpg",
  },
  {
    name: "Castrol Edge 5W-30",
    category: "Advanced Full Synthetic",
    rating: 5,
    image: "/images/products/castrol-oil.jpg",
  },
  {
    name: "Pennzoil Platinum",
    category: "Full Synthetic Oil",
    rating: 5,
    image: "/images/products/pennzoil.jpg",
  },
  {
    name: "Valvoline Full Synthetic",
    category: "High Mileage Oil",
    rating: 5,
    image: "/images/products/valvoline.jpg",
  },
  {
    name: "Toyota Genuine Motor Oil",
    category: "OEM Japanese Formula",
    rating: 5,
    image: "/images/products/toyota-oil.jpg",
  },
  {
    name: "Honda Genuine Motor Oil",
    category: "OEM Japanese Formula",
    rating: 5,
    image: "/images/products/honda-oil.jpg",
  },
]

// Brake Pads
const brakeProducts = [
  {
    name: "Ceramic Brake Pads",
    category: "Premium Ceramic",
    rating: 5,
    image: "/images/products/ceramic-brake-pads.jpg",
  },
  {
    name: "Wagner ThermoQuiet",
    category: "Ceramic Brake Pads",
    rating: 5,
    image: "/images/products/wagner-brakes.jpg",
  },
  {
    name: "Bosch QuietCast",
    category: "Premium Brake Pads",
    rating: 5,
    image: "/images/products/bosch-brakes.jpg",
  },
]

function ProductCard({ product }: { product: { name: string; category: string; rating: number; image: string } }) {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="aspect-square relative bg-secondary/50 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          unoptimized
          className="object-contain group-hover:scale-105 transition-transform duration-500 p-4"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">{product.category}</p>
        <h4 className="font-semibold text-foreground mb-2 text-sm">{product.name}</h4>
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < product.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
            />
          ))}
        </div>
        <a href="tel:7183645070" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
          Call for Quote
        </a>
      </div>
    </div>
  )
}

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Full Service Auto Shop</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Audio, Security & Mechanic Products
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            From premium car audio to quality motor oils and brake parts - we stock everything your vehicle needs.
          </p>
        </div>

        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-16 pb-16 border-b border-border">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-muted-foreground/50 hover:text-foreground transition-colors font-serif text-lg font-bold"
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Audio & Security Products */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">Car Audio & Security</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {audioProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <p className="text-center mt-6 text-muted-foreground">
            And more! <a href="tel:7183645070" className="text-primary font-semibold hover:text-primary/80">Call for more options</a>
          </p>
        </div>

        {/* Motor Oils */}
        <div className="mb-12 pt-12 border-t border-border">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">Motor Oils</h3>
          <p className="text-muted-foreground text-center mb-8">Premium oils for American & Japanese vehicles</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {oilProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <p className="text-center mt-6 text-muted-foreground">
            And more! <a href="tel:7183645070" className="text-primary font-semibold hover:text-primary/80">Call for more options</a>
          </p>
        </div>

        {/* Brake Pads */}
        <div className="mb-12 pt-12 border-t border-border">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">Brake Pads & Parts</h3>
          <p className="text-muted-foreground text-center mb-8">Quality brake components for all makes and models</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {brakeProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Need something specific? We can order any part you need.</p>
          <a href="tel:7183645070" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors">
            Call (718) 364-5070
          </a>
        </div>
      </div>
    </section>
  )
}
