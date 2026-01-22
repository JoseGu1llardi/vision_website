"use client";

import { ProjectsGrid } from "../home/ProjectsGrid";
import { GalleryCarousel } from "../home/GalleryCarousel";
import { projects } from "../../data/projects";
import { galleryImages } from "../../data/galleryImages";

export function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-52">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.3em] text-foreground/60 font-medium uppercase">
              Our Work
            </span>
            <div className="h-px bg-foreground/20 mt-2 w-16 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Explore our collection of landscape transformations across Dublin.
            From residential gardens to commercial properties, each project
            reflects our commitment to quality, sustainability, and stunning
            design.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsGrid projects={projects} />

      {/* Gallery Carousel */}
      <GalleryCarousel images={galleryImages} />
    </div>
  );
}
