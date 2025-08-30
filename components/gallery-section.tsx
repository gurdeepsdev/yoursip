"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef } from "react"

const galleryItems = [
  {
    title: "Luxury Hotel Collection",
    image: "/luxury-hotel-water-bottle-with-gold-accents.png",
    category: "Hotels",
  },
  {
    title: "Restaurant Chain Branding",
    image: "/premium-custom-water-bottle-with-elegant-restauran.png",
    category: "Restaurants",
  },
  {
    title: "Wedding Celebration",
    image: "/elegant-wedding-water-bottles-with-custom-monogram.png",
    category: "Weddings",
  },
  {
    title: "Corporate Event Series",
    image: "/corporate-branded-water-bottles-with-logo.png",
    category: "Corporate",
  },
  {
    title: "Cafe Chain Collection",
    image: "/cafe-branded-water-bottles-with-coffee-theme.png",
    category: "Cafes",
  },
  {
    title: "Special Event Branding",
    image: "/special-event-custom-water-bottles-with-colorful-d.png",
    category: "Events",
  },
]

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    itemsRef.current.forEach((item, index) => {
      if (item) {
        setTimeout(() => {
          observer.observe(item)
        }, index * 150)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="gallery" className="py-20 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="water-wave wave-1"></div>
        <div className="water-wave wave-2"></div>
        <div className="water-wave wave-3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Our Work Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of custom branded water bottles across different industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el
              }}
              className="bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-500 group opacity-0 transform translate-y-8"
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 bg-blue-400/80 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 z-20"></div>

                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium mb-1">{item.category}</p>
                      <h3 className="text-lg font-serif font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
