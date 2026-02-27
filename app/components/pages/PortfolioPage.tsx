import { GalleryCarousel } from "../sections/GalleryCarousel";
import { galleryImages } from "../../data/galleryImages";

export function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-40">
      <GalleryCarousel images={galleryImages} />
    </div>
  );
}
