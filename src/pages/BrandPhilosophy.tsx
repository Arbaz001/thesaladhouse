import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Recycle, ShieldCheck, Heart, ChefHat } from "lucide-react";

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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a 100% vegetarian kitchen.
            </p>
          </div>
        </section>

        {/* Quality Practices Section */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Quality Practices</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fresh, Every Day</h3>
                <p className="text-muted-foreground">
                  No reuse or storage of pre-cut vegetables. All ingredients are freshly prepared daily.
                </p>
              </div>
              
              <div className="text-center p-6 bg-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Zero-Waste Commitment</h3>
                <p className="text-muted-foreground">
                  Any surplus food is responsibly donated to Devdoot Food Bank.
                </p>
              </div>
              
              <div className="text-center p-6 bg-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Hygiene, Always</h3>
                <p className="text-muted-foreground">
                  We maintain uncompromising hygiene standards. Feel free to walk in anytime — our kitchen is always open to view.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eco Friendly Section */}
        <section className="px-4 py-16 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Recycle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Eco Friendly</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-background rounded-xl shadow-sm">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground block mb-2">Clean Energy</span>
                  Responsibly contributing our used cooking oil towards the production of clean, renewable biodiesel.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl shadow-sm">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground block mb-2">Eco Packaging</span>
                  All our packaging is eco-friendly and sustainable.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl shadow-sm">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground block mb-2">Waste Segregation</span>
                  Proper garbage segregation of dry and wet waste.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsible Food Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <ChefHat className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Responsible Food</h2>
            </div>
            <p className="text-center text-muted-foreground mb-8">
              We have got nutrition profiling done for all our food to ensure every meal is balanced and healthy.
            </p>
            <div className="bg-secondary/20 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Prepared In-House</h3>
              <p className="text-center text-muted-foreground mb-6">
                From base ingredients to final touches, we make it ourselves.
              </p>
              <p className="text-center text-muted-foreground">
                Hung curd • Pickled veggies & onions • Roasted chickpeas<br />
                Candied spicy nuts • Tomato paste • Ginger–garlic paste
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrandPhilosophy;
