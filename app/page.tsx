"use client";

import { useState, useEffect } from "react";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSlider } from "./components/home/HeroSlider";
import { GalleryCarousel } from "./components/home/GalleryCarousel";
import { ContactSection } from "./components/home/ContactSection";
import { ProjectsGrid } from "./components/home/ProjectsGrid";
import { AboutSection } from "./components/home/AboutSection";

import { heroImages } from "./data/heroImages.ts";
import { projects } from "./data/projects.ts";
import { galleryImages } from "./data/galleryImages.ts";

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
      <AboutSection />
      <ProjectsGrid projects={projects} />
      <GalleryCarousel images={galleryImages} />
      <ContactSection />
      <Footer />
    </div>
  );
}
