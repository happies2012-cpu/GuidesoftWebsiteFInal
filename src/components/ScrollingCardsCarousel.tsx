"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import service1 from "@/assets/1.png";
import service2 from "@/assets/2.png";
import service3 from "@/assets/3.png";
import service4 from "@/assets/4.png";
import service5 from "@/assets/5.png";
import service6 from "@/assets/6.png";
import service7 from "@/assets/7.png";
import service8 from "@/assets/8.png";
import service9 from "@/assets/9.png";
import service10 from "@/assets/10.png";
import service11 from "@/assets/11.png";
import service12 from "@/assets/12.png";
import service13 from "@/assets/13.png";
import service14 from "@/assets/14.png";
import service15 from "@/assets/15.png";
import service16 from "@/assets/16.png";
import service17 from "@/assets/17.png";
import service18 from "@/assets/18.png";
import service19 from "@/assets/19.png";

// Updated carousel items with local images and consistent structure
const carouselItems = [
  {
    id: 1,
    image: service1,
    title: "E-commerce Solutions",
    category: "Mobile Applications"
  },
  {
    id: 2,
    image: service2,
    title: "Banking & Finance Apps",
    category: "Mobile Applications"
  },
  {
    id: 3,
    image: service3,
    title: "Marketing Automation",
    category: "Business Tools"
  },
  {
    id: 4,
    image: service4,
    title: "Project Management",
    category: "Productivity"
  },
  {
    id: 5,
    image: service5,
    title: "Healthcare & Wellness",
    category: "Mobile Applications"
  },
  {
    id: 6,
    image: service6,
    title: "Data Analytics Dashboards",
    category: "Business Intelligence"
  },
  {
    id: 7,
    image: service7,
    title: "Education Platforms",
    category: "E-learning"
  },
  {
    id: 8,
    image: service8,
    title: "Travel & Hospitality",
    category: "Mobile Applications"
  },
  {
    id: 9,
    image: service9,
    title: "AI & Machine Learning",
    category: "Artificial Intelligence"
  },
  {
    id: 10,
    image: service10,
    title: "Cloud Infrastructure",
    category: "DevOps"
  },
  {
    id: 11,
    image: service11,
    title: "Cybersecurity Solutions",
    category: "Security"
  },
  {
    id: 12,
    image: service12,
    title: "IoT Development",
    category: "Connected Devices"
  },
  {
    id: 13,
    image: service13,
    title: "Blockchain Solutions",
    category: "Distributed Ledger"
  },
  {
    id: 14,
    image: service14,
    title: "AR/VR Experiences",
    category: "Immersive Tech"
  },
  {
    id: 15,
    image: service15,
    title: "Mobile App Development",
    category: "Cross-Platform"
  },
  {
    id: 16,
    image: service16,
    title: "Web Development",
    category: "Frontend & Backend"
  },
  {
    id: 17,
    image: service17,
    title: "UI/UX Design",
    category: "User Experience"
  },
  {
    id: 18,
    image: service18,
    title: "Digital Marketing",
    category: "Online Presence"
  },
  {
    id: 19,
    image: service19,
    title: "Business Consulting",
    category: "Strategic Planning"
  }
];

const ScrollingCardsCarousel = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true, // Allows free dragging without snapping to specific slides
  });

  // For dock-style animation effect
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="relative w-full overflow-hidden py-8 md:py-16">
      <div className="embla" ref={emblaRef}>
        <div 
          className="embla__container flex -ml-4"
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
        >
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} item={item} mouseX={mouseX} />
          ))}
        </div>
      </div>
      {/* Subtle gradient overlays for infinite scroll effect */}
      <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};

// CarouselItem component with enhanced animations
const CarouselItem = ({ item, mouseX }: { item: typeof carouselItems[0], mouseX: any }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  // Distance for animation effect (similar to dock component)
  const distance = 150;
  const magnification = 80;
  
  const mouseDistance = useTransform(mouseX, (val) => {
    const domRect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - domRect.x - domRect.width / 2;
  });

  // Transform for scaling effect
  const scaleTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [0.9, 1.1, 0.9]
  );

  const scale = useSpring(scaleTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="embla__slide flex-none w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[25vw] pl-4"
    >
      <motion.div
        whileHover={{ 
          scale: 1.03, 
          boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
          zIndex: 10
        }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <Card className="h-full flex flex-col bg-background/40 backdrop-blur-xl border border-primary/20 shadow-lg overflow-hidden">
          <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/20 to-gradient-primary-end/20 opacity-50" />
          </div>
          <CardContent className="p-6 flex-grow flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-base text-muted-foreground">
              {item.category}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ScrollingCardsCarousel;