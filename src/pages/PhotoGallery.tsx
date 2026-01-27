import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PhotoGallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Photo Gallery</h1>
          <p className="text-muted-foreground text-center mb-12">
            Coming soon! A visual journey through our fresh, healthy offerings.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PhotoGallery;
