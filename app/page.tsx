"use client";

import { useState, useEffect } from "react";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSlider } from "./components/home/HeroSlider";
import { GalleryCarousel } from "./components/home/GalleryCarousel";
import { ContactSection } from "./components/home/ContactSection";
import { ProjectsGrid } from "./components/home/ProjectsGrid";
import { AboutSection } from "./components/home/AboutSection";
import { FormSection } from "./components/home/FormSection";

import { heroImages } from "./data/heroImages";
import { projects } from "./data/projects";
import { galleryImages } from "./data/galleryImages";

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
      <HeroSlider images={heroImages} scrolled={scrolled} />
      <AboutSection />
      <ProjectsGrid projects={projects} />
      <GalleryCarousel images={galleryImages} />
      <FormSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
