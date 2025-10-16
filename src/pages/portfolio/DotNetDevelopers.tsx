"use client";

import React from 'react';
import GenericPortfolioPage from '@/components/ui/GenericPortfolioPage';
import { Box } from 'lucide-react';
import { getHeroImage } from "@/lib/image-utils";

const DotNetDevelopers = () => {
  const stats = [
    { value: "50+", label: "Ready Workflow with AI" },
    { value: "100+", label: "Happy Clients" },
    { value: "$50M+", label: "Revenue Generated" },
    { value: "4.9/5", label: "Client Satisfaction" }
  ];

  const projects = [
    {
      title: ".NET Development Platform",
      client: "Tech Solutions Inc.",
      category: ".NET Development",
      description: "Comprehensive Microsoft .NET solutions with advanced features and seamless user experience.",
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
      title: "Enterprise .NET Development Solution",
      client: "Global Enterprises Ltd.",
      category: "Enterprise Solution",
      description: "Scalable enterprise-grade Microsoft .NET solutions serving millions of users worldwide.",
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
      icon: Box,
      title: "Custom Development",
      description: "Tailored solutions designed specifically for your business needs and requirements"
    },
    {
      icon: Box,
      title: "API Integration",
      description: "Seamless integration with third-party services and existing systems"
    },
    {
      icon: Box,
      title: "Scalable Architecture",
      description: "Built to grow with your business, handling increased load effortlessly"
    },
    {
      icon: Box,
      title: "Security First",
      description: "Enterprise-grade security measures protecting your data and users"
    },
    {
      icon: Box,
      title: "Performance Optimization",
      description: "Optimized for speed and efficiency, delivering exceptional user experience"
    },
    {
      icon: Box,
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
      title=".NET Development Portfolio"
      subtitle="Microsoft .NET solutions"
      category=".NET Development Showcase"
      stats={stats}
      projects={projects}
      capabilities={capabilities}
      technologies={technologies}
      ctaTitle="Ready to Build Your .NET Development?"
      ctaDescription="Let's create a custom solution that drives results and exceeds your expectations"
    />
  );
};

export default DotNetDevelopers;
