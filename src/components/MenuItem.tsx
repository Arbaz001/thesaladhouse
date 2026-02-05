import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface MenuItemProps {
  name: string;
  description?: string;
  price: number;
  image?: string | string[];
}

const MenuItem = ({ name, description, price, image}: MenuItemProps) => {
  const isMobile = useIsMobile();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Array.isArray(image) ? image : (image ? [image] : []);

  // Auto swipe functionality
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds per image

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const cardContent = (
    <Card className="group hover:shadow-md transition-shadow duration-300 border-border/50 overflow-hidden cursor-pointer">
      <CardContent className="p-3 flex items-center gap-4">
        {images.length > 0 && (
          <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden relative">
            <img
              src={images[0]}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {images.length > 1 && (
              <div className="absolute bottom-1 right-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
                +{images.length - 1}
              </div>
            )}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {name}
            </h4>
            <span className="font-semibold text-primary whitespace-nowrap">
              ₹{price}
            </span>
          </div>
          {description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const popupContent = (
    <>
      {/* Image Carousel */}
      {images.length > 0 && (
        <div className="w-full h-48 overflow-hidden relative">
          <img
            src={images[currentImageIndex]}
            alt={`${name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          
          {/* Navigation buttons for multiple images */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goToNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Image dots indicator */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white w-4"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
              
              {/* Image counter */}
              <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                {currentImageIndex + 1}/{images.length}
              </div>
            </>
          )}
        </div>
      )}

      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h4 className="font-semibold text-foreground text-lg">{name}</h4>
          <span className="font-bold text-primary text-lg whitespace-nowrap">
            ₹{price}
          </span>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </>
  );

  // If there's a description or images, show popup with full details
  if (description || images.length > 0) {
    if (isMobile) {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <div>{cardContent}</div>
          </DialogTrigger>
          <DialogContent className="p-0 overflow-hidden max-w-sm">
            {popupContent}
          </DialogContent>
        </Dialog>
      );
    }

    return (
      <HoverCard openDelay={200} closeDelay={100}>
        <HoverCardTrigger asChild>
          <div>{cardContent}</div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 p-0 overflow-hidden" side="top" align="center">
          {popupContent}
        </HoverCardContent>
      </HoverCard>
    );
  }

  return cardContent;
};

export default MenuItem;