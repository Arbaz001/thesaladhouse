import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import tshLogo from "@/assets/tsh-logo.png";
const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="min-h-[50vh] pt-20 flex flex-col items-center justify-center relative px-4 overflow-hidden">
      
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl mb-4 tracking-tight text-primary font-serif font-extrabold">
          The Salad House
        </h1>
        
        <p className="text-base text-foreground mb-12 max-w-xl mx-auto font-semibold">
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
    </section>;
};
export default Hero;