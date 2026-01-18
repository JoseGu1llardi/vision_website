"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export function ContactSection() {
  return (
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
                    className="w-5 h-5 text-foreground/60 mt-0.5 shrink-0"
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
                    className="w-5 h-5 text-foreground/60 shrink-0"
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
                    className="w-5 h-5 text-foreground/60 shrink-0"
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
                  <Instagram className="w-5 h-5 text-foreground/60 shrink-0" />
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
          <div className="relative h-125 md:h-full min-h-100 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
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
  );
}
