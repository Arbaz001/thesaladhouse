import { Leaf, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "philosophy", label: "Our Food Philosophy" },
    { id: "gallery", label: "Photo Gallery" },
    { id: "corporate", label: "Corporate Orders" },
    { id: "visit", label: "Visit Us" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-white backdrop-blur-md border border-gray-200 rounded-full">
          <Link
            to="/"
            className="flex items-center text-foreground hover:text-primary transition-colors"
            aria-label="Home"
          >
            <Leaf className="h-6 w-6 md:h-7 md:w-7 text-primary" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-semibold text-gray-800 hover:text-primary hover:bg-gray-100 transition-all duration-200 rounded-full"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/919910074374?text=Hi%2C%20I%27d%20like%20to%20order%20avocados"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-200 shadow-sm"
            >
              🥑 Buy Avocado
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-primary transition-colors p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mt-2 bg-white backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden">
          <nav className="flex flex-col p-3 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-primary transition-all duration-200 rounded-lg"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/919910074374?text=Hi%2C%20I%27d%20like%20to%20order%20avocados"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-3 text-sm font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 mt-1"
            >
              🥑 Buy Avocado
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;