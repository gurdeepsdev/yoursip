import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, businessType, quantity, message } = body

    const emailData = {
      service_id: "service_yoursip",
      template_id: "template_yoursip",
      user_id: "6VBjgPqHU3LOVsrG7",
      template_params: {
        from_name: name,
        from_email: email,
        to_email: "gurisachin09@gmail.com",
        subject: `New YourSip Inquiry from ${name}`,
        business_type: businessType,
        quantity: quantity,
        message: message,
      },
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      const errorText = await response.text()
      console.error("EmailJS error:", errorText)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
