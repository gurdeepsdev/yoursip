import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import ProcessSection from "@/components/process-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
