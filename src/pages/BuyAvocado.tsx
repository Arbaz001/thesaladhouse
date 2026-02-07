import { ArrowLeft, Leaf, ShieldCheck, Truck, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import avocadoProduct from "@/assets/avocado-product.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BuyAvocado = () => {
  const whatsappLink = "https://wa.me/919910074374?text=Hi%2C%20I%27d%20like%20to%20order%20avocados";

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
            {/* Product Image */}
            <div className="rounded-2xl overflow-hidden bg-secondary/20 border border-border">
              <img src={avocadoProduct} alt="Fresh Hass Avocado" className="w-full h-full object-cover aspect-square" />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Fresh Produce</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Fresh, Ripe Avocados</h1>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Premium, hand-picked Hass avocados — creamy, rich, and perfectly ripe. Sourced directly and delivered
                fresh to your doorstep. Ideal for guacamole, salads, toast, smoothies, and more.
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-bold text-foreground">₹1000</span>
                <span className="text-muted-foreground text-sm">per kg (approx. 3–4 avocados)</span>
              </div>

              {/* CTA */}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full md:w-auto text-base px-10 py-6 rounded-full font-bold gap-3">
                  <MessageCircle className="h-5 w-5" />
                  Order on WhatsApp
                </Button>
              </a>

              <p className="text-xs text-muted-foreground mt-3">
                We'll confirm your order and arrange delivery via WhatsApp.
              </p>
            </div>
          </div>

          {/* Features Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="flex items-start gap-4 p-5 bg-secondary/20 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">100% Fresh</h3>
                <p className="text-sm text-muted-foreground">
                  Hand-selected for quality. No cold-storage or frozen stock.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-secondary/20 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Delivered to You</h3>
                <p className="text-sm text-muted-foreground">We deliver across Delhi NCR. Bulk orders welcome.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-secondary/20 rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Trusted Source</h3>
                <p className="text-sm text-muted-foreground">
                  From The Salad House — the same avocados we use in our kitchen.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-secondary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">Why Our Avocados?</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              We source the same premium avocados that go into our famous guacamole and salad bowls — now available for
              you to enjoy at home.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <p className="text-foreground">
                  <span className="font-semibold text-primary block mb-2">Perfectly Ripe</span>
                  Each avocado is checked for ripeness so it's ready to eat when it reaches you.
                </p>
              </div>
              <div className="p-4">
                <p className="text-foreground">
                  <span className="font-semibold text-primary block mb-2">Bulk Friendly</span>
                  Ordering for a party or café? Get in touch for special bulk pricing.
                </p>
              </div>
              <div className="p-4">
                <p className="text-foreground">
                  <span className="font-semibold text-primary block mb-2">Quick Support</span>
                  Have questions? Chat with us directly on WhatsApp — we respond fast.
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

export default BuyAvocado;
