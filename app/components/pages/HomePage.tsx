"use client";

import { HeroSection } from "../sections/HeroSection";
import { StorySection } from "../sections/StorySection";
import type { Page } from "../../types";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <StorySection onNavigate={onNavigate} />
    </>
  );
}
