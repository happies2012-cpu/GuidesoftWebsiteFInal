#!/usr/bin/env node

/**
 * Script to generate comprehensive portfolio pages
 * Creates showcase pages with projects, technologies, and case studies
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Portfolio page definitions
const portfolioPages = {
  // Travel Booking Engine
  travel: [
    {
      name: 'TravelBookingEngine',
      title: 'Travel Booking Engine Portfolio',
      description: 'Comprehensive travel technology solutions',
      icon: 'Plane'
    },
    {
      name: 'HotelBookingEngine',
      title: 'Hotel Booking Engine Portfolio',
      description: 'Advanced hotel reservation systems',
      icon: 'Hotel'
    },
    {
      name: 'CarRentalBooking',
      title: 'Car Rental Booking Portfolio',
      description: 'Vehicle rental booking solutions',
      icon: 'Car'
    },
    {
      name: 'CruiseBookingEngine',
      title: 'Cruise Booking Engine Portfolio',
      description: 'Cruise reservation platforms',
      icon: 'Ship'
    },
    {
      name: 'BusReservationSystem',
      title: 'Bus Reservation System Portfolio',
      description: 'Bus ticketing and reservation solutions',
      icon: 'Bus'
    },
    {
      name: 'ActivitiesBooking',
      title: 'Activities Booking Portfolio',
      description: 'Tours and activities booking platforms',
      icon: 'MapPin'
    },
    {
      name: 'VacationRentalManagement',
      title: 'Vacation Rental Management Portfolio',
      description: 'Property management systems',
      icon: 'Home'
    },
    {
      name: 'FlightBookingEngine',
      title: 'Flight Booking Engine Portfolio',
      description: 'Airline reservation systems',
      icon: 'Plane'
    }
  ],

  // Travel Portal Development
  travelPortal: [
    {
      name: 'B2BTravelPortal',
      title: 'B2B Travel Portal Portfolio',
      description: 'Business-to-business travel platforms',
      icon: 'Building2'
    },
    {
      name: 'B2CTravelPortal',
      title: 'B2C Travel Portal Portfolio',
      description: 'Consumer travel booking platforms',
      icon: 'Users'
    },
    {
      name: 'CustomTravelPortal',
      title: 'Custom Travel Portal Portfolio',
      description: 'Tailored travel solutions',
      icon: 'Settings'
    },
    {
      name: 'HotelExtranet',
      title: 'Hotel Extranet Portfolio',
      description: 'Hotel management platforms',
      icon: 'Hotel'
    }
  ],

  // Travel API Integration
  travelAPI: [
    {
      name: 'NDCAPIIntegration',
      title: 'NDC API Integration Portfolio',
      description: 'New Distribution Capability integration',
      icon: 'Code'
    },
    {
      name: 'AmadeusAPIIntegration',
      title: 'Amadeus API Integration Portfolio',
      description: 'Amadeus GDS integration solutions',
      icon: 'Globe'
    },
    {
      name: 'SabreAPIIntegration',
      title: 'Sabre API Integration Portfolio',
      description: 'Sabre GDS integration',
      icon: 'Network'
    },
    {
      name: 'GDSIntegration',
      title: 'GDS Integration Portfolio',
      description: 'Global Distribution System integration',
      icon: 'Share2'
    }
  ],

  // Frontend Developers
  frontend: [
    {
      name: 'ElectronJSDevelopers',
      title: 'Electron.js Development Portfolio',
      description: 'Desktop application development',
      icon: 'Monitor'
    },
    {
      name: 'ReactJSDevelopers',
      title: 'React.js Development Portfolio',
      description: 'React frontend development',
      icon: 'Code2'
    },
    {
      name: 'NextJSDevelopers',
      title: 'Next.js Development Portfolio',
      description: 'Next.js full-stack development',
      icon: 'Layers'
    },
    {
      name: 'HTMLDevelopers',
      title: 'HTML/CSS Development Portfolio',
      description: 'Frontend web development',
      icon: 'FileCode'
    },
    {
      name: 'AngularDevelopers',
      title: 'Angular Development Portfolio',
      description: 'Angular framework development',
      icon: 'Triangle'
    },
    {
      name: 'GatsbyJSDevelopers',
      title: 'Gatsby.js Development Portfolio',
      description: 'Static site generation',
      icon: 'Zap'
    }
  ],

  // Backend Developers
  backend: [
    {
      name: 'NodeJSDevelopers',
      title: 'Node.js Development Portfolio',
      description: 'Backend JavaScript development',
      icon: 'Server'
    },
    {
      name: 'LaravelDevelopers',
      title: 'Laravel Development Portfolio',
      description: 'PHP framework development',
      icon: 'Code'
    },
    {
      name: 'PythonDevelopers',
      title: 'Python Development Portfolio',
      description: 'Python backend solutions',
      icon: 'FileText'
    },
    {
      name: 'NestJSDevelopers',
      title: 'NestJS Development Portfolio',
      description: 'Enterprise Node.js framework',
      icon: 'Layers'
    },
    {
      name: 'ExpressJSDevelopers',
      title: 'Express.js Development Portfolio',
      description: 'Lightweight Node.js framework',
      icon: 'Rocket'
    },
    {
      name: 'DotNetDevelopers',
      title: '.NET Development Portfolio',
      description: 'Microsoft .NET solutions',
      icon: 'Box'
    },
    {
      name: 'GolangDevelopers',
      title: 'Golang Development Portfolio',
      description: 'Go programming solutions',
      icon: 'Cpu'
    }
  ],

  // Mobile Developers
  mobile: [
    {
      name: 'AndroidAppDevelopers',
      title: 'Android App Development Portfolio',
      description: 'Native Android applications',
      icon: 'Smartphone'
    },
    {
      name: 'ReactNativeDevelopers',
      title: 'React Native Development Portfolio',
      description: 'Cross-platform mobile apps',
      icon: 'Tablet'
    },
    {
      name: 'FlutterDevelopers',
      title: 'Flutter Development Portfolio',
      description: 'Flutter mobile development',
      icon: 'Smartphone'
    },
    {
      name: 'KotlinDevelopers',
      title: 'Kotlin Development Portfolio',
      description: 'Modern Android development',
      icon: 'Code'
    },
    {
      name: 'SwiftDevelopers',
      title: 'Swift Development Portfolio',
      description: 'iOS Swift development',
      icon: 'Smartphone'
    },
    {
      name: 'iOSDevelopers',
      title: 'iOS Development Portfolio',
      description: 'Native iOS applications',
      icon: 'Smartphone'
    }
  ],

  // On-Demand Solutions
  onDemand: [
    {
      name: 'BookingAppSolutions',
      title: 'Booking App Portfolio',
      description: 'On-demand booking solutions',
      icon: 'Calendar'
    },
    {
      name: 'ChatbotSolutions',
      title: 'Chatbot Solutions Portfolio',
      description: 'AI-powered chatbot development',
      icon: 'MessageSquare'
    },
    {
      name: 'FoodDeliverySolutions',
      title: 'Food Delivery App Portfolio',
      description: 'Food ordering and delivery platforms',
      icon: 'UtensilsCrossed'
    },
    {
      name: 'VideoStreamingSolutions',
      title: 'Video Streaming Portfolio',
      description: 'Video streaming platforms',
      icon: 'Video'
    }
  ],

  // Emerging Tech
  emergingTech: [
    {
      name: 'ELearningSolutions',
      title: 'eLearning Solutions Portfolio',
      description: 'Educational technology platforms',
      icon: 'GraduationCap'
    },
    {
      name: 'HRMSSolutions',
      title: 'HRMS Solutions Portfolio',
      description: 'Human resource management systems',
      icon: 'Users'
    },
    {
      name: 'ARAppDevelopment',
      title: 'AR App Development Portfolio',
      description: 'Augmented reality applications',
      icon: 'Glasses'
    }
  ],

  // Trending Technology
  trending: [
    {
      name: 'DataEngineering',
      title: 'Data Engineering Portfolio',
      description: 'Big data solutions',
      icon: 'Database'
    },
    {
      name: 'DataAnalytics',
      title: 'Data Analytics Portfolio',
      description: 'Business intelligence solutions',
      icon: 'BarChart'
    },
    {
      name: 'DataVisualization',
      title: 'Data Visualization Portfolio',
      description: 'Data visualization platforms',
      icon: 'PieChart'
    }
  ]
};

function generatePortfolioTemplate(page) {
  return `"use client";

import React from 'react';
import GenericPortfolioPage from '@/components/ui/GenericPortfolioPage';
import { ${page.icon} } from 'lucide-react';
import { getHeroImage } from "@/lib/image-utils";

const ${page.name} = () => {
  const stats = [
    { value: "50+", label: "Ready Workflow with AI" },
    { value: "100+", label: "Happy Clients" },
    { value: "$50M+", label: "Revenue Generated" },
    { value: "4.9/5", label: "Client Satisfaction" }
  ];

  const projects = [
    {
      title: "${page.title.replace(' Portfolio', '')} Platform",
      client: "Tech Solutions Inc.",
      category: "${page.title.replace(' Portfolio', '')}",
      description: "Comprehensive ${page.description} with advanced features and seamless user experience.",
      image: getHeroImage('default'),
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"],
      metrics: {
        users: "100K+",
        uptime: "99.9%",
        performance: "A+",
        roi: "350%"
      },
      features: [
        "Real-time data synchronization",
        "Advanced analytics dashboard",
        "Multi-platform support",
        "Enterprise-grade security",
        "Scalable architecture",
        "API integration ready"
      ]
    },
    {
      title: "Enterprise ${page.title.replace(' Portfolio', '')} Solution",
      client: "Global Enterprises Ltd.",
      category: "Enterprise Solution",
      description: "Scalable enterprise-grade ${page.description} serving millions of users worldwide.",
      image: getHeroImage('default'),
      technologies: ["Vue.js", "Python", "PostgreSQL", "Azure", "Kubernetes", "GraphQL"],
      metrics: {
        scale: "5M+ users",
        requests: "1B+/month",
        countries: "50+",
        satisfaction: "4.8/5"
      },
      features: [
        "Microservices architecture",
        "AI-powered recommendations",
        "Advanced reporting tools",
        "Multi-language support",
        "24/7 technical support",
        "White-label solution"
      ]
    }
  ];

  const capabilities = [
    {
      icon: ${page.icon},
      title: "Custom Development",
      description: "Tailored solutions designed specifically for your business needs and requirements"
    },
    {
      icon: ${page.icon},
      title: "API Integration",
      description: "Seamless integration with third-party services and existing systems"
    },
    {
      icon: ${page.icon},
      title: "Scalable Architecture",
      description: "Built to grow with your business, handling increased load effortlessly"
    },
    {
      icon: ${page.icon},
      title: "Security First",
      description: "Enterprise-grade security measures protecting your data and users"
    },
    {
      icon: ${page.icon},
      title: "Performance Optimization",
      description: "Optimized for speed and efficiency, delivering exceptional user experience"
    },
    {
      icon: ${page.icon},
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services"
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "TypeScript", category: "Language", icon: "🔷" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "AWS", category: "Cloud", icon: "☁️" },
    { name: "Docker", category: "DevOps", icon: "🐳" },
    { name: "Redis", category: "Cache", icon: "🔴" },
    { name: "GraphQL", category: "API", icon: "◈" },
    { name: "Kubernetes", category: "Orchestration", icon: "⚓" },
    { name: "Jest", category: "Testing", icon: "🃏" }
  ];

  return (
    <GenericPortfolioPage
      title="${page.title}"
      subtitle="${page.description}"
      category="${page.title.replace(' Portfolio', ' Showcase')}"
      stats={stats}
      projects={projects}
      capabilities={capabilities}
      technologies={technologies}
      ctaTitle="Ready to Build Your ${page.title.replace(' Portfolio', '')}?"
      ctaDescription="Let's create a custom solution that drives results and exceeds your expectations"
    />
  );
};

export default ${page.name};
`;
}

function main() {
  console.log('🚀 Starting portfolio page generation...\n');
  
  const srcDir = path.join(__dirname, '..', 'src');
  const portfolioDir = path.join(srcDir, 'pages', 'portfolio');

  // Create portfolio directory if it doesn't exist
  if (!fs.existsSync(portfolioDir)) {
    fs.mkdirSync(portfolioDir, { recursive: true });
    console.log('📁 Created portfolio directory\n');
  }

  let totalCreated = 0;

  // Generate all portfolio pages
  Object.entries(portfolioPages).forEach(([category, pages]) => {
    console.log(`📂 Generating ${category} portfolio pages...`);
    
    pages.forEach(page => {
      const filePath = path.join(portfolioDir, `${page.name}.tsx`);
      const content = generatePortfolioTemplate(page);
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✅ Created: ${page.name}.tsx`);
      totalCreated++;
    });
    
    console.log('');
  });

  console.log(`\n✨ Complete! Generated ${totalCreated} portfolio pages.`);
  console.log('\n📊 Summary by category:');
  Object.entries(portfolioPages).forEach(([category, pages]) => {
    console.log(`  ${category}: ${pages.length} pages`);
  });
}

main();
