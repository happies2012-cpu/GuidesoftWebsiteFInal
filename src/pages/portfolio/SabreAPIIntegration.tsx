"use client";

import React from 'react';
import GenericPortfolioPage from '@/components/ui/GenericPortfolioPage';
import { Network } from 'lucide-react';
import { getHeroImage } from "@/lib/image-utils";

const SabreAPIIntegration = () => {
  const stats = [
    { value: "50+", label: "Ready Workflow with AI" },
    { value: "100+", label: "Happy Clients" },
    { value: "$50M+", label: "Revenue Generated" },
    { value: "4.9/5", label: "Client Satisfaction" }
  ];

  const projects = [
    {
      title: "Sabre API Integration Platform",
      client: "Tech Solutions Inc.",
      category: "Sabre API Integration",
      description: "Comprehensive Sabre GDS integration with advanced features and seamless user experience.",
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
      title: "Enterprise Sabre API Integration Solution",
      client: "Global Enterprises Ltd.",
      category: "Enterprise Solution",
      description: "Scalable enterprise-grade Sabre GDS integration serving millions of users worldwide.",
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
      icon: Network,
      title: "Custom Development",
      description: "Tailored solutions designed specifically for your business needs and requirements"
    },
    {
      icon: Network,
      title: "API Integration",
      description: "Seamless integration with third-party services and existing systems"
    },
    {
      icon: Network,
      title: "Scalable Architecture",
      description: "Built to grow with your business, handling increased load effortlessly"
    },
    {
      icon: Network,
      title: "Security First",
      description: "Enterprise-grade security measures protecting your data and users"
    },
    {
      icon: Network,
      title: "Performance Optimization",
      description: "Optimized for speed and efficiency, delivering exceptional user experience"
    },
    {
      icon: Network,
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
      title="Sabre API Integration Portfolio"
      subtitle="Sabre GDS integration"
      category="Sabre API Integration Showcase"
      stats={stats}
      projects={projects}
      capabilities={capabilities}
      technologies={technologies}
      ctaTitle="Ready to Build Your Sabre API Integration?"
      ctaDescription="Let's create a custom solution that drives results and exceeds your expectations"
    />
  );
};

export default SabreAPIIntegration;
