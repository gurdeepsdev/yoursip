"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function ContactSection() {

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

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

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (formRef.current) observer.observe(formRef.current)
    if (infoRef.current) {
      setTimeout(() => {
        if (infoRef.current) observer.observe(infoRef.current)
      }, 300)
    }

    return () => observer.disconnect()
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    quantity: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error" | "saving">("idle")

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
 console.log('formData1: ', formData);
 
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("saving")
    try {
      const res = await fetch("http://localhost:3000/api/saveForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      console.log('formData: ', formData);
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setFormData({ name: "", email: "", businessType: "", quantity: "", message: "" })
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="contact-water-bg"></div>
        <div className="floating-bubble bubble-contact-1"></div>
        <div className="floating-bubble bubble-contact-2"></div>
        <div className="floating-bubble bubble-contact-3"></div>
        <div className="ripple-effect ripple-1"></div>
        <div className="ripple-effect ripple-2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Get Your Free Design Sample</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your custom water bottle project? Contact us today for a free consultation and design sample.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card
            ref={formRef}
            className="bg-card border-border opacity-0 transform translate-x-8 hover:shadow-xl transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-card-foreground">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={onSubmit}className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-background border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-background border-border"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Business Type</label>
                    <Input
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      placeholder="Restaurant, Hotel, Event, etc."
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Quantity Needed</label>
                    <Input
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Approximate quantity"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Project Details</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your branding requirements, timeline, and any specific design preferences..."
                    className="bg-background border-border min-h-32"
                    required
                  />
                </div>
           

                {status === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 text-sm">
                      Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800 text-sm">
                      Sorry, there was an error sending your message. Please try again or contact us directly at
                      gurisachin09@gmail.com
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Sending..." : "Request Free Design Sample"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div ref={infoRef} className="space-y-8 opacity-0 transform translate-x-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-card-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 8199818957</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-muted-foreground">gurisachin09@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Address</p>
                    <p className="text-muted-foreground">
                      New Delhi
                      <br />
                      shanti marg 
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Business Hours</p>
                    <p className="text-muted-foreground">
                      Mon-Fri: 8AM-8PM
                      <br />
                      Sat: 8AM-7PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-serif font-bold mb-4">Why Choose YourSip?</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Free design samples with every quote</li>
                  <li>✓ Fast 2-3 day turnaround time</li>
                  <li>✓ Premium quality materials</li>
                  <li>✓ Competitive bulk pricing</li>
                  <li>✓ Dedicated customer support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
