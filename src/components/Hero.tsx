import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import tshLogo from "@/assets/tsh-logo.png";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="min-h-[50vh] pt-20 flex flex-col items-center justify-center relative px-4 overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
      {/* Decorative background elements inspired by logo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft circular gradients mimicking the logo's organic feel */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/3 rounded-full blur-2xl" />
        
        {/* Subtle leaf-like decorative shapes */}
        <svg className="absolute top-16 right-10 w-24 h-24 text-primary/10 rotate-12" viewBox="0 0 100 100" fill="currentColor">
          <ellipse cx="50" cy="50" rx="45" ry="25" />
        </svg>
        <svg className="absolute bottom-20 left-8 w-20 h-20 text-accent/10 -rotate-45" viewBox="0 0 100 100" fill="currentColor">
          <ellipse cx="50" cy="50" rx="45" ry="25" />
        </svg>
        <svg className="absolute top-32 left-1/3 w-16 h-16 text-primary/5 rotate-45" viewBox="0 0 100 100" fill="currentColor">
          <ellipse cx="50" cy="50" rx="45" ry="25" />
        </svg>
      </div>
      
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img 
            src={tshLogo} 
            alt="The Salad House Logo" 
            className="h-28 w-auto drop-shadow-md"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-4 tracking-tight text-primary font-serif font-extrabold">
          The Salad House
        </h1>
        
        <p className="text-base text-foreground mb-12 max-w-xl mx-auto font-bold">
          Serving salads, meal bowls, wraps, yogurt bowls & juices— made fresh, every day.
        </p>

        <div className="flex justify-center">
          <Button onClick={scrollToMenu} size="lg" className="rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            View Menu
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <button onClick={scrollToMenu} className="text-muted-foreground hover:text-primary transition-colors animate-bounce" aria-label="Scroll to menu">
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};
export default Hero;