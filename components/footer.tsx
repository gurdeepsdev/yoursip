import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold">Y</span>
              </div>
              <span className="text-xl font-serif font-bold text-card-foreground">YourSip</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional custom water bottle branding solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-card-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Restaurant Branding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Hotel Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Event Bottles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Wedding Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Corporate Orders
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-card-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Quality Promise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-card-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 YourSip. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
