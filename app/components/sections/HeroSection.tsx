import Image from "next/image";
import { heroImage } from "../../data/heroImages";

export function HeroSection() {
  return (
    <div className="min-h-svh relative pt-20 md:pt-24">
      {/* Hero Background — svh avoids the jump when the mobile browser bar hides */}
      <section className="relative h-svh -mt-20 md:-mt-24">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          className="w-full h-full object-cover"
          fill
          priority
        />
      </section>

      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-foreground/20 via-transparent to-foreground/40 pointer-events-none" />

      {/* Central Content: equal top/bottom rows keep the heading at the exact
          vertical center; the tagline is centered between the heading and the bottom */}
      <div className="absolute inset-0 grid grid-rows-[1fr_auto_1fr] text-center px-4 pointer-events-none animate-in fade-in duration-1000">
        {/* Main Heading */}
        <div className="row-start-2 space-y-3 animate-in slide-in-from-bottom-4 duration-700 delay-300">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] text-white drop-shadow-lg"
            style={{
              textShadow:
                "0 0 20px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.8)",
            }}
          >
            VISION LANDSCAPES
          </h1>
          <div className="h-px w-32 bg-white/60 mx-auto" />
        </div>

        {/* Tagline */}
        <div className="row-start-3 flex items-center justify-center pb-24 md:pb-32">
          <p
            className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-2xl animate-in slide-in-from-bottom-4 duration-700 delay-500 drop-shadow-md"
            style={{
              textShadow:
                "0 0 15px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.7)",
            }}
          >
            Creating Extraordinary Outdoor Spaces
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
