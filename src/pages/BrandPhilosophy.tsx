import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Recycle, ShieldCheck, Heart, ChefHat, Sparkles, Hand, Clock } from "lucide-react";

const BrandPhilosophy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Leaf className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Brand Philosophy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Rooted in freshness, transparency, and responsibility. We're a 100% vegetarian kitchen that believes in honest food — made fresh, served with care, and prepared with nothing to hide.
            </p>
          </div>
        </section>

        {/* Core Promise */}
        <section className="px-4 py-12 bg-primary/5 border-y border-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl font-medium text-foreground italic">
              "Fresh food, made daily, with nothing to hide — our modern-day thela approach."
            </p>
          </div>
        </section>

        {/* Quality Practices Section */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Quality Practices</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fresh, Every Day</h3>
                <p className="text-muted-foreground">
                  No reuse or storage of pre-cut vegetables. All ingredients are freshly prepared daily, every morning.
                </p>
              </div>
              
              <div className="text-center p-6 bg-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Zero-Waste Commitment</h3>
                <p className="text-muted-foreground">
                  What isn't sold during the day is never carried forward — it is responsibly donated to Devdoot Food Bank.
                </p>
              </div>
              
              <div className="text-center p-6 bg-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Hygiene, Always</h3>
                <p className="text-muted-foreground">
                  We maintain uncompromising hygiene standards. Walk in anytime — our kitchen is always open to view.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Human-Made Philosophy Section */}
        <section className="px-4 py-16 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Hand className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Human-Made, Not Machine-Made</h2>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <p className="text-center text-muted-foreground mb-6 text-lg">
                Our food is handcrafted with intention — and that's exactly how we want it.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground block mb-2">Natural Variation</span>
                    Patties may not look identical every time — because nature doesn't follow factory uniformity.
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground block mb-2">Seasonal Character</span>
                    Beetroot bowls may vary slightly in colour depending on the produce.
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground block mb-2">Real Ingredients</span>
                    Small differences in taste or shape reflect the honesty of real, seasonal ingredients.
                  </p>
                </div>
              </div>
              <p className="text-center text-foreground mt-6 font-medium">
                Our team strives to deliver the same great taste every time while staying true to what's real.
              </p>
            </div>
          </div>
        </section>

        {/* Responsible Food Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Light, Clean & Nourishing</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Nutrition Profiled</h3>
                <p className="text-center text-muted-foreground">
                  Every item on our menu undergoes nutrition profiling to ensure meals are balanced, wholesome, and nourishing.
                </p>
              </div>
              <div className="bg-secondary/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Easy on the Stomach</h3>
                <p className="text-center text-muted-foreground">
                  Our food is designed to be light, clean, and gentle — without causing burning or post-meal uneasiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* In-House Preparation Section */}
        <section className="px-4 py-16 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <ChefHat className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Prepared In-House</h2>
            </div>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              From base ingredients to final touches, we make it ourselves.
            </p>
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Hung Curd",
                  "Pickled Veggies",
                  "Pickled Onions",
                  "Roasted Chickpeas",
                  "Candied Spicy Nuts",
                  "Tomato Paste",
                  "Ginger–Garlic Paste"
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eco Friendly Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Recycle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Eco Friendly</h2>
            </div>
            <p className="text-center text-muted-foreground mb-8">
              Our responsibility extends beyond food.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-secondary/20 rounded-xl">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground block mb-2">Clean Energy</span>
                  Contributing used cooking oil towards the production of clean, renewable biodiesel.
                </p>
              </div>
              <div className="p-6 bg-secondary/20 rounded-xl">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground block mb-2">Eco Packaging</span>
                  All our packaging is eco-friendly and sustainable.
                </p>
              </div>
              <div className="p-6 bg-secondary/20 rounded-xl">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground block mb-2">Waste Segregation</span>
                  Responsible segregation of dry and wet waste at source.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Promise */}
        <section className="px-4 py-16 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Promise
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We prepare food fresh every morning, and what isn't sold during the day is never carried forward — it is donated. This is our commitment to you: honest food, made with care, served fresh.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrandPhilosophy;
