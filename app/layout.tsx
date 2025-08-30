import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
// import SmoothScroll from "@/components/smooth-scroll"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "YourSip - Custom Branded Water Bottles",
  description:
    "Professional custom water bottle branding for restaurants, cafes, hotels, events, and weddings. Cost-effective solutions with free design samples.",
  generator: "v0.app",
//  icons: {
//     icon: [
//       { url: "/favicon.png", sizes: "32x32", type: "image/png" }, // for tabs
//       { url: "/favicon.png", sizes: "192x192", type: "image/png" }, // Android
//       { url: "/favicon.png", sizes: "512x512", type: "image/png" }, // PWA / high-res
//     ],
//     apple: { url: "/favicon.png", sizes: "180x180", type: "image/png" }, // iPhone
//   },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">
        {/* <SmoothScroll /> */}
        {children}
      </body>
    </html>
  )
}
