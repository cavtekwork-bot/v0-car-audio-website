"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  type CarouselApi 
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const specials = [
  {
    id: 1,
    title: "Audio Installation",
    subtitle: "Remote Start Installation",
    description: "Stay warm this winter! Get a complete remote start system installed by our experts.",
    discount: "10% OFF Installation",
    image: "/images/special-remote-start.jpg",
    validUntil: "Limited Time Offer",
  },
  {
    id: 2,
    title: "Audio Bundle",
    subtitle: "Subwoofer + Amp Combo",
    description: "12\" Subwoofer with 500W Amplifier and custom enclosure. Professional installation included.",
    discount: "10% OFF Bundle",
    image: "/images/special-subwoofer.jpg",
    validUntil: "Limited Time Offer",
  },
  {
    id: 3,
    title: "Security Bundle",
    subtitle: "Alarm + Camera System",
    description: "Complete vehicle security with alarm system, dash cam, and GPS tracking.",
    discount: "10% OFF Bundle",
    image: "/images/special-security.jpg",
    validUntil: "While Supplies Last",
  },
  {
    id: 4,
    title: "Tech Installation",
    subtitle: "Apple CarPlay / Android Auto",
    description: "Upgrade your factory radio to a touchscreen with Apple CarPlay and Android Auto.",
    discount: "10% OFF Installation",
    image: "/images/special-carplay.jpg",
    validUntil: "This Month Only",
  },
  {
    id: 5,
    title: "Low Prices - Fast Service",
    subtitle: "Oil Change Special",
    description: "Keep your engine running smooth with our professional oil change service. In and out fast!",
    discount: "Low Prices",
    image: "/images/special-oil-change.jpg",
    validUntil: "Always Available",
  },
  {
    id: 6,
    title: "Low Prices - Fast Service",
    subtitle: "Brake Pads & Rotors",
    description: "Full brake inspection and replacement. Same-day service available. Keep your family safe!",
    discount: "Fast Service",
    image: "/images/special-brakes.jpg",
    validUntil: "Call for Quote",
  },
  {
    id: 7,
    title: "Low Prices - Fast Service",
    subtitle: "Engine Repair & Diagnostics",
    description: "Full engine diagnostics, repair, and headers replacement. Quick turnaround, affordable prices.",
    discount: "Low Prices",
    image: "/images/special-engine.jpg",
    validUntil: "Call for Quote",
  },
  {
    id: 8,
    title: "Security Installation",
    subtitle: "Window Tinting",
    description: "Keep cool and look sharp with professional window tinting. UV protection and privacy.",
    discount: "10% OFF Installation",
    image: "/images/special-tint.jpg",
    validUntil: "Call for Quote",
  },
]

export function SpecialsSlider() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index)
  }, [api])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  return (
    <section className="relative w-full bg-secondary pt-16 md:pt-20">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {specials.map((special) => (
            <CarouselItem key={special.id} className="pl-0 basis-full">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] bg-black">
                {/* Background Image - Logo Banner */}
                <Image
                  src="/images/logo.png"
                  alt="Top Notch Auto Audio & Security"
                  fill
                  className="object-contain object-center"
                  priority
                />
                
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content - Positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                  <div className="container mx-auto">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div>
                        {/* Discount Badge */}
                        <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-md text-lg md:text-2xl font-bold mb-2 shadow-lg">
                          {special.discount}
                        </span>
                        
                        {/* Title */}
                        <h2 className="text-white text-xl md:text-3xl font-bold">
                          {special.subtitle}
                        </h2>
                        <p className="text-white/80 text-sm md:text-base mt-1">
                          {special.description}
                        </p>
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center gap-3">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold" asChild>
                          <a href="tel:7183645070">(718) 364-5070</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-background/80 hover:bg-background border border-border rounded-full flex items-center justify-center transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-background/80 hover:bg-background border border-border rounded-full flex items-center justify-center transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>
      </Carousel>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {specials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
              current === index 
                ? "w-6 md:w-8 bg-primary" 
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
