import { Leaf, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="h-6 w-6" />
          <span className="text-xl font-bold">The Salad House</span>
        </div>
        
        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <a 
            href="https://www.instagram.com/thesaladhouse.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-background/70 hover:text-background transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://www.linkedin.com/company/the-salad-house-co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-background/70 hover:text-background transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="https://www.facebook.com/Thesaladhouse.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-background/70 hover:text-background transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
        
        <p className="text-background/70 text-sm">
          © {new Date().getFullYear()} The Salad House. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
