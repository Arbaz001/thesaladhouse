import { useEffect, useCallback, useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ images, currentIndex, isOpen, onClose, onPrev, onNext }: LightboxProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance threshold (in px)
  const minSwipeDistance = 50;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "ArrowRight") onNext();
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in touch-pan-y"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10 p-2"
        aria-label="Close lightbox"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white/80 hover:text-white transition-colors z-10 p-2 hover:bg-white/10 rounded-full hidden md:block"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>

      {/* Image */}
      <div 
        className="max-w-[90vw] max-h-[90vh] flex items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white/80 hover:text-white transition-colors z-10 p-2 hover:bg-white/10 rounded-full hidden md:block"
        aria-label="Next image"
      >
        <ChevronRight className="h-10 w-10" />
      </button>

      {/* Image counter and swipe hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm text-center">
        <div>{currentIndex + 1} / {images.length}</div>
        <div className="text-xs text-white/50 mt-1 md:hidden">Swipe to navigate</div>
      </div>
    </div>
  );
};

export default Lightbox;
