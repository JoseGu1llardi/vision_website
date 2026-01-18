"use client";

import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern garden design",
  },
  {
    url: "https://images.unsplash.com/photo-1681900525806-a7d3f266128c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Contemporary landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1763479142885-47f05d01cad1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Luxury outdoor space",
  },
];

const projects = [
  {
    name: "Garden Design",
    image: "/gd7.jpg",
    description:
      "Custom residential garden featuring native plants and sustainable design",
    summary:
      "Transform your outdoor space with thoughtfully designed gardens that blend aesthetics with functionality and environmental consciousness.",
  },
  {
    name: "Landscape Architecture",
    image: "/gd8.jpg",
    description:
      "Modern outdoor living space with integrated seating and lighting",
    summary:
      "Comprehensive landscape solutions that create seamless transitions between indoor and outdoor living areas.",
  },
  {
    name: "Outdoor Lighting",
    image: "/gd9.jpg",
    description:
      "Professional lighting design for enhanced ambiance and security",
    summary:
      "Expert lighting installations that highlight architectural features while providing safety and extending outdoor enjoyment into the evening.",
  },
  {
    name: "Estate Landscaping",
    image: "/gd1.jpg",
    description: "Large-scale property development with mature plantings",
    summary:
      "Sophisticated estate management combining horticultural expertise with long-term landscape planning and maintenance.",
  },
  {
    name: "Commercial Projects",
    image: "/gd2.jpg",
    description:
      "Professional landscaping for business premises and public spaces",
    summary:
      "Creating welcoming environments for commercial properties that enhance brand image and employee wellbeing.",
  },
  {
    name: "Garden Maintenance",
    image: "/gd3.jpg",
    description: "Year-round garden care and seasonal maintenance programs",
    summary:
      "Regular maintenance services ensuring your landscape remains vibrant and healthy throughout all seasons.",
  },
];

