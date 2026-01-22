"use client";

import { ProjectsGrid } from "../home/ProjectsGrid";
import { GalleryCarousel } from "../home/GalleryCarousel";
import { projects } from "../../data/projects";
import { galleryImages } from "../../data/galleryImages";

export function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-40">
      {/* Gallery Carousel */}
      <GalleryCarousel images={galleryImages} />
    </div>
  );
}
