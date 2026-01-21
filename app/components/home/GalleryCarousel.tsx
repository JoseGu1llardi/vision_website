"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ImageModal } from "../ui/ImageModal";

interface GalleryCarouselProps {
  images: string[];
}

export function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [itemsPerSlide, setItemsPerSlide] = useState(3); // 🔑 SSR-safe default

  // ✅ Detecta mobile SOMENTE no client
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize(); // roda uma vez no mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleGalleryImages = images.slice(
    galleryIndex,
    galleryIndex + itemsPerSlide,
  );

  const nextGallerySlide = () => {
    setGalleryIndex((prev) =>
      prev + itemsPerSlide >= images.length ? 0 : prev + itemsPerSlide,
    );
  };

  const prevGallerySlide = () => {
    setGalleryIndex((prev) =>
      prev - itemsPerSlide < 0
        ? Math.max(0, images.length - itemsPerSlide)
        : prev - itemsPerSlide,
    );
  };

  const totalSlides = Math.ceil(images.length / itemsPerSlide);

  return (
    <>
      <section className="py-16 px-4 bg-foreground/5">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Recent Projects Gallery
          </h3>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visibleGalleryImages.map((image, index) => (
                <GalleryImage
                  key={galleryIndex + index}
                  image={image}
                  index={galleryIndex + index}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>

            <CarouselButton
              direction="prev"
              onClick={prevGallerySlide}
              aria-label="Previous"
            />

            <CarouselButton
              direction="next"
              onClick={nextGallerySlide}
              aria-label="Next"
            />

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setGalleryIndex(index * itemsPerSlide)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    Math.floor(galleryIndex / itemsPerSlide) === index
                      ? "bg-foreground w-8"
                      : "bg-foreground/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
