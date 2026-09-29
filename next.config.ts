import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Static export can't optimize at request time; images are pre-optimized
  // by `npm run optimize-images` instead
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
