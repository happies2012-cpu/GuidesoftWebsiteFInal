"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";
import img6 from "@/assets/6.png";
import img7 from "@/assets/7.png";
import img8 from "@/assets/8.png";
import img9 from "@/assets/9.png";
import img10 from "@/assets/10.png";
import img11 from "@/assets/11.png";
import img12 from "@/assets/12.png";
import img13 from "@/assets/13.png";
import img14 from "@/assets/14.png";
import img15 from "@/assets/15.png";
import img16 from "@/assets/16.png";

export const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          Our Latest Tools Ready to Integrate
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-foreground">
          We've More Than <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Workflows</span>
          <br />
          <span className="text-2xl md:text-3xl text-muted-foreground">with LLM, Model & MCP</span>
        </h3>
        <p className="text-base md:text-lg text-muted-foreground my-4 md:my-6">
          Harness the power of advanced AI workflows combining Large Language Models (LLM), Machine Learning Models, and Model Context Protocol (MCP) to deliver next-generation intelligent solutions.
        </p>
        <button 
          className={cn(
            "bg-primary text-primary-foreground font-medium py-3 px-6 rounded-md text-lg",
            "transition-all hover:bg-primary/90 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          onClick={() => window.dispatchEvent(new CustomEvent('openModal', { 
            detail: { 
              type: 'services', 
              data: { 
                title: 'Explore AI Workflows', 
                description: 'Discover how our AI workflows with LLM, Models, and MCP can transform your business.' 
              } 
            } 
          }))}
        >
          Explore AI Workflows
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// AI tools themed images with local SVG placeholders - no external dependencies
const squareData = [
  {
    id: 1,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#10B981" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">O</text></svg>`),
    fallback: img1,
    gradient: "from-green-400 to-emerald-600",
    label: "OpenAI"
  },
  {
    id: 2,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#EA580C" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">C</text></svg>`),
    fallback: img2,
    gradient: "from-orange-400 to-red-600",
    label: "Claude AI"
  },
  {
    id: 3,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#7C3AED" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">G</text></svg>`),
    fallback: img3,
    gradient: "from-purple-400 to-indigo-600",
    label: "Google AI"
  },
  {
    id: 4,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#374151" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">H</text></svg>`),
    fallback: img4,
    gradient: "from-gray-700 to-gray-900",
    label: "GitHub AI"
  },
  {
    id: 5,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#F59E0B" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">T</text></svg>`),
    fallback: img5,
    gradient: "from-orange-500 to-yellow-500",
    label: "TensorFlow"
  },
  {
    id: 6,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#DC2626" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">P</text></svg>`),
    fallback: img6,
    gradient: "from-red-500 to-orange-500",
    label: "PyTorch"
  },
  {
    id: 7,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#3B82F6" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">P</text></svg>`),
    fallback: img7,
    gradient: "from-blue-500 to-yellow-500",
    label: "Python"
  },
  {
    id: 8,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#EA580C" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">J</text></svg>`),
    fallback: img8,
    gradient: "from-orange-400 to-red-500",
    label: "Jupyter"
  },
  {
    id: 9,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#06B6D4" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">D</text></svg>`),
    fallback: img9,
    gradient: "from-blue-400 to-cyan-500",
    label: "Docker"
  },
  {
    id: 10,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#4F46E5" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">K</text></svg>`),
    fallback: img10,
    gradient: "from-blue-500 to-indigo-600",
    label: "Kubernetes"
  },
  {
    id: 11,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#F59E0B" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">A</text></svg>`),
    fallback: img11,
    gradient: "from-orange-400 to-yellow-500",
    label: "AWS"
  },
  {
    id: 12,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#2563EB" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">G</text></svg>`),
    fallback: img12,
    gradient: "from-blue-400 to-red-500",
    label: "Google Cloud"
  },
  {
    id: 13,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#06B6D4" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">R</text></svg>`),
    fallback: img13,
    gradient: "from-cyan-400 to-blue-500",
    label: "React"
  },
  {
    id: 14,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#16A34A" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">N</text></svg>`),
    fallback: img14,
    gradient: "from-green-500 to-green-700",
    label: "Node.js"
  },
  {
    id: 15,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#2563EB" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">T</text></svg>`),
    fallback: img15,
    gradient: "from-blue-500 to-blue-700",
    label: "TypeScript"
  },
  {
    id: 16,
    src: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#16A34A" rx="20"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">M</text></svg>`),
    fallback: img16,
    gradient: "from-green-500 to-green-700",
    label: "MongoDB"
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-background to-muted border border-primary/20 hover:border-primary/40 transition-all duration-300 flex items-center justify-center group relative"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${sq.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
      
      {/* AI Tool Icon/Image - Enhanced size with original colors */}
      <img
        src={sq.src}
        alt={sq.label}
        className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 p-2"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          // @ts-ignore
          target.src = sq.fallback;
          target.className = "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 p-0";
        }}
      />
      
      {/* Tool Label */}
      <div className="absolute bottom-1 left-1 right-1 bg-background/90 backdrop-blur-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs md:text-sm font-medium text-foreground truncate block text-center">{sq.label}</span>
      </div>
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[550px] md:h-[600px] gap-2">
      {squares.map((sq) => sq)}
    </div>
  );
};