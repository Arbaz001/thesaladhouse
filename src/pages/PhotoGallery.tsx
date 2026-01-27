import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.avif";
import gallery2 from "@/assets/gallery-2.avif";
import gallery3 from "@/assets/gallery-3.avif";

const galleryImages = [
  { src: gallery1, alt: "The Salad House - Fresh ingredients" },
  { src: gallery2, alt: "The Salad House - Healthy bowls" },
  { src: gallery3, alt: "The Salad House - Restaurant ambiance" },
];

const PhotoGallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-center">Photo Gallery</h1>
          <p className="text-muted-foreground text-center mb-12">
            A visual journey through our fresh, healthy offerings.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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
      </main>
      <Footer />
    </div>
  );
};

export default PhotoGallery;
