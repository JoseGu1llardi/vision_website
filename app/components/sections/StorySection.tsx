"use client";

import type { Page } from "../../types";

interface StorySectionProps {
  onNavigate: (page: Page) => void;
}

export function StorySection({ onNavigate }: StorySectionProps) {
  return (
    <section className="relative bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <h2 className="text-2xl md:text-3xl tracking-[0.3em] text-foreground/80 font-light uppercase">
              Our Story
            </h2>
            <div className="h-px bg-foreground/20 mt-3 w-24 mx-auto" />
          </div>
        </div>

        {/* Content */}
        <div className="text-foreground/80 leading-relaxed space-y-6 text-lg">
          <p>
            We began as{" "}
            <span className="font-semibold text-foreground">
              Vision Landscapes Solutions
            </span>{" "}
            with a dedicated focus on meticulous maintenance, nurturing and
            preserving the beauty of outdoor spaces. That core commitment to
            excellence remains the foundation of everything we do.
          </p>

          <p>
            Today, we have proudly evolved into a full-service partner for your
            most ambitious outdoor projects. We now combine our deep
            horticultural knowledge with expert craftsmanship in high-end
            landscape construction.
          </p>

          <p>
            From custom stonework and elegant outdoor living areas to
            sophisticated water features and complete property transformations,
            we bring the same precision and care to building your dream
            landscape as we always have to maintaining it.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={() => onNavigate("portfolio")}
            className="px-8 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-300 font-medium tracking-wide hover:shadow-lg"
          >
            View Our Work
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="px-8 py-3 bg-transparent border-2 border-foreground/20 text-foreground rounded-lg hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300 font-medium tracking-wide"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
