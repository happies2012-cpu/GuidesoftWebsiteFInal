"use client";

import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Easing } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Award, Calendar, CheckCircle, Target, Lightbulb } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const CaseStudies: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const caseStudies = [
    {
      title: "Digital Transformation for Global Retailer",
      industry: "E-commerce",
      challenge: "Legacy systems unable to handle peak traffic during sales events",
      solution: "Implemented microservices architecture with cloud-native scalability",
      result: "99.99% uptime during peak periods, 40% reduction in infrastructure costs",
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "On-Demand Food Delivery Platform",
      industry: "Food & Beverage",
      challenge: "Need for a scalable delivery platform to compete with established players",
      solution: "Built end-to-end delivery platform with real-time tracking and analytics",
      result: "2M+ users in first year, 150K+ daily orders during peak times",
      technologies: ["React Native", "Flutter", "Firebase", "Stripe", "Google Maps API"]
    },
    {
      title: "Enterprise Travel Management System",
      industry: "Travel & Hospitality",
      challenge: "Fragmented booking processes and lack of travel policy enforcement",
      solution: "Developed integrated B2B travel portal with policy engine and analytics",
      result: "35% reduction in travel costs, 100% policy compliance across 5000+ employees",
      technologies: ["Angular", "Python", "PostgreSQL", "Amadeus API", "SAP Integration"]
    }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <PageHero
        title="Case Studies"
        subtitle="Real-world success stories showcasing our expertise and results"
        cards={[
          { title: "Digital Transformation", description: "Modernizing legacy systems for scalability", href: "#" },
          { title: "On-Demand Solutions", description: "Building scalable delivery platforms", href: "#" },
          { title: "Enterprise Travel", description: "Streamlining corporate travel management", href: "#" }
        ]}
        relatedTitle="Explore Our Expertise"
        relatedItems={[
          { title: "Services", href: "/services" },
          { title: "Solutions", href: "/solutions" },
          { title: "Portfolio", href: "/portfolio" }
        ]}
      />

      {/* Case Studies Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Proven Success Stories
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses across industries overcome challenges and achieve remarkable results through innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Performance Impact</h3>
              </div>
              <p className="text-foreground/90">
                Our solutions consistently deliver measurable improvements in performance, efficiency, and user satisfaction.
              </p>
            </Card>
            
            <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Client Success</h3>
              </div>
              <p className="text-foreground/90">
                We maintain a 98% client retention rate by consistently exceeding expectations and delivering value.
              </p>
            </Card>
            
            <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Industry Recognition</h3>
              </div>
              <p className="text-foreground/90">
                Our work has been recognized with multiple industry awards for innovation and excellence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              In-Depth Case Studies
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Explore detailed insights into our most impactful projects
            </p>
          </div>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants} 
                whileHover="hover"
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 0 ? '' : 'lg:order-last'}>
                  <Badge className="mb-4 bg-primary/10 border-primary/30">{study.industry}</Badge>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Challenge
                      </h4>
                      <p className="text-foreground/90">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        Solution
                      </h4>
                      <p className="text-foreground/90">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Results
                      </h4>
                      <p className="text-foreground/90 font-medium">{study.result}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-primary/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-primary/20 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2 text-foreground">Project Impact</h4>
                    <p className="text-foreground/90 mb-6">Key metrics from this implementation</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background/40 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary">98%</div>
                        <div className="text-sm text-foreground/80">Client Satisfaction</div>
                      </div>
                      <div className="bg-background/40 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary">40%</div>
                        <div className="text-sm text-foreground/80">Cost Reduction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us to transform your business challenges into opportunities for growth.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8 bg-white text-blue-600 hover:bg-white/90 shadow-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default CaseStudies;