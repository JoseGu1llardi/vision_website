export interface GalleryPhoto {
  thumb: string; // 1200px wide, used in the grid
  full: string; // 2000px wide, used in the modal
  alt: string;
}

// Files are generated from /images-src by `npm run optimize-images`
export const galleryImages: GalleryPhoto[] = [
  "gd1",
  "gd2",
  "gd3",
  "gd4",
  "gd5",
  "gd6",
].map((id, index) => ({
  thumb: `/images/gallery/${id}-1200.webp`,
  full: `/images/gallery/${id}-2000.webp`,
  alt: `Project ${index + 1}`,
}));
