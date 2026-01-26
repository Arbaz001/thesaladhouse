import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Recycle, ShieldCheck, Heart, ChefHat } from "lucide-react";

const BrandPhilosophy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 py-10 md:py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
              Our Brand Philosophy
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              100% Vegetarian Kitchen
            </p>
          </div>
        </section>

        {/* Quality Practices - Compact Grid */}
        <section className="px-4 py-8 md:py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-6 text-center">Quality Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Fresh, Every Day</h3>
                  <p className="text-sm text-muted-foreground">No pre-cut vegetables. Everything prepared fresh daily.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Zero-Waste</h3>
                  <p className="text-sm text-muted-foreground">Surplus food donated to Devdoot Food Bank.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Open Kitchen</h3>
                  <p className="text-sm text-muted-foreground">Walk in anytime — our kitchen is always open to view.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eco Friendly - Compact */}
        <section className="px-4 py-8 md:py-16 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Recycle className="h-6 w-6 text-primary" />
              <h2 className="text-xl md:text-3xl font-bold text-foreground">Eco Friendly</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              <div className="px-4 py-3 bg-background rounded-lg shadow-sm">
                <span className="text-sm font-medium text-foreground">🌿 Biodiesel from cooking oil</span>
              </div>
              <div className="px-4 py-3 bg-background rounded-lg shadow-sm">
                <span className="text-sm font-medium text-foreground">📦 Eco-friendly packaging</span>
              </div>
              <div className="px-4 py-3 bg-background rounded-lg shadow-sm">
                <span className="text-sm font-medium text-foreground">♻️ Proper waste segregation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Responsible Food - Compact */}
        <section className="px-4 py-8 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ChefHat className="h-6 w-6 text-primary" />
              <h2 className="text-xl md:text-3xl font-bold text-foreground">Made In-House</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Nutrition-profiled meals with fresh, house-made ingredients:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Hung curd", "Pickled veggies", "Roasted chickpeas", "Candied spicy nuts", "Fresh pastes"].map((item) => (
                <span key={item} className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrandPhilosophy;