"use client";

import { Button } from "@/components/ui/button";
import React from "react";
// Import Lucide icons (correct names)
import { 
  // Web Technologies
  Code, Type, Server, Bot, Cpu, Brain,
  // Cloud Platforms
  Cloud, CloudCog, ServerCog,
  // DevOps Tools
  Box, Layers,
  // Databases
  Database, HardDrive,
  // Frontend Frameworks
  Monitor, Smartphone,
  // Version Control
  GitBranch, Github,
  // Communication/Message Queues
  MessageSquare, Radio,
  // Monitoring/Logging
  BarChart, Activity
} from "lucide-react";

// Technology and AI tools icons - using Lucide icons
const ICONS_ROW1 = [
  { icon: Code, name: "React" },
  { icon: Type, name: "TypeScript" },
  { icon: Server, name: "Node.js" },
  { icon: Bot, name: "Python" },
  { icon: Cpu, name: "JavaScript" },
  { icon: Monitor, name: "Vue.js" },
  { icon: Layers, name: "Angular" },
  { icon: Smartphone, name: "Mobile" },
  { icon: Bot, name: "AI/ML" },
  { icon: Cpu, name: "Neural Networks" },
];

const ICONS_ROW2 = [
  { icon: Cloud, name: "AWS" },
  { icon: CloudCog, name: "Google Cloud" },
  { icon: ServerCog, name: "Azure" },
  { icon: Box, name: "Docker" },
  { icon: Layers, name: "Kubernetes" },
  { icon: Database, name: "MongoDB" },
  { icon: HardDrive, name: "PostgreSQL" },
  { icon: Database, name: "MySQL" },
  { icon: Cpu, name: "TensorFlow" },
  { icon: Brain, name: "PyTorch" },
];

const ICONS_ROW3 = [
  { icon: Smartphone, name: "Android" },
  { icon: Monitor, name: "iOS" },
  { icon: GitBranch, name: "Git" },
  { icon: Github, name: "GitHub" },
  { icon: MessageSquare, name: "RabbitMQ" },
  { icon: Radio, name: "Redis" },
  { icon: BarChart, name: "Analytics" },
  { icon: Activity, name: "Monitoring" },
  { icon: Database, name: "Data Engineering" },
  { icon: Bot, name: "Automation" },
];

// Utility to repeat icons enough times
const repeatedIcons = (icons: { icon: React.FC<any>, name: string }[], repeat = 3) => 
  Array.from({ length: repeat }).flatMap(() => icons);

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
          <div className="flex gap-8 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 3).map((item, i) => (
              <div key={i} className="h-20 w-20 flex-shrink-0 rounded-full bg-background/80 dark:bg-muted/50 shadow-md border border-primary/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <item.icon 
                  size={48}
                  className="text-primary opacity-90 hover:opacity-100 transition-opacity" 
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-8 whitespace-nowrap mt-6 animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 3).map((item, i) => (
              <div key={i} className="h-20 w-20 flex-shrink-0 rounded-full bg-background/80 dark:bg-muted/50 shadow-md border border-primary/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <item.icon 
                  size={48}
                  className="text-primary opacity-90 hover:opacity-100 transition-opacity" 
                />
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex gap-8 whitespace-nowrap mt-6 animate-scroll-left">
            {repeatedIcons(ICONS_ROW3, 3).map((item, i) => (
              <div key={i} className="h-20 w-20 flex-shrink-0 rounded-full bg-background/80 dark:bg-muted/50 shadow-md border border-primary/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <item.icon 
                  size={48}
                  className="text-primary opacity-90 hover:opacity-100 transition-opacity" 
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