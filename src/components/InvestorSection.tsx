"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, Easing } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IntegrationHero from "@/components/ui/integration-hero";
import {
  Brain,
  Code,
  Zap,
  Layers,
  Globe,
  Database,
  Smartphone,
  Settings,
  Users,
  TrendingUp,
  Lightbulb,
  Activity,
  BarChart3,
  FileText,
  Shield,
  Star,
  ArrowRight,
  DollarSign,
  Target,
  Award
} from 'lucide-react';

const icons = [
  Brain,
  Code,
  Zap,
  Layers,
  Globe,
  Database,
  Smartphone,
  Settings,
  Users,
  TrendingUp,
  Lightbulb,
  Activity,
  BarChart3,
  FileText,
  Shield,
  Star,
];

const investors = [
  {
    name: "TechVentures Capital",
    logo: "https://techicons.dev/icons/react",
    investment: "$2.5M",
    round: "Series A",
    description: "Leading VC firm specializing in AI and enterprise software investments."
  },
  {
    name: "Innovate Partners",
    logo: "https://techicons.dev/icons/typescript",
    investment: "$1.8M",
    round: "Seed Round",
    description: "Early-stage investor focused on disruptive technology startups."
  },
  {
    name: "Global Growth Fund",
    logo: "https://techicons.dev/icons/nodejs",
    investment: "$3.2M",
    round: "Series B",
    description: "International fund backing high-growth tech companies worldwide."
  },
  {
    name: "AI Future Investments",
    logo: "https://techicons.dev/icons/python",
    investment: "$1.5M",
    round: "Pre-Seed",
    description: "Specialized fund for artificial intelligence and machine learning ventures."
  }
];

const fundingRounds = [
  { round: "Pre-Seed", amount: "$500K", date: "2022", investors: 3 },
  { round: "Seed", amount: "$2M", date: "2023", investors: 5 },
  { round: "Series A", amount: "$5M", date: "2024", investors: 8 }
];

const testimonials = [
  {
    quote: "Guidesoft's innovative approach to AI-driven development caught our attention immediately. Their potential in the enterprise space is enormous.",
    author: "Sarah Chen",
    role: "Partner, TechVentures Capital"
  },
  {
    quote: "The team's expertise in multi-domain solutions and their scalable platform architecture made this an easy investment decision.",
    author: "Michael Rodriguez",
    role: "Managing Director, Innovate Partners"
  }
];

const InvestorSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const leftToRightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const rightToLeftVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Looking for Investors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            For feature enhancement of our products in multi-domains: LLMs, Workflow Apps, AI Tools, and more. Join us in revolutionizing IT solutions.
          </p>
        </motion.div>

        {/* Investors Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Our Investors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investors.map((investor, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-card/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-background/80 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                      <img src={investor.logo} alt={investor.name} className="w-10 h-10 object-contain" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{investor.name}</h4>
                    <Badge className="mb-2 bg-primary/10 border-primary/30">{investor.round}</Badge>
                    <p className="text-2xl font-bold text-primary mb-2">{investor.investment}</p>
                    <p className="text-sm text-muted-foreground">{investor.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Funding Rounds */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Funding Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundingRounds.map((round, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-card/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">{round.round}</h4>
                    <p className="text-3xl font-bold text-primary mb-2">{round.amount}</p>
                    <p className="text-sm text-muted-foreground mb-2">{round.date}</p>
                    <Badge variant="outline" className="border-primary/30">{round.investors} Investors</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, number: "$8.7M", label: "Total Funding Raised" },
              { icon: Users, number: "16", label: "Active Investors" },
              { icon: TrendingUp, number: "300%", label: "Year-over-Year Growth" }
            ].map((stat, index) => (
              <motion.div key={index} variants={cardVariants} className="text-center p-6 bg-card/40 rounded-lg border border-primary/20">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Investor Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={cardVariants} className="p-6 bg-card/40 rounded-lg border border-primary/20 italic">
                <p className="text-foreground mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Technology Focus Areas with IntegrationHero */}
        <IntegrationHero />

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center"
        >
          <Link to="/contact">
            <Button size="lg" className="px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity shadow-lg">
              Become an Investor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorSection;
