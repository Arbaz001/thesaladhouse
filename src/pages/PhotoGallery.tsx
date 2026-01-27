import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import gallery1 from "@/assets/gallery-4.jpeg";
import gallery2 from "@/assets/gallery-5.jpeg";
import gallery3 from "@/assets/gallery-6.jpeg";
import gallery4 from "@/assets/gallery-7.jpeg";
import gallery5 from "@/assets/gallery-8.jpeg";
import gallery6 from "@/assets/gallery-9.jpg";
import gallery7 from "@/assets/gallery-10.jpg";
import gallery8 from "@/assets/gallery-11.jpg";

const galleryImages = [
  { src: gallery1, alt: "The Salad House - Fresh ingredients" },
  { src: gallery2, alt: "The Salad House - Healthy bowls" },
  { src: gallery3, alt: "The Salad House - Restaurant ambiance" },
  { src: gallery4, alt: "The Salad House - Night view exterior" },
  { src: gallery5, alt: "The Salad House - Our amazing team" },
  { src: gallery6, alt: "The Salad House - Fresh greenery décor" },
  { src: gallery7, alt: "The Salad House - Fresh dips and sauces" },
  { src: gallery8, alt: "The Salad House - Our wonderful team" },
];

const PhotoGallery = () => {
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
      </main>
      <Footer />

      <Lightbox
        images={galleryImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </div>
  );
};

export default PhotoGallery;
