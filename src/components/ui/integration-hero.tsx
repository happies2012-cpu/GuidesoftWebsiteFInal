"use client";

import { Button } from "@/components/ui/button";
import React from "react";

// Technology and AI tools icons - using techicons.dev for high-quality SVG icons
const ICONS_ROW1 = [
  "https://techicons.dev/icons/react",
  "https://techicons.dev/icons/typescript", 
  "https://techicons.dev/icons/nodejs",
  "https://techicons.dev/icons/python",
  "https://techicons.dev/icons/tensorflow",
  "https://techicons.dev/icons/openai",
  "https://techicons.dev/icons/docker",
];

const ICONS_ROW2 = [
  "https://techicons.dev/icons/kubernetes",
  "https://techicons.dev/icons/aws",
  "https://techicons.dev/icons/googlecloud",
  "https://techicons.dev/icons/pytorch",
  "https://techicons.dev/icons/langchain",
  "https://techicons.dev/icons/jupyter",
  "https://techicons.dev/icons/mongodb",
];

// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 4) => Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-sm rounded-full border border-primary/20 bg-primary/10 text-primary font-medium">
          ⚡ Technology Stack
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-cyan-500 bg-clip-text text-transparent">
          Technology Focus Areas
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Cutting-edge technologies and frameworks powering next-generation AI solutions and enterprise applications.
        </p>
        <Button 
          variant="default" 
          className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:opacity-90 transition"
          onClick={() => window.dispatchEvent(new CustomEvent('openModal', { 
            detail: { 
              type: 'services', 
              data: { 
                title: 'Explore Our Technology Stack', 
                description: 'Discover how our technology expertise can power your next project.' 
              } 
            } 
          }))}
        >
          Get Started
        </Button>

        {/* Carousel */}
        <div className="mt-12 overflow-hidden relative pb-2">
          {/* Row 1 */}
          <div className="flex gap-10 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div key={i} className="h-16 w-16 flex-shrink-0 rounded-full bg-background/80 dark:bg-muted/50 shadow-md border border-primary/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img 
                  src={src} 
                  alt="technology icon" 
                  className="h-10 w-10 object-contain opacity-90 hover:opacity-100 transition-opacity" 
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-10 whitespace-nowrap mt-6 animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div key={i} className="h-16 w-16 flex-shrink-0 rounded-full bg-background/80 dark:bg-muted/50 shadow-md border border-primary/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img 
                  src={src} 
                  alt="technology icon" 
                  className="h-10 w-10 object-contain opacity-90 hover:opacity-100 transition-opacity" 
                />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>


    </section>
  );
}