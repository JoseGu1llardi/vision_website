"use client";

import { useState, useEffect } from "react";
import { HeroSlider } from "../home/HeroSlider";
import { heroImages } from "../../data/heroImages";

export function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSlider images={heroImages} scrolled={scrolled} />
    </div>
  );
}
