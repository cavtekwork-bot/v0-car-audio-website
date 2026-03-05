"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Custom subwoofer enclosure installation", category: "Audio" },
  { src: "/images/gallery-2.jpg", alt: "Alpine head unit upgrade", category: "Head Unit" },
  { src: "/images/gallery-3.jpg", alt: "Amplifier installation", category: "Audio" },
  { src: "/images/gallery-4.jpg", alt: "Remote start system", category: "Security" },
  { src: "/images/gallery-5.jpg", alt: "Component speaker install", category: "Audio" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Our Work</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Recent Installations
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Browse through our recent projects and see the quality of our craftsmanship.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-foreground font-medium text-sm px-4">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
