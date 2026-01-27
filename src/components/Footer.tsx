import { Leaf, Instagram, Linkedin, Facebook } from "lucide-react";

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
              className="flex items-center gap-2 bg-[#E23744] hover:bg-[#c72f3d] text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 4.5h1v3h-1v-3zm-4.9 2.1l.7-.7 2.1 2.1-.7.7-2.1-2.1zm10.8 0l-2.1 2.1-.7-.7 2.1-2.1.7.7zM12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm-7.5 3.5v1h3v-1h-3zm13 0v1h3v-1h-3zm-8.4 5.4l-.7-.7 2.1-2.1.7.7-2.1 2.1zm5.8 0l-2.1-2.1.7-.7 2.1 2.1-.7.7zm-2.4 2.6h-1v-3h1v3z"/>
              </svg>
              Zomato
            </a>
            <a 
              href="https://www.swiggy.com/menu/1098859?source=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-[#FC8019] hover:bg-[#e5730f] text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12.034 23.998c-4.623 0-8.395-1.096-10.282-2.988-.18-.18-.296-.43-.296-.693V3.682c0-.265.117-.515.296-.693C3.639 1.096 7.41 0 12.034 0c4.623 0 8.395 1.096 10.282 2.989.18.18.296.428.296.693v16.635c0 .265-.117.515-.296.693-1.887 1.892-5.659 2.988-10.282 2.988zm0-22.01c-4.14 0-7.463.952-9.003 2.489v16.046c1.54 1.537 4.863 2.489 9.003 2.489 4.14 0 7.463-.952 9.003-2.489V4.477c-1.54-1.537-4.863-2.489-9.003-2.489z"/>
                <path d="M12.034 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/>
              </svg>
              Swiggy
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