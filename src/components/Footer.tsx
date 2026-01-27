import { Leaf, Instagram, Linkedin, Facebook } from "lucide-react";
import zomatoLogo from "@/assets/zomato-logo.png";
import swiggyLogo from "@/assets/swiggy-logo.png";

const Footer = () => {
  return <footer className="bg-foreground text-background py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="h-6 w-6" />
          <span className="text-xl font-bold font-serif">The Salad House</span>
        </div>

        {/* Order Online Section */}
        <div className="mb-6">
          <p className="text-background/70 text-sm mb-3">Order Online</p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://www.zomato.com/ncr/the-salad-house-sector-49-gurgaon/order" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-white hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
            >
              <img src={zomatoLogo} alt="Zomato" className="h-6 w-auto" />
            </a>
            <a 
              href="https://www.swiggy.com/menu/1098859?source=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-white hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
            >
              <img src={swiggyLogo} alt="Swiggy" className="h-6 w-auto" />
            </a>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <a href="https://www.instagram.com/thesaladhouse.co" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/company/the-salad-house-co" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/Thesaladhouse.co" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
        
        <p className="text-background/70 text-sm mb-2">
          <a href="tel:+919910074734" className="hover:text-background transition-colors">+91 9910074734</a>
          {" | "}
          <a href="mailto:divya@thesaladhouse.co" className="hover:text-background transition-colors">divya@thesaladhouse.co</a>
        </p>
        
        <p className="text-background/70 text-sm">
          © {new Date().getFullYear()} The Salad House. All rights reserved.
        </p>
      </div>
    </footer>;
};
export default Footer;