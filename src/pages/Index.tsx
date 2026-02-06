import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import Location from "@/components/Location";
import { Leaf, Heart, ShieldCheck, Hand } from "lucide-react";
import gallery1 from "@/assets/gallery-4.jpeg";
import gallery2 from "@/assets/gallery-5.jpeg";
import gallery3 from "@/assets/gallery-6.jpeg";
import gallery4 from "@/assets/gallery-7.jpeg";
import gallery5 from "@/assets/gallery-9.jpg";
import gallery6 from "@/assets/gallery-10.jpg";
import gallery7 from "@/assets/gallery-jars.jpeg";
import gallery8 from "@/assets/gallery-dine.jpg";

const galleryImages = [
  { src: gallery1, alt: "The Salad House - Night view exterior" },
  { src: gallery2, alt: "The Salad House - Our amazing team" },
  { src: gallery3, alt: "The Salad House - Fresh greenery décor" },
  { src: gallery4, alt: "The Salad House - Fresh dips and sauces" },
  { src: gallery5, alt: "The Salad House - Cozy window seating" },
  { src: gallery6, alt: "The Salad House - Restaurant exterior view" },
  { src: gallery7, alt: "The Salad House - Fresh pickled vegetables" },
  { src: gallery8, alt: "The Salad House - Stylish dining area" },
];

const Index = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section id="home">
        <Hero />
      </section>

      <section id="menu">
        <Menu />
      </section>

      {/* Brand Philosophy Section */}
      <section id="philosophy" className="pt-4 md:pt-12 pb-4 md:pb-8">
        {/* Hero Section */}
        <div className="px-4 py-4 md:py-8 bg-gradient-to-b from-secondary/30 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-center">
              Our Food Philosophy
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Leaf className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-xl md:text-3xl font-bold text-primary mb-4 text-center">
              What We Believe In
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a 100% vegetarian kitchen, preparing fresh and nutritious food every day — it's the heart of everything we do.
            </p>
          </div>
        </div>

        {/* Quality Practices Section */}
        <div className="px-4 py-4 md:py-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">How We Do Things</h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              These aren't marketing promises — they're how we actually run our kitchen, every single day.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">We Start Fresh Every Morning</h3>
                <p className="text-foreground">
                  No pre-cut veggies sitting overnight. Our team arrives early each day to prepare everything from scratch.
                </p>
              </div>
              
              <div className="text-center p-6 bg-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">What's Left Gets Donated</h3>
                <p className="text-foreground">
                  If we don't sell it today, we don't serve it the next day. Any leftover food is donated to Devdoot Food Bank, an NGO.
                </p>
              </div>
              
              <div className="text-center p-6 bg-secondary/20 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Our Kitchen? Come See It</h3>
                <p className="text-foreground">
                  Seriously — walk in anytime and take a look. Hygiene isn't a checkbox for us, it's how we work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Human-Made Philosophy Section */}
        <div className="px-4 py-4 md:py-8 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
              <Hand className="h-10 w-10 text-primary" />
              <h2 className="text-5xl md:text-6xl font-bold text-primary text-center">Real Hands, Real Food</h2>
            </div>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Everything here is made by people, not machines — exactly how we want it.
            </p>
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <p className="text-foreground">
                    <span className="font-semibold text-primary block mb-2">Patties Look Different?</span>
                    That's because someone actually shaped them by hand — not a factory press.
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-foreground">
                    <span className="font-semibold text-primary block mb-2">Beetroot Colour Varies?</span>
                    Seasonal produce does that. We don't add anything artificial to "fix" the shade.
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-foreground">
                    <span className="font-semibold text-primary block mb-2">Taste Slightly Different?</span>
                    Real ingredients aren't standardized — but we always aim for that same delicious result.
                  </p>
                </div>
              </div>
              <p className="text-center text-foreground mt-6 font-medium">
                We believe small imperfections are signs of something real — and we're proud of that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="pt-4 md:pt-12 pb-4 md:pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-center">Photo Gallery</h1>
          <p className="text-muted-foreground text-center mb-12">
            A visual journey through our fresh, healthy offerings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <Lightbox
          images={galleryImages}
          currentIndex={currentIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      </section>

      {/* Corporate Orders Section */}
      <section id="corporate" className="pt-4 md:pt-12 pb-4 md:pb-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-center">Corporate Lunch & Dinner Bulk Orders</h1>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            Planning a team lunch, meeting, or corporate dinner?<br />
            The Salad House offers fresh, wholesome meals made daily—perfect for offices, teams, and corporate gatherings.
          </p>

          <div className="bg-background rounded-xl p-8 shadow-sm mb-8">
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✅</span>
                <p className="text-foreground">
                  Freshly prepared food with no pre-cut vegetables sitting overnight; any leftover food is responsibly donated
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✅</span>
                <p className="text-foreground">
                  Direct ordering with no delivery partner in between, allowing us to offer better pricing for corporate and bulk orders
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-foreground mb-8 max-w-2xl mx-auto">
            Place your order directly with us, and we'll take care of everything—from preparation to delivery—while offering better value to your team.
          </p>

          <div className="bg-background rounded-xl p-8 shadow-sm text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">For Orders & Enquiries</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+919910074374" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 Call or WhatsApp: +91 99100 74374
              </a>
              <a 
                href="mailto:divya@thesaladhouse.co" 
                className="inline-flex items-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
              >
                📧 divya@thesaladhouse.co
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section id="visit">
        <main className="pt-4 md:pt-12 pb-4 md:pb-8">
          <Location />
        </main>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