const galleryImages = [
  "/gd1.jpg",
  "/gd2.jpg",
  "/gd3.jpg",
  "/gd4.jpg",
  "/gd5.jpg",
  "/gd6.jpg",
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextGallerySlide = () => {
    const isMobile = window.innerWidth < 768;
    const increment = isMobile ? 1 : 3;
    setGalleryIndex((prev) =>
      prev + increment >= galleryImages.length ? 0 : prev + increment,
    );
  };

  const prevGallerySlide = () => {
    const isMobile = window.innerWidth < 768;
    const increment = isMobile ? 1 : 3;
    setGalleryIndex((prev) =>
      prev - increment < 0
        ? Math.max(0, galleryImages.length - increment)
        : prev - increment,
    );
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const itemsPerSlide = isMobile ? 1 : 3;
  const visibleGalleryImages = galleryImages.slice(
    galleryIndex,
    galleryIndex + itemsPerSlide,
  );

  return (
    <div className="min-h-screen">
      {/* Header with Scroll Effect */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
          scrolled ? "py-3 shadow-md" : "py-3"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Desktop Header */}
          <div className="hidden md:block">
            {/* Header quando NÃO scrollou */}
            <div
              className={`transition-all duration-300 ${
                scrolled ? "hidden" : "block"
              }`}
            >
              <div className="flex flex-col items-center">
                <Image
                  src="/ar-logo.svg"
                  alt="AR Design Logo"
                  className="w-12 h-12 mb-4"
                  width={100}
                  height={50}
                />
                <h1 className="text-2xl tracking-[0.3em] font-light text-black mb-1">
                  VISION LANDSCAPE
                </h1>
                <p className="text-xs tracking-[0.4em] text-black mb-6">
                  STUDIO
                </p>
                <nav className="flex items-center gap-12">
                  <Link
                    href="/"
                    className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
                  >
                    HOME
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-foreground"></span>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
                  >
                    PORTFOLIO
                    <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-foreground transition-all duration-300"></span>
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
                  >
                    CONTACT
                    <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-foreground transition-all duration-300"></span>
                  </Link>
                </nav>
              </div>
            </div>

            {/* Header quando SCROLLOU */}
            <div
              className={`transition-all duration-300 ${
                scrolled ? "block" : "hidden"
              }`}
            >
              <div className="flex items-center justify-between">
                {/* Logo à esquerda */}
                <div className="flex items-center">
                  <Image
                    src="/ar-logo.svg"
                    alt="AR Design Logo"
                    className="w-10 h-10"
                    width={100}
                    height={50}
                  />
                </div>

                {/* Nome da empresa no centro */}
                <div className="absolute left-1/2 -translate-x-1/2">
                  <h1 className="text-lg tracking-[0.3em] font-light text-black whitespace-nowrap">
                    VISION LANDSCAPE
                  </h1>
                </div>

                {/* Links à direita */}
                <nav className="flex items-center gap-8">
                  <Link
                    href="/"
                    className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
                  >
                    HOME
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-foreground"></span>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
                  >
                    PORTFOLIO
                    <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-foreground transition-all duration-300"></span>
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
                  >
                    CONTACT
                    <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-foreground transition-all duration-300"></span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between">
            {/* Logo Mobile - sempre visível */}
            <div
              className={`transition-all duration-300 ${
                scrolled ? "w-8 h-8" : "w-10 h-10"
              }`}
            >
              <Image
                src="/ar-logo.svg"
                alt="AR Design Logo"
                className="w-full h-full"
                width={100}
                height={50}
              />
            </div>

            {/* Brand Name Mobile - Centro */}
            <div className="text-center flex-1">
              <h1
                className={`tracking-[0.3em] font-light text-black transition-all duration-300 ${
                  scrolled ? "text-base" : "text-xl"
                }`}
              >
                VISION LANDSCAPE
              </h1>
              <p
                className={`text-xs tracking-[0.4em] text-black transition-all duration-300 ${
                  scrolled ? "hidden" : "block"
                }`}
              >
                STUDIO
              </p>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity"
              aria-label="Menu"
            >
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              mobileMenuOpen ? "max-h-60 mt-6" : "max-h-0"
            }`}
          >
            <nav className="flex flex-col items-center gap-6 py-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
              >
                HOME
                <span className="absolute -bottom-1 left-0 w-full h-px bg-foreground"></span>
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
              >
                PORTFOLIO
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-foreground transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
              >
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-foreground transition-all duration-300"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <section
        className={`relative h-screen transition-all duration-300 ${
          scrolled ? "mt-20 md:mt-24" : "mt-20 md:mt-52"
        }`}
      >
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
              fill
            />
            <div className="absolute inset-0 bg-foreground/20" />
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-background w-8"
                  : "bg-background/50"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Quality Dublin Landscape Design, Construction & Maintenance for
            Residential & Commercial Clients
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Established in 2011 by James Brennan, Vision Landscape Solutions is
            a professional Dublin landscaping service offering professional
            garden design, construction, and maintenance services to domestic
            and commercial clients. As a qualified horticulturist and BA science
            graduate, James Brennan has worked in the landscaping industry in
            Europe, Australia, and America, bringing this international
            expertise to all services provided by Vision Landscape Solutions.
            From golf courses and estate land to smaller residential gardens,
            here at Vision Landscape Solutions, we put quality, professionalism,
            standards, and sustainability at the heart of everything that we do
            to create incredible outdoor spaces that are as beautiful as they
            are functional.
          </p>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Work
          </h2>
          <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
            Explore our portfolio of landscape transformations across Dublin and
            beyond
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-foreground/5">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                    fill
                  />

                  {/* Hover Overlay with Summary */}
                  <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6">
                    <p className="text-background text-sm leading-relaxed text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-foreground/70 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="py-16 px-4 bg-foreground/5">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Recent Projects Gallery
          </h3>

          <div className="relative">
            {/* Carousel Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visibleGalleryImages.map((image, index) => (
                <div
                  key={galleryIndex + index}
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Project ${galleryIndex + index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    fill
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-background text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevGallerySlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-background rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
              aria-label="Previous"
            >
              <span className="text-2xl text-foreground/70 group-hover:text-foreground">
                ‹
              </span>
            </button>

            <button
              onClick={nextGallerySlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-background rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
              aria-label="Next"
            >
              <span className="text-2xl text-foreground/70 group-hover:text-foreground">
                ›
              </span>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setGalleryIndex(index * 3)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      Math.floor(galleryIndex / 3) === index
                        ? "bg-foreground w-8"
                        : "bg-foreground/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors group"
            aria-label="Close"
          >
            <span className="text-background text-3xl group-hover:scale-110 transition-transform">
              ×
            </span>
          </button>

          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              className="object-contain w-full h-full rounded-lg"
              fill
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-20 px-4 bg-background border-t border-foreground/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Business Card - Left Side */}
            <div className="bg-white border border-foreground/10 rounded-lg shadow-lg p-8 md:p-10 flex flex-col justify-between h-full">
              <div className="space-y-6">
                {/* Logo and Brand */}
                <div className="flex flex-col items-start">
                  <Image
                    src="/ar-logo.svg"
                    alt="Vision Landscape Logo"
                    className="w-16 h-16 mb-4"
                    width={120}
                    height={60}
                  />
                  <h3 className="text-2xl tracking-[0.3em] font-light text-black mb-1">
                    VISION LANDSCAPE
                  </h3>
                  <p className="text-xs tracking-[0.4em] text-foreground/60">
                    STUDIO
                  </p>
                </div>

                <div className="h-px bg-foreground/10 my-6" />

                {/* Contact Information */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-foreground/60 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        139 Claremount Court
                        <br />
                        Glasnevin, Dublin 11
                        <br />
                        D11TN8L, Ireland
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-foreground/60 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:james@visionlandscapesolutions.ie"
                      className="text-sm text-foreground/80 hover:text-primary transition-colors hover:underline"
                    >
                      james@visionlandscapesolutions.ie
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-foreground/60 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:+353858134165"
                      className="text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      +353 85 813 4165
                    </a>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-foreground/60 flex-shrink-0" />
                    <Link
                      href="https://www.instagram.com/visionlandscapes.ltd?igsh=eHNhYjN6azB1cWQ2"
                      target="_blank"
                      className="text-sm text-foreground/80 hover:text-primary transition-colors hover:underline"
                    >
                      @visionlandscapes.ltd
                    </Link>
                  </div>
                </div>
              </div>

              {/* Business Hours (Optional) */}
              <div className="mt-8 pt-6 border-t border-foreground/10">
                <p className="text-xs text-foreground/50 tracking-wider">
                  Professional Landscape Services Since 2011
                </p>
              </div>
            </div>

            {/* Google Maps - Right Side */}
            <div className="relative h-[500px] md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <a
                href="https://www.google.com/maps/search/?api=1&query=139+Claremount+Court,+Glasnevin,+Dublin+11,+D11TN8L"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.123456789!2d-6.2603!3d53.3861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDIzJzEwLjAiTiA2wrAxNSczNi4xIlc!5e0!3m2!1sen!2sie!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />

                {/* Overlay with Click Indicator */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                  <div className="bg-background/90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-foreground flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Open in Google Maps
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-background py-8 px-4 border-t border-foreground/10">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Logo */}
            <Image
              src="/ar-logo.svg"
              alt="AR Design Logo"
              className="w-12 h-12 opacity-60"
              width={100}
              height={50}
            />

            {/* Brand Name */}
            <div>
              <h2 className="text-lg tracking-[0.3em] text-foreground/70 font-light mb-1">
                VISION LANDSCAPE
              </h2>
              <p className="text-xs tracking-[0.4em] text-foreground/50">
                STUDIO
              </p>
            </div>

            {/* Copyright */}
            <div className="text-sm text-foreground/60 pt-4 border-t border-foreground/10 w-full">
              © 2025 Vision Landscape Limited. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
