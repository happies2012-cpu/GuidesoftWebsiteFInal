"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, DollarSign, Sparkles, Zap, Brain } from "lucide-react";
import { motion, Easing } from "framer-motion";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "AI Solutions", "Digital Advisory", "Smart Finance", "Automation"];
  
  const projects = [
    {
      id: 1,
      title: "AI-Powered Tax Optimization Platform",
      category: "AI Solutions",
      client: "Fortune 500 Tech Company",
      description: "Deployed machine learning algorithms for real-time tax optimization, reducing liability by 35% through intelligent automation.",
      results: {
        savings: "$3.8M",
        efficiency: "85%",
        timeline: "4 months"
      },
      tags: ["Machine Learning", "Automation", "Cloud AI"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Smart M&A Intelligence System",
      category: "Digital Advisory",
      client: "Global SaaS Leader",
      description: "Built AI-powered due diligence platform with predictive analytics, accelerating acquisition process by 60%.",
      results: {
        valuation: "$85M",
        speed: "60%",
        timeline: "3 months"
      },
      tags: ["AI Analytics", "Predictive Models", "Smart Contracts"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Neural Network Financial Modeling",
      category: "Smart Finance",
      client: "HealthTech Innovator",
      description: "Implemented deep learning models for financial forecasting with 94% accuracy, transforming budget planning.",
      results: {
        accuracy: "94%",
        roi: "220%",
        timeline: "5 months"
      },
      tags: ["Neural Networks", "Forecasting", "Big Data"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "Automated Portfolio Management AI",
      category: "Automation",
      client: "Digital Investment Fund",
      description: "Developed autonomous trading algorithms and robo-advisory platform managing $500M+ in assets.",
      results: {
        returns: "18.3%",
        aum: "$500M+",
        timeline: "8 months"
      },
      tags: ["Algo Trading", "Robo-Advisory", "Risk AI"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Predictive Analytics Growth Engine",
      category: "Smart Finance",
      client: "E-commerce Unicorn",
      description: "Created AI-driven growth platform using predictive analytics for market expansion strategy.",
      results: {
        growth: "340%",
        markets: "28",
        timeline: "6 months"
      },
      tags: ["Predictive AI", "Market Intelligence", "Growth Hacking"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      id: 6,
      title: "Quantum-Inspired Tax Structuring",
      category: "AI Solutions",
      client: "Fintech Disruptor",
      description: "Applied quantum-inspired optimization algorithms for multi-jurisdictional tax efficiency.",
      results: {
        savings: "$12M",
        complexity: "15 jurisdictions",
        timeline: "4 months"
      },
      tags: ["Quantum Computing", "Optimization", "Multi-Cloud"],
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gradient-primary-start/5 via-gradient-primary-end/5 to-cyan-500/5 pointer-events-none" />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/10 via-gradient-primary-end/10 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-in">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Success Stories</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent animate-fade-in">
            Innovation Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Discover how we've revolutionized businesses with cutting-edge AI and intelligent automation
          </p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-16 relative"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "$1.2B+", label: "Value Generated", gradient: "from-blue-500 to-cyan-500" },
              { icon: Users, value: "250+", label: "AI Projects", gradient: "from-purple-500 to-pink-500" },
              { icon: Zap, value: "99%", label: "Success Rate", gradient: "from-emerald-500 to-teal-500" },
              { icon: DollarSign, value: "40+", label: "Industries", gradient: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" transition={{ delay: index * 0.1 }} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-8 rounded-2xl bg-background/40 backdrop-blur-xl border border-primary/20 group-hover:border-primary/50 transition-all">
                  <stat.icon className="h-8 w-8 text-primary mb-4" />
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Portfolio Filter & Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 backdrop-blur-sm transition-all ${
                  activeFilter === filter 
                    ? "bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end shadow-lg shadow-primary/50" 
                    : "border-primary/20 hover:bg-primary/10"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="group relative overflow-hidden backdrop-blur-xl bg-background/40 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsl(var(--gradient-primary-start)/0.5)] h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-gradient-primary-start/5 via-gradient-primary-end/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <CardContent className="p-6 relative z-10 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className="bg-primary/10 border-primary/30 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
                        <ExternalLink className="relative h-4 w-4 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-primary font-medium mb-3">{project.client}</p>
                    
                    <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-br from-gradient-primary-start/5 to-gradient-primary-end/5 rounded-xl backdrop-blur-sm border border-primary/10">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-semibold text-foreground">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs border-primary/30 bg-primary/5 backdrop-blur-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/20 via-gradient-primary-end/20 to-cyan-500/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-background/10 backdrop-blur-xl border border-primary/20 shadow-[0_0_60px_-15px_hsl(var(--gradient-primary-start)/0.5)]">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
              Build Your Success Story
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your business with AI-powered solutions that deliver measurable results
            </p>
            <Button size="lg" className="px-8 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
              Start Your AI Journey
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;