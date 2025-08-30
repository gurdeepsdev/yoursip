"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Salad as Restaurant, Coffee, Building2, Calendar, Heart, Palette } from "lucide-react"
import { useEffect, useRef } from "react"

const services = [
  {
    icon: Restaurant,
    title: "Restaurants",
    description: "Custom branded bottles that enhance your dining experience and brand recognition.",
  },
  {
    icon: Coffee,
    title: "Cafes & Coffee Shops",
    description: "Perfect for takeaway orders and building customer loyalty with branded bottles.",
  },
  {
    icon: Building2,
    title: "Hotels & Resorts",
    description: "Premium branded water bottles for guest rooms and hospitality services.",
  },
  {
    icon: Calendar,
    title: "Corporate Events",
    description: "Professional branded bottles for conferences, meetings, and corporate gatherings.",
  },
  {
    icon: Heart,
    title: "Weddings & Celebrations",
    description: "Personalized bottles for special occasions and memorable celebrations.",
  },
  {
    icon: Palette,
    title: "Custom Design Service",
    description: "Free design consultation and samples to bring your brand vision to life.",
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

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

    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          observer.observe(card)
        }, index * 100)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="water-bubble bubble-1"></div>
        <div className="water-bubble bubble-2"></div>
        <div className="water-bubble bubble-3"></div>
        <div className="water-bubble bubble-4"></div>
        <div className="water-bubble bubble-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide custom water bottle branding solutions for various industries and occasions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 opacity-0 transform translate-y-8 hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors relative">
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
