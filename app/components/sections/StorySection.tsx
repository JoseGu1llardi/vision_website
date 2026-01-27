"use client";

interface StorySectionProps {
  onNavigate: (page: "home" | "portfolio" | "contact") => void;
}

export function StorySection({ onNavigate }: StorySectionProps) {
  return (
    <section className="relative bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.3em] text-foreground/60 font-medium uppercase">
              Our Story
            </span>
            <div className="h-px bg-foreground/20 mt-2 w-16 mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Welcome to Vision Landscapes
          </h2>
        </div>

        {/* Content */}
        <div className="text-foreground/80 leading-relaxed space-y-6 text-lg">
          <p>
            We began as{" "}
            <span className="font-semibold text-foreground">
              Vision Landscape Solutions
            </span>{" "}
            with a dedicated focus on meticulous maintenance, nurturing and
            preserving the beauty of outdoor spaces. That core commitment to
            excellence remains the foundation of everything we do.
          </p>

          <p>
            Today, as{" "}
            <span className="font-semibold text-foreground">
              Vision Landscapes
            </span>
            , we have proudly evolved into a full-service partner for your most
            ambitious outdoor projects. We now combine our deep horticultural
            knowledge with expert craftsmanship in high-end landscape
            construction.
          </p>

          <p>
            From custom stonework and elegant outdoor living areas to
            sophisticated water features and complete property transformations,
            we bring the same precision and care to building your dream
            landscape as we always have to maintaining it.
          </p>

          <p className="text-xl font-medium text-foreground pt-4 border-t border-foreground/10">
            We are your single source to imagine, create, and sustain an
            extraordinary outdoor environment.
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

        {/* Social Media Links */}
        <div className="mt-16 pt-8 border-t border-foreground/10">
          <p className="text-center text-sm tracking-[0.2em] text-foreground/60 uppercase mb-6">
            Follow Our Journey
          </p>
          <div className="flex justify-center items-center gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/visionlandscapes.ltd?igsh=eHNhYjN6azB1cWQ2"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-foreground/5 hover:bg-foreground/10 rounded-lg transition-all duration-300 hover:shadow-md"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-purple-600 via-pink-600 to-orange-500 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors">
                  Instagram
                </p>
                <p className="text-xs text-foreground/50">
                  @visionlandscapes.ltd
                </p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/visionlandscapes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-foreground/5 hover:bg-foreground/10 rounded-lg transition-all duration-300 hover:shadow-md"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors">
                  Facebook
                </p>
                <p className="text-xs text-foreground/50">Vision Landscapes</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
