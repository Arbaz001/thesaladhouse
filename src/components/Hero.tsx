import { ChevronDown, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/the-salad-house-front-edited.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>
      
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Leaf className="h-10 w-10 text-primary" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-primary">
          The Salad House
        </h1>
        
        
        <p className="text-base text-foreground mb-12 max-w-xl mx-auto">
          Fresh Preparation
        </p>

        <Button onClick={scrollToMenu} size="lg" className="rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
          View Menu
        </Button>
      </div>

      <button onClick={scrollToMenu} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce z-10" aria-label="Scroll to menu">
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;