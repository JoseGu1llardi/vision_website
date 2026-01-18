"use client";

import { useState, useEffect } from "react";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSlider } from "./components/home/HeroSlider";
import { heroImages } from "./data/heroImages.ts";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider images={heroImages} scroll />
      <Footer />
    </div>
  );
}
