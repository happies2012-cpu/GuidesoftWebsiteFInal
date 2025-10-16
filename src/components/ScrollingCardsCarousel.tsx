"use client";

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
// Import Studio images from assets directory
import studio10 from "@/assets/Studio/10.png";
import studio11 from "@/assets/Studio/11.png";
import studio12 from "@/assets/Studio/12.png";
import audio from "@/assets/Studio/audio.png";
import brandPromotions from "@/assets/Studio/Brand Promotions.png";
import designing from "@/assets/Studio/designing.png";
import dev from "@/assets/Studio/dev.png";
import digitalMarketing from "@/assets/Studio/Digital Marketing.png";
import entertainment from "@/assets/Studio/Entertainment.png";
import news from "@/assets/Studio/news.png";
import products from "@/assets/Studio/products.png";
import promoting from "@/assets/Studio/promoting.png";
import uxui from "@/assets/Studio/uxui.png";
import workflows from "@/assets/Studio/workflows.png";

// Updated carousel items with Studio images and service mappings
const carouselItems = [
  {
    id: 1,
    image: audio,
    title: "Audio Production",
    category: "Media & Entertainment"
  },
  {
    id: 2,
    image: brandPromotions,
    title: "Brand Promotions",
    category: "Marketing & Advertising"
  },
  {
    id: 3,
    image: designing,
    title: "Graphic Design",
    category: "Creative Services"
  },
  {
    id: 4,
    image: dev,
    title: "Software Development",
    category: "Technology Services"
  },
  {
    id: 5,
    image: digitalMarketing,
    title: "Digital Marketing",
    category: "Online Promotion"
  },
  {
    id: 6,
    image: entertainment,
    title: "Entertainment Solutions",
    category: "Media & Content"
  },
  {
    id: 7,
    image: news,
    title: "News & Publishing",
    category: "Media & Journalism"
  },
  {
    id: 8,
    image: products,
    title: "Product Development",
    category: "Business Solutions"
  },
  {
    id: 9,
    image: promoting,
    title: "Promotional Campaigns",
    category: "Marketing & Advertising"
  },
  {
    id: 10,
    image: uxui,
    title: "UI/UX Design",
    category: "User Experience"
  },
  {
    id: 11,
    image: workflows,
    title: "Workflow Automation",
    category: "Business Process"
  },
  {
    id: 12,
    image: studio10,
    title: "Data Analytics",
    category: "Business Intelligence"
  },
  {
    id: 13,
    image: studio11,
    title: "Cloud Solutions",
    category: "Infrastructure"
  },
  {
    id: 14,
    image: studio12,
    title: "Mobile Applications",
    category: "iOS & Android"
  }
];

const ScrollingCardsCarousel = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="relative w-full overflow-hidden py-8 md:py-16">
      {/* Auto-scrolling container */}
      <div className="relative">
        <div className="flex animate-scroll-left">
          {/* First set of items */}
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} item={item} mouseX={mouseX} />
          ))}
          {/* Duplicate set for seamless loop */}
          {carouselItems.map((item) => (
            <CarouselItem key={`dup-${item.id}`} item={item} mouseX={mouseX} />
          ))}
        </div>
      </div>
      {/* Gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
};

// CarouselItem component with enhanced animations
const CarouselItem = ({ item, mouseX }: { item: typeof carouselItems[0], mouseX: any }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  const distance = 150;
  
  const mouseDistance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect();
    const x = bounds?.x ?? 0;
    const width = bounds?.width ?? 0;
    return val - x - width / 2;
  });

  const scaleTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [0.95, 1.05, 0.95]
  );

  const scale = useSpring(scaleTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="flex-none w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] px-4"
    >
      <motion.div
        whileHover={{ 
          scale: 1.03,
          y: -5,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}
        transition={{ duration: 0.3 }}
        className="h-full cursor-pointer"
      >
        <Card className="h-full flex flex-col bg-background/40 backdrop-blur-xl border border-primary/20 shadow-lg overflow-hidden hover:border-primary/40 transition-colors">
          <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain p-4"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/10 to-gradient-primary-end/10" />
          </div>
          <CardContent className="p-6 flex-grow flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {item.category}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ScrollingCardsCarousel;