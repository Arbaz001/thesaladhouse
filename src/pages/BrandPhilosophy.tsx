import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Heart, Sparkles, Users } from "lucide-react";

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
              At The Salad House, we believe that healthy food should never compromise on taste. 
              Every bowl we create is a celebration of fresh ingredients and bold flavors.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every dish is prepared with care and attention, ensuring you receive not just food, but an experience.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fresh Daily</h3>
                <p className="text-muted-foreground">
                  We source the freshest ingredients and prepare everything in-house, every single day.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  We're more than a restaurant — we're a community of health-conscious food lovers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-4 py-16 bg-secondary/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              The Salad House was born from a simple idea: that eating healthy shouldn't mean sacrificing flavor or convenience. 
              We set out to create a menu that proves salads and bowls can be exciting, satisfying, and absolutely delicious.
            </p>
            <p className="text-muted-foreground mb-4">
              Our commitment to zero added sugar in our beverages, fresh-made dips, and handcrafted bowls 
              reflects our dedication to your health without compromising on taste.
            </p>
            <p className="text-muted-foreground">
              Every item on our menu is thoughtfully designed to nourish your body and delight your taste buds.
            </p>
          </div>
        </section>

        {/* Promise Section */}
        <section className="px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Promise</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>✓ Fresh ingredients, sourced responsibly</p>
              <p>✓ No artificial preservatives or additives</p>
              <p>✓ Zero added sugar in our juices and milkshakes</p>
              <p>✓ Made fresh to order, every single time</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrandPhilosophy;
