"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative max-w-md mx-auto md:mx-0">
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1287&auto=format&fit=crop"
                alt="Professional landscaping work"
                className="w-full h-full object-cover"
                fill
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-foreground/5 rounded-lg -z-10 hidden md:block" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-foreground/10 rounded-lg -z-10 hidden md:block" />

            {/* Stats Watermark - Hidden on mobile */}
            <div className="hidden md:block absolute bottom-5 left-5 bg-white/40 backdrop-blur-md rounded-md shadow-lg p-3 border-2 border-white/60">
              <div className="flex items-baseline gap-1 mb-0.5">
                <div className="text-2xl font-bold text-black/80">14</div>
                <div className="text-sm font-semibold text-black/60">+</div>
              </div>
              <div className="text-[9px] uppercase tracking-[0.12em] text-black/70 font-medium leading-tight">
                Years of
                <br />
                Excellence
              </div>
              <div className="text-[8px] text-black/50 mt-1">Since 2011</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            {/* Section Label */}
            <div className="inline-block">
              <span className="text-sm tracking-[0.3em] text-foreground/60 font-medium uppercase">
                About Us
              </span>
              <div className="h-px bg-foreground/20 mt-2 w-16" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Quality Dublin Landscape Design & Construction
            </h2>

            {/* Main Text */}
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                Established in 2011 by James Brennan, Vision Landscape Solutions
                is a professional Dublin landscaping service offering expert
                garden design, construction, and maintenance services to both
                residential and commercial clients.
              </p>

              <p>
                As a qualified horticulturist and BA science graduate, James
                Brennan has worked in the landscaping industry across Europe,
                Australia, and America, bringing this international expertise to
                every project undertaken by Vision Landscape Solutions.
              </p>

              <p>
                From golf courses and estate lands to intimate residential
                gardens, we put quality, professionalism, standards, and
                sustainability at the heart of everything we do to create
                incredible outdoor spaces that are as beautiful as they are
                functional.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-foreground/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">
                  Certified Professionals
                </h3>
                <p className="text-sm text-foreground/60">
                  Qualified horticulturists with international experience
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-foreground/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">
                  Sustainable Practices
                </h3>
                <p className="text-sm text-foreground/60">
                  Eco-friendly solutions for lasting beauty
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-lg hover:bg-foreground/90 transition-colors font-medium"
              >
                Get in Touch
                <svg
                  className="w-4 h-4"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
