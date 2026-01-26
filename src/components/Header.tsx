import { Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
const Header = () => {
  const location = useLocation();
  const navLinks = [{
    to: "/",
    label: "Home"
  }, {
    to: "/brand-philosophy",
    label: "Brand Philosophy"
  }, {
    to: "/find-us",
    label: "Find Us"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-primary">The Salad House</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          {navLinks.map(link => <Link key={link.to} to={link.to} className={cn("text-sm font-medium transition-colors hover:text-primary", location.pathname === link.to ? "text-primary" : "text-muted-foreground")}>
              {link.label}
            </Link>)}
        </nav>
      </div>
    </header>;
};
export default Header;