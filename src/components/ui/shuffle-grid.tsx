"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

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

// AI tools themed images with specific AI platforms and tools - using techicons.dev
const squareData = [
  {
    id: 1,
    src: "https://techicons.dev/icons/openai",
    fallback: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-green-400 to-emerald-600",
    label: "OpenAI"
  },
  {
    id: 2,
    src: "https://techicons.dev/icons/anthropic",
    fallback: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-orange-400 to-red-600",
    label: "Claude AI"
  },
  {
    id: 3,
    src: "https://techicons.dev/icons/google",
    fallback: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-purple-400 to-indigo-600",
    label: "Google AI"
  },
  {
    id: 4,
    src: "https://techicons.dev/icons/github",
    fallback: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-gray-700 to-gray-900",
    label: "GitHub AI"
  },
  {
    id: 5,
    src: "https://techicons.dev/icons/tensorflow",
    fallback: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-orange-500 to-yellow-500",
    label: "TensorFlow"
  },
  {
    id: 6,
    src: "https://techicons.dev/icons/pytorch",
    fallback: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-red-500 to-orange-500",
    label: "PyTorch"
  },
  {
    id: 7,
    src: "https://techicons.dev/icons/python",
    fallback: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-blue-500 to-yellow-500",
    label: "Python"
  },
  {
    id: 8,
    src: "https://techicons.dev/icons/jupyter",
    fallback: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-orange-400 to-red-500",
    label: "Jupyter"
  },
  {
    id: 9,
    src: "https://techicons.dev/icons/docker",
    fallback: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-blue-400 to-cyan-500",
    label: "Docker"
  },
  {
    id: 10,
    src: "https://techicons.dev/icons/kubernetes",
    fallback: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-blue-500 to-indigo-600",
    label: "Kubernetes"
  },
  {
    id: 11,
    src: "https://techicons.dev/icons/aws",
    fallback: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-orange-400 to-yellow-500",
    label: "AWS"
  },
  {
    id: 12,
    src: "https://techicons.dev/icons/googlecloud",
    fallback: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-blue-400 to-red-500",
    label: "Google Cloud"
  },
  {
    id: 13,
    src: "https://techicons.dev/icons/react",
    fallback: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-cyan-400 to-blue-500",
    label: "React"
  },
  {
    id: 14,
    src: "https://techicons.dev/icons/nodejs",
    fallback: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-green-500 to-green-700",
    label: "Node.js"
  },
  {
    id: 15,
    src: "https://techicons.dev/icons/typescript",
    fallback: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    gradient: "from-blue-500 to-blue-700",
    label: "TypeScript"
  },
  {
    id: 16,
    src: "https://techicons.dev/icons/mongodb",
    fallback: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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