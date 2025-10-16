"use client";

import React from 'react';
import GenericPortfolioPage from '@/components/ui/GenericPortfolioPage';
import { FileText } from 'lucide-react';
import { getHeroImage } from "@/lib/image-utils";

const PythonDevelopers = () => {
  const stats = [
    { value: "50+", label: "Ready Workflow with AI" },
    { value: "100+", label: "Happy Clients" },
    { value: "$50M+", label: "Revenue Generated" },
    { value: "4.9/5", label: "Client Satisfaction" }
  ];

  const projects = [
    {
      title: "Python Development Platform",
      client: "Tech Solutions Inc.",
      category: "Python Development",
      description: "Comprehensive Python backend solutions with advanced features and seamless user experience.",
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
      title: "Enterprise Python Development Solution",
      client: "Global Enterprises Ltd.",
      category: "Enterprise Solution",
      description: "Scalable enterprise-grade Python backend solutions serving millions of users worldwide.",
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
      icon: FileText,
      title: "Custom Development",
      description: "Tailored solutions designed specifically for your business needs and requirements"
    },
    {
      icon: FileText,
      title: "API Integration",
      description: "Seamless integration with third-party services and existing systems"
    },
    {
      icon: FileText,
      title: "Scalable Architecture",
      description: "Built to grow with your business, handling increased load effortlessly"
    },
    {
      icon: FileText,
      title: "Security First",
      description: "Enterprise-grade security measures protecting your data and users"
    },
    {
      icon: FileText,
      title: "Performance Optimization",
      description: "Optimized for speed and efficiency, delivering exceptional user experience"
    },
    {
      icon: FileText,
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
      title="Python Development Portfolio"
      subtitle="Python backend solutions"
      category="Python Development Showcase"
      stats={stats}
      projects={projects}
      capabilities={capabilities}
      technologies={technologies}
      ctaTitle="Ready to Build Your Python Development?"
      ctaDescription="Let's create a custom solution that drives results and exceeds your expectations"
    />
  );
};

export default PythonDevelopers;
