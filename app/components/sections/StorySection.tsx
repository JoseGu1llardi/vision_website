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
              Vision Landscape Solutions
            </span>{" "}
            with a dedicated focus on meticulous garden maintenance, nurturing
            and preserving the beauty of outdoor spaces. That commitment to
            quality, care and attention to detail remains at the heart of
            everything we do today.
          </p>

          <p>
            Today, Vision Landscapes has evolved into a full-service landscape
            construction company, delivering ambitious outdoor projects from
            concept through to completion. We combine our deep horticultural
            knowledge with skilled craftsmanship and years of experience in
            landscape construction.
          </p>

          <p>
            From bespoke natural stone and porcelain paving, retaining walls and
            structural landscaping, to outdoor kitchens, entertaining spaces,
            pergolas and architectural water features, every element is
            carefully considered and expertly built.
          </p>

          <p>
            We also undertake complete garden transformations, driveways, mature
            planting, garden lighting and large-scale landscape construction,
            creating outdoor spaces that are designed around the property and
            the way our clients want to live.
          </p>

          <p>
            From a single beautifully crafted feature to a complete landscape
            transformation, we bring the same precision, care and attention to
            detail to every project — building exceptional outdoor spaces that
            are made to last.
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
