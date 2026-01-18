"use client";

import Image from "next/image";

interface ImageModalProps {
  image: string;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors group"
        aria-label="Close"
      >
        <span className="text-background text-3xl group-hover:scale-110 transition-transform">
          ×
        </span>
      </button>

      <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
        <Image
          src={image || "/placeholder.svg"}
          alt="Gallery image"
          className="object-contain w-full h-full rounded-lg"
          fill
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}
