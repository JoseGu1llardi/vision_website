"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroImage {
  url: string;
  alt: string;
}

interface HeroSliderProps {
  images: HeroImage[];
  scrolled: boolean;
}

export function HeroSlider({ images, scrolled }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      className={`relative h-screen transition-all duration-300 ${
        scrolled ? "mt-20 md:mt-24" : "mt-20 md:mt-52"
      }`}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.url || "/placeholder.svg"}
            alt={image.alt}
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-background w-8" : "bg-background/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
