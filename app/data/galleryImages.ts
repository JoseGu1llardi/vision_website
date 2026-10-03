import type { SERVICE_OPTIONS } from "../components/sections/contact/constants";

type Service = (typeof SERVICE_OPTIONS)[number];

export interface GalleryPhoto {
  thumb: string; // short side ~800px, cropped to a square in the grid
  full: string; // long side up to 2000px, used in the modal
  alt: string;
  service: Service;
  // Which part of the photo the square grid crop keeps — mainly for portrait
  // photos whose subject sits near the top or bottom
  focus: "top" | "center" | "bottom";
}

interface GalleryEntry {
  file: string; // file name in /images-src/gallery, without extension
  alt: string;
  service: Service;
  focus?: GalleryPhoto["focus"];
}

// Shown in this order. Files are generated from /images-src/gallery by
// `npm run optimize-images`
const GALLERY: GalleryEntry[] = [
  {
    file: "pergola-seating-fireplace",
    alt: "Timber pergola with outdoor seating and fireplace wall, framed by planting and stepping-stone path",
    service: "Pergolas",
  },
  {
    file: "resin-driveway-front-garden",
    alt: "Resin bound driveway in front of a house, with fern planting and a cedar fence",
    service: "Resin Bound Driveways",
  },
  {
    file: "outdoor-kitchen-living-wall",
    alt: "Outdoor kitchen with concrete worktop, slatted timber doors and a living wall behind",
    service: "Outdoor Kitchens",
    focus: "bottom",
  },
  {
    file: "pool-granite-terrace",
    alt: "Pool terrace in light granite paving, surrounded by hedging and a red Japanese maple",
    service: "Hardscaping",
  },
  {
    file: "limestone-patio-new-planting",
    alt: "Large limestone patio leading to a newly planted garden with young trees",
    service: "Hardscaping",
  },
  {
    file: "japanese-maple-planting",
    alt: "Japanese maple with clipped box balls, hydrangeas and lawn",
    service: "Planting Services",
  },
  {
    file: "corten-water-bowl",
    alt: "Corten steel water bowl beneath a multi-stem tree, with low planting",
    service: "Softscaping",
    focus: "bottom",
  },
  {
    file: "artificial-grass-sports-court",
    alt: "Artificial grass sports court with net and basketball hoop, enclosed by hedging",
    service: "Other",
  },
  {
    file: "corten-planter-decking",
    alt: "Corten steel raised planter with grasses, next to timber decking and a black fence",
    service: "Softscaping",
  },
  {
    file: "pergola-post-lighting",
    alt: "Timber pergola post with wall light and climbing plants",
    service: "Pergolas",
  },
  {
    file: "rear-garden-stone-paths",
    alt: "Rear garden seen from above, with stone paths, gravel and raised beds",
    service: "Hardscaping",
  },
];

export const galleryImages: GalleryPhoto[] = GALLERY.map(
  ({ file, focus = "center", ...rest }) => ({
    thumb: `/images/gallery/${file}-thumb.webp`,
    full: `/images/gallery/${file}-full.webp`,
    focus,
    ...rest,
  }),
);
