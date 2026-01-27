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
    <section className="min-h-[50vh] pt-20 flex flex-col items-center justify-center relative px-4 overflow-hidden bg-secondary/30">
      {/* Logo watermark background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={tshLogo} 
          alt="" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-auto opacity-[0.08]"
        />
        <img 
          src={tshLogo} 
          alt="" 
          className="absolute -top-10 -left-20 w-64 h-auto opacity-[0.05] rotate-[-15deg]"
        />
        <img 
          src={tshLogo} 
          alt="" 
          className="absolute -bottom-10 -right-16 w-56 h-auto opacity-[0.05] rotate-[20deg]"
        />
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