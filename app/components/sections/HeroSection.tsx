"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSectionProps {
  onNavigate: (page: "home" | "portfolio" | "contact") => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1074&auto=format&fit=crop",
      alt: "Modern garden design",
    },
    {
      url: "https://images.unsplash.com/photo-1681900525806-a7d3f266128c?q=80&w=1171&auto=format&fit=crop",
      alt: "Contemporary landscape",
    },
    {
      url: "https://images.unsplash.com/photo-1763479142885-47f05d01cad1?q=80&w=1170&auto=format&fit=crop",
      alt: "Luxury outdoor space",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative pt-20 md:pt-24">
      {/* Hero Slider */}
      <section className="relative h-screen -mt-20 md:-mt-24">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              fill
              priority={index === 0}
            />
          </div>
        ))}

        {/* Slide Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-foreground/20 via-transparent to-foreground/40 pointer-events-none" />

      {/* Central Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-30 md:pt-38">
        <div className="text-center px-4 space-y-10 animate-in fade-in duration-1000">
          {/* Main Heading */}
          <div className="space-y-3 animate-in slide-in-from-bottom-4 duration-700 delay-300">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] text-white drop-shadow-lg"
              style={{
                textShadow:
                  "0 0 20px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              VISION LANDSCAPE
            </h1>
            <div className="h-px w-32 bg-white/60 mx-auto" />
          </div>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-500 drop-shadow-md"
            style={{
              textShadow:
                "0 0 15px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.7)",
            }}
          >
            Creating Extraordinary Outdoor Spaces
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 pointer-events-auto animate-in slide-in-from-bottom-4 duration-700 delay-700">
            <button
              onClick={() => onNavigate("portfolio")}
              className="group px-8 py-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-lg hover:bg-white hover:text-foreground transition-all duration-300 font-medium tracking-wide"
            >
              <span className="flex items-center gap-2">
                View Portfolio
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-3 bg-white text-foreground rounded-lg hover:bg-white/90 transition-all duration-300 font-medium tracking-wide hover:shadow-2xl"
            >
              Get in Touch
            </button>
          </div>

          {/* Subtitle */}
          <p
            className="text-sm md:text-base text-white tracking-widest uppercase animate-in fade-in duration-700 delay-900 drop-shadow-lg mt-20"
            style={{
              textShadow:
                "0 0 20px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.9), -1px -1px 2px rgba(0,0,0,0.7)",
            }}
          >
            Dublin's Premier Landscape Design Studio
          </p>
        </div>
      </div>

      {/* Brand Badge - Bottom Right */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 pointer-events-none animate-in fade-in duration-1000 delay-1500 z-10">
        <div className="text-right">
          <p
            className="text-white/80 text-xs tracking-wider drop-shadow"
            style={{
              textShadow:
                "0 0 10px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.7)",
            }}
          >
            Since
          </p>
          <p
            className="text-white text-2xl font-bold drop-shadow-lg"
            style={{
              textShadow:
                "0 0 15px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.8)",
            }}
          >
            2011
          </p>
        </div>
        <div className="w-px h-12 bg-white/30" />
        <div className="text-left">
          <p
            className="text-white/80 text-xs tracking-wider drop-shadow"
            style={{
              textShadow:
                "0 0 10px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.7)",
            }}
          >
            Projects
          </p>
          <p
            className="text-white text-2xl font-bold drop-shadow-lg"
            style={{
              textShadow:
                "0 0 15px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.8)",
            }}
          >
            100+
          </p>
        </div>
      </div>
    </div>
  );
}
