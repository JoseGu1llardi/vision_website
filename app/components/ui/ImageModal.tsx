"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ImageModalProps {
  image: string;
  alt?: string;
  onClose: () => void;
}

export function ImageModal({ image, alt = "Gallery image", onClose }: ImageModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
      className="fixed inset-0 z-100 bg-foreground/95 flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-300"
    >
      {/* Image container — no stopPropagation: clicking anywhere (including image) closes the modal */}
      <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={alt}
          className="object-contain"
          fill
        />
      </div>

      {/* Close button — z-10 ensures it always renders above the image layer regardless of DOM order */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors group"
        aria-label="Close image"
      >
        <span className="text-background text-3xl leading-none group-hover:scale-110 transition-transform">
          ×
        </span>
      </button>
    </div>
  );
}
