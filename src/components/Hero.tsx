import { ChevronDown, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  return (
    <section className="min-h-[50vh] pt-20 flex flex-col items-center justify-center relative px-4 bg-background overflow-hidden">
      {/* Subtle dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Leaf className="h-10 w-10 text-primary" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-primary">
          The Salad House
        </h1>
        
        
        <p className="text-base text-foreground mb-12 max-w-xl mx-auto">
          Serving salads, meal bowls, wraps, yogurt bowls & juices— made fresh, every day.
        </p>

        <Button onClick={scrollToMenu} size="lg" className="rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
          View Menu
        </Button>
        
        <button onClick={scrollToMenu} className="mt-12 text-muted-foreground hover:text-primary transition-colors animate-bounce" aria-label="Scroll to menu">
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;