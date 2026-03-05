import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SpecialsSlider } from "@/components/specials-slider"
import { ServicesSection } from "@/components/services-section"
import { MechanicServicesSection } from "@/components/mechanic-services-section"
import { ProductsSection } from "@/components/products-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <SpecialsSlider />
      <HeroSection />
      <ServicesSection />
      <MechanicServicesSection />
      <ProductsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
