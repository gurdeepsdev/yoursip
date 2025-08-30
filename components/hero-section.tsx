"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Droplets, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import { ContactForm } from "@/components/contact-form"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center premium-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-white/15 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/25 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-5 h-5 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 scroll-reveal ${isVisible ? "revealed" : ""}`}>
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="w-6 h-6 text-white/80" />
                <span className="text-white/80 font-medium">Premium Water Branding</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
                Custom Branded
                <span className="text-cyan-200 block flex items-center">
                  Water Bottles
                  <Sparkles className="w-8 h-8 ml-3 text-yellow-300 animate-pulse" />
                </span>
                for Your Business
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Transform your brand presence with premium custom water bottles. Perfect for restaurants, hotels,
                events, and special occasions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium">Free design samples & consultation</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium">Lightning-fast turnaround & shipping</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium">Unbeatable bulk pricing & quality</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Your Free Design Sample
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                View Our Gallery
              </Button>
            </div>
          </div>

          <div className={`relative scroll-reveal ${isVisible ? "revealed" : ""}`} style={{ animationDelay: "0.3s" }}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
              <h3 className="text-white text-2xl font-semibold mb-2">Request a Free Design Sample</h3>
              <p className="text-white/80 mb-6 text-sm">Share a few details and we’ll send you a free custom mockup.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
