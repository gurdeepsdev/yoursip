import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import logo from "@/public/logo.png" 
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg"> 
              <Image src={logo} alt="Logo" width={20} height={20} />
              </span>
            </div>
            <span className="text-2xl font-serif font-bold text-foreground">YourSip</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">
              Process
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+91 8199818957</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>gurisachin09@gmail.com</span>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Free Sample</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
