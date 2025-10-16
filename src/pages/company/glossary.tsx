"use client";

import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Easing } from "framer-motion";
import { ArrowRight, BookOpen, Lightbulb, Target, Zap, Shield, TrendingUp, Users, Code2, Cloud } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const Glossary: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const glossaryTerms = [
    {
      term: "API (Application Programming Interface)",
      definition: "A set of protocols and tools that allows different software applications to communicate with each other, enabling data exchange and functionality integration.",
      category: "Development",
      icon: Code2
    },
    {
      term: "Cloud Computing",
      definition: "The delivery of computing services—including servers, storage, databases, networking, software—over the internet (the cloud) rather than through on-premises hardware and software.",
      category: "Infrastructure",
      icon: Cloud
    },
    {
      term: "DevOps",
      definition: "A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide continuous delivery with high software quality.",
      category: "Methodology",
      icon: Zap
    },
    {
      term: "Microservices",
      definition: "An architectural approach where a single application is built as a suite of small, independently deployable services that communicate through well-defined APIs.",
      category: "Architecture",
      icon: Target
    },
    {
      term: "UI/UX Design",
      definition: "UI (User Interface) focuses on the visual elements and interactive components of a product, while UX (User Experience) encompasses the overall experience and satisfaction of a user when interacting with the product.",
      category: "Design",
      icon: Lightbulb
    },
    {
      term: "Agile Methodology",
      definition: "A project management approach that emphasizes iterative development, collaboration, and flexibility, allowing teams to respond quickly to changes and deliver value incrementally.",
      category: "Methodology",
      icon: TrendingUp
    },
    {
      term: "MVP (Minimum Viable Product)",
      definition: "A version of a product with just enough features to satisfy early customers and provide feedback for future product development.",
      category: "Product Development",
      icon: BookOpen
    },
    {
      term: "CI/CD (Continuous Integration/Continuous Deployment)",
      definition: "CI/CD automates the process of integrating code changes and deploying applications, ensuring faster and more reliable software releases.",
      category: "Development",
      icon: Shield
    }
  ];

  const categories = [
    { name: "Development", count: 3, icon: Code2 },
    { name: "Infrastructure", count: 2, icon: Cloud },
    { name: "Methodology", count: 2, icon: Zap },
    { name: "Architecture", count: 1, icon: Target },
    { name: "Design", count: 1, icon: Lightbulb },
    { name: "Product Development", count: 1, icon: BookOpen }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <PageHero
        title="Technology Glossary"
        subtitle="Understanding the terminology that drives modern technology solutions"
        cards={[
          { title: "Development Terms", description: "Key concepts in software development", href: "#" },
          { title: "Infrastructure", description: "Cloud and system architecture terms", href: "#" },
          { title: "Methodologies", description: "Project management and development approaches", href: "#" }
        ]}
        relatedTitle="Explore Our Expertise"
        relatedItems={[
          { title: "Services", href: "/services" },
          { title: "Solutions", href: "/solutions" },
          { title: "Blog", href: "/blog" }
        ]}
      />

      {/* Glossary Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Demystifying Technology Terms
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Navigate the complex world of technology with our comprehensive glossary of industry terms and concepts. Whether you're a business leader or technology enthusiast, we break down complex terminology into understandable concepts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                    </div>
                    <p className="text-foreground/90">
                      <span className="font-medium">{category.count}</span> terms
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Technology Glossary
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Essential terms and definitions for understanding modern technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {glossaryTerms.map((term, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                        <term.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground">{term.term}</CardTitle>
                        <Badge className="mt-1 bg-primary/10 border-primary/30">{term.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">{term.definition}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-foreground/80 mb-6">
              Need clarification on a specific term or concept not listed here?
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90">
                Contact Our Experts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Deepen Your Technology Knowledge</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our blog for in-depth articles on emerging technologies and industry trends.
          </p>
          <Link to="/blog">
            <Button size="lg" className="px-8 bg-white text-blue-600 hover:bg-white/90 shadow-lg">
              Visit Our Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Glossary;