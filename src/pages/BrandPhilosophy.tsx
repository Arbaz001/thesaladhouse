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
              What We Believe In
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a 100% vegetarian kitchen that prepares fresh food daily. That's at the heart of everything we do.
            </p>
          </div>
        </section>

        {/* Core Promise */}
        <section className="px-4 py-12 bg-primary/5 border-y border-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl font-medium text-foreground italic">
              "Fresh food, made daily, with nothing to hide — think of us as your modern-day thela, just with better seating."
            </p>
          </div>
        </section>

        {/* Quality Practices Section */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">How We Do Things</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              These aren't marketing promises — they're how we actually run our kitchen, every single day.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">We Start Fresh Every Morning</h3>
                <p className="text-muted-foreground">
                  No pre-cut veggies sitting overnight. No shortcuts. Our team arrives early each day to prepare everything from scratch — because that's how good food should begin.
                </p>
              </div>
              
              <div className="text-center p-6 bg-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">What's Left Gets Donated</h3>
                <p className="text-muted-foreground">
                  If we don't sell it today, we don't serve it tomorrow. Instead, any leftover food goes to Devdoot Food Bank. It's a small way we try to do some good while staying true to our freshness promise.
                </p>
              </div>
              
              <div className="text-center p-6 bg-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Kitchen? Come See It</h3>
                <p className="text-muted-foreground">
                  Seriously — walk in anytime and take a look. We keep our kitchen open because we have nothing to hide. Hygiene isn't a checkbox for us, it's how we work.
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
              <h2 className="text-3xl font-bold text-foreground">Real Hands, Real Food</h2>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <p className="text-center text-muted-foreground mb-6 text-lg">
                Everything here is made by people, not machines. And honestly? That's exactly how we want it.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground block mb-2">Patties Look Different?</span>
                    That's because someone actually shaped them by hand — not a factory press.
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground block mb-2">Beetroot Colour Varies?</span>
                    Seasonal produce does that. We don't add anything artificial to "fix" the shade.
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground block mb-2">Taste Slightly Different?</span>
                    Real ingredients aren't standardized — but we always aim for that same delicious result.
                  </p>
                </div>
              </div>
              <p className="text-center text-foreground mt-6 font-medium">
                We believe small imperfections are signs of something real — and we're proud of that.
              </p>
            </div>
          </div>
        </section>

        {/* Responsible Food Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Food That Feels Good</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">We Actually Think About Nutrition</h3>
                <p className="text-center text-muted-foreground">
                  Every item on our menu has been nutrition profiled. We're not just throwing ingredients together — we want your meal to genuinely nourish you.
                </p>
              </div>
              <div className="bg-secondary/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">No Heavy, Greasy Aftermath</h3>
                <p className="text-center text-muted-foreground">
                  You know that sluggish feeling after some meals? We design our food to be light and clean — so you feel energized, not weighed down.
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
              <h2 className="text-3xl font-bold text-foreground">We Make It Ourselves</h2>
            </div>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Why buy pre-made when we can make it better? From base ingredients to final touches — here's what we prepare in-house:
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
              <h2 className="text-3xl font-bold text-foreground">Being Responsible Beyond Food</h2>
            </div>
            <p className="text-center text-muted-foreground mb-8">
              We're trying to run a kitchen that's kinder to the planet too. It's not perfect, but here's what we're doing:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-secondary/20 rounded-xl">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground block mb-2">Our Used Oil → Biodiesel</span>
                  We send our used cooking oil for biodiesel production instead of just discarding it.
                </p>
              </div>
              <div className="p-6 bg-secondary/20 rounded-xl">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground block mb-2">Eco-Friendly Packaging</span>
                  All our packaging is sustainable — because your meal shouldn't cost the earth (literally).
                </p>
              </div>
              <div className="p-6 bg-secondary/20 rounded-xl">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground block mb-2">Proper Waste Segregation</span>
                  Dry waste, wet waste — we sort it all at source. Small habit, meaningful impact.
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
              Our Promise to You
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every morning, we start fresh. Every evening, what's left gets donated. There's no secret formula here — just honest food, made with care, by real people who genuinely love what they do. That's our promise. Simple as that.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrandPhilosophy;
