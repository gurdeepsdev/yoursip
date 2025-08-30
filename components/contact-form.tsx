"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Props = {
  variant?: "default" | "compact"
  className?: string
}

export function ContactForm({ variant = "default", className }: Props) {
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

  const wrapGap = variant === "compact" ? "space-y-3" : "space-y-4"
  const gridGap =
    variant === "compact" ? "grid grid-cols-1 gap-3 sm:grid-cols-2" : "grid grid-cols-1 gap-4 sm:grid-cols-2"
  const rows = variant === "compact" ? 3 : 4

  return (
    <form onSubmit={onSubmit} className={`${wrapGap} ${className || ""}`} aria-label="Contact form (hero)">
      <div className={gridGap}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Name</label>
          
          <Input name="name" value={formData.name} onChange={onChange}   
           className="!placeholder-white !text-[14px]" placeholder="Your full name" 
          required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Email</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            placeholder="your@email.com"
              className="!placeholder-white !text-[14px]" 
            required
          />
        </div>
      </div>

      <div className={gridGap}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Business Type</label>
          <Input
            name="businessType"
            value={formData.businessType}
            onChange={onChange}
            placeholder="Restaurant, Hotel, Event, etc."
              className="!placeholder-white !text-[14px]" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Quantity Needed</label>
          <Input name="quantity" value={formData.quantity} onChange={onChange} placeholder="Approximate quantity"  className="!placeholder-white !text-[14px]"  />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white" >Project Details</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={onChange}
          placeholder="Tell us about branding, timeline, and design preferences..."
            className="!placeholder-white !text-[14px]" 
          rows={rows}
          required
        />
      </div>

      {status === "success" && (
        <div className="p-3 rounded-md text-sm bg-green-50 border border-green-200 text-green-800">
                      Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
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
   
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Request Free Design Sample"}
      </Button>
    </form>
  )
}
