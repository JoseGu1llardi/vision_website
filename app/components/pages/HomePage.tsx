"use client";

import { HeroSection } from "../sections/HeroSection";
import { StorySection } from "../sections/StorySection";

interface HomePageProps {
  onNavigate: (page: "home" | "portfolio" | "contact") => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <StorySection onNavigate={onNavigate} />
    </>
  );
}
