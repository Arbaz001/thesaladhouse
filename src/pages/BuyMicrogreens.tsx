import { ArrowLeft, Leaf, Truck, MessageCircle, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import microgreensStacked from "@/assets/microgreens-product-new.png";

const BuyMicrogreens = () => {
  const whatsappLink = "https://wa.me/919910074374?text=Hi%2C%20I%27d%20like%20to%20order%20microgreens";

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-28 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Product Section */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
            {/* Single Stacked Product Image with Labels */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-border max-h-[500px]">
              <img
                src={microgreensStacked}
                alt="Fresh Microgreens Pack of 5"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Fresh Produce</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Fresh Microgreens – Pack of 5
              </h1>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nutrient-dense, farm-fresh microgreens — packed with vitamins and bursting with flavour. Harvested to
                order and delivered live, so you get the freshest greens possible. Perfect for salads, sandwiches,
                smoothies, and garnishes.
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-bold text-foreground">₹999</span>
                <span className="text-muted-foreground text-sm">50–60 gms per tray</span>
              </div>

              {/* CTA */}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full md:w-auto text-base px-10 py-6 rounded-full font-bold gap-3">
                  <MessageCircle className="h-5 w-5" />
                  Order on WhatsApp
                </Button>
              </a>

              <p className="text-xs text-muted-foreground mt-3">Shipping as per actual.</p>
            </div>
          </div>

          {/* Features Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="flex items-start gap-4 p-5 bg-secondary/20 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Sprout className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Trusted Source</h3>
                <p className="text-sm text-muted-foreground">
                  From The Salad House — the same microgreens we use in our kitchen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-secondary/20 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Non-GMO & Clean-Grown</h3>
                <p className="text-sm text-muted-foreground">
                  Grown in a controlled, chemical-free environment for purity and flavor.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-secondary/20 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Delhi NCR Delivery</h3>
                <p className="text-sm text-muted-foreground">Same-day delivery available. Bulk orders welcome.</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-secondary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">Why Microgreens?</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Microgreens contain up to 40x more nutrients than their mature counterparts. A tiny superfood with a
              mighty punch.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <p className="text-foreground">
                  <span className="font-semibold text-primary block mb-2">Supercharged Nutrition</span>
                  Rich in vitamins C, E, K, and beta-carotene — all in a tiny, flavourful package.
                </p>
              </div>
              <div className="p-4">
                <p className="text-foreground">
                  <span className="font-semibold text-primary block mb-2">Variety Packs</span>A selection of sunflower,
                  radish, broccoli, pea shoots, and seasonal microgreens, based on availability.
                </p>
              </div>
              <div className="p-4">
                <p className="text-foreground">
                  <span className="font-semibold text-primary block mb-2">Chef's Favourite</span>
                  Used in our own kitchen — the same microgreens that top your salad bowls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BuyMicrogreens;
