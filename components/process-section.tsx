"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Palette, Package, Truck } from "lucide-react"
import { useEffect, useRef } from "react"

const processSteps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Consultation",
    description: "Share your requirements, brand guidelines, and vision with our design team.",
  },
  {
    step: "02",
    icon: Palette,
    title: "Free Design",
    description: "Receive custom design samples at no cost to visualize your branded bottles.",
  },
  {
    step: "03",
    icon: Package,
    title: "Production",
    description: "Once approved, we begin production with premium materials and quality control.",
  },
  {
    step: "04",
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick turnaround and reliable shipping to get your bottles when you need them.",
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<HTMLDivElement[]>([])

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

    stepsRef.current.forEach((step, index) => {
      if (step) {
        setTimeout(() => {
          observer.observe(step)
        }, index * 200)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="process" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="process-flow-line"></div>
        <div className="floating-droplet droplet-1"></div>
        <div className="floating-droplet droplet-2"></div>
        <div className="floating-droplet droplet-3"></div>
        <div className="floating-droplet droplet-4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Our Simple Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to delivery, we make custom water bottle branding easy and hassle-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              ref={(el) => {
                if (el) stepsRef.current[index] = el
              }}
              className="bg-card border-border text-center relative opacity-0 transform translate-y-8 hover:scale-105 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow relative">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                  <step.icon className="w-8 h-8 text-primary-foreground relative z-10" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <span className="text-accent-foreground font-bold text-sm">{step.step}</span>
                </div>
                <CardTitle className="text-xl font-serif text-card-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
