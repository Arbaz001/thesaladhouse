import { ChevronDown, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-secondary/50 to-background px-4">
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Leaf className="h-10 w-10 text-primary" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
          The Salad House
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Fresh, Healthy & Delicious
        </p>
        
        <p className="text-base text-muted-foreground mb-12 max-w-xl mx-auto">
          Discover our handcrafted bowls, wraps, and refreshing beverages made with the freshest ingredients
        </p>

        <Button
          onClick={scrollToMenu}
          size="lg"
          className="rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          View Menu
        </Button>
      </div>

      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to menu"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
