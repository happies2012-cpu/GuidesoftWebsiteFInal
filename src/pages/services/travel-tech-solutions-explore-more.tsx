"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, Easing } from "framer-motion";
import { Plane, Globe, Code, Hotel, Car, Ship, Lightbulb, CheckCircle, Users, Award, Calendar, ArrowRight, TrendingUp, Target, Map, Wifi, Navigation } from "lucide-react";

const TravelTechSolutionsExploreMore = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const portfolioProjects = [
    {
      title: "Global Travel Booking Platform",
      description: "Developed a comprehensive travel booking platform with real-time inventory management and multi-language support for 50+ countries.",
      result: "40% Booking Increase",
      tech: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Hotel Management System",
      description: "Created an integrated hotel management solution with PMS, channel management, and guest experience features.",
      result: "25% Operational Efficiency",
      tech: ["Angular", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Custom Travel Portal for Tour Operators",
      description: "Built a white-label travel portal with advanced search, dynamic packaging, and CRM integration for tour operators.",
      result: "60% Faster Booking Process",
      tech: ["Vue.js", "Laravel", "MySQL", "Redis"]
    }
  ];

  const faqs = [
    {
      question: "What travel technologies do you specialize in?",
      answer: "We specialize in travel booking engines, GDS integrations (Amadeus, Sabre, Galileo), hotel extranets, white-label travel portals, and custom travel solutions. We also have expertise in NDC integrations and travel API development."
    },
    {
      question: "How long does a travel technology project take?",
      answer: "Timeline varies by complexity: Simple booking engines take 3-4 months, comprehensive travel portals 6-9 months, and enterprise solutions 9-18 months. We provide detailed timelines during the discovery phase."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We offer comprehensive post-launch support including system updates, performance optimization, security monitoring, and 24/7 technical assistance to ensure your travel platform runs smoothly."
    }
  ];

  const testimonials = [
    {
      quote: "Guidesoft transformed our travel booking process with their custom portal solution. The integration with our existing systems was seamless and the results exceeded our expectations.",
      author: "Robert Chen",
      role: "CTO, Global Travel Corp"
    },
    {
      quote: "The hotel management system they developed for us has streamlined our operations significantly. Their team's understanding of the travel industry is impressive.",
      author: "Sarah Williams",
      role: "Operations Director, Luxury Resorts Group"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gradient-primary-start/5 via-gradient-primary-end/5 to-cyan-500/5 pointer-events-none" />
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z' stroke='hsl(var(--gradient-primary-start)/0.1)' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* 1. Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/10 via-gradient-primary-end/10 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Travel Tech Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
            Explore More Travel Tech
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Advanced travel technology solutions designed to optimize operations, enhance customer experiences, and drive revenue growth for travel businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
              View Portfolio
            </Button>
          </div>
        </div>
      </motion.section>

      {/* 2. Overview Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-muted/30 relative"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Advanced Travel Solutions</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                    Beyond Standard Offerings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Our travel technology solutions go beyond standard offerings to deliver innovative features that leverage the latest technologies. From AI-powered personalization to blockchain-based security, we build platforms that set you apart in the competitive travel industry.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> AI-Powered Recommendations</li>
                    <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Blockchain Security</li>
                    <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> Real-time Analytics</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Industry Expertise</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                    Deep Travel Industry Knowledge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    With years of experience in the travel industry, we understand the unique challenges and opportunities that travel businesses face. Our solutions are designed specifically for travel companies, from startups to large enterprises.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Target className="h-4 w-4 text-primary" /> 85% Client Retention</div>
                      <div className="flex items-center gap-2 text-foreground"><TrendingUp className="h-4 w-4 text-primary" /> 100+ Travel Projects</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Globe className="h-4 w-4 text-primary" /> 50+ Countries Served</div>
                      <div className="flex items-center gap-2 text-foreground"><Shield className="h-4 w-4 text-primary" /> IATA Certified</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
              Advanced Features
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Cutting-edge capabilities for next-generation travel platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Navigation, title: "AI-Powered Personalization", desc: "Deliver personalized travel experiences with machine learning algorithms that analyze user behavior and preferences." },
              { icon: Wifi, title: "Real-time Inventory Sync", desc: "Seamless integration with GDS, CRS, and third-party providers for real-time availability and pricing updates." },
              { icon: Shield, title: "Enhanced Security", desc: "Advanced encryption, PCI-DSS compliance, and fraud detection to protect customer data and transactions." },
              { icon: TrendingUp, title: "Dynamic Pricing", desc: "Implement intelligent pricing algorithms that adjust rates based on demand, seasonality, and competitor analysis." },
              { icon: Map, title: "Geolocation Services", desc: "Integrate mapping, geofencing, and location-based services to enhance the travel experience." },
              { icon: Code, title: "API-First Architecture", desc: "Build scalable, flexible platforms with API-first design for easy integration with third-party services." }
            ].map((feature, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" transition={{ delay: index * 0.1 }}>
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary">{feature.title}</h3>
                    <p className="text-foreground/90">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. Our Process Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-muted/30 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              A structured approach ensuring quality, efficiency, and client satisfaction at every step
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { icon: Lightbulb, title: "Industry Analysis", desc: "We analyze your business requirements, target market, and competitive landscape to develop a tailored solution.", step: 1 },
              { icon: Globe, title: "System Architecture", desc: "Our architects design a scalable, secure system with integration points for GDS, payment gateways, and other travel services.", step: 2 },
              { icon: Code, title: "Agile Development", desc: "We follow agile methodologies with iterative development, regular progress updates, and continuous integration.", step: 3 },
              { icon: Shield, title: "Testing & QA", desc: "Comprehensive testing including functionality, performance, security, and GDS integration validation.", step: 4 },
              { icon: TrendingUp, title: "Deployment & Support", desc: "Smooth deployment with post-launch support, monitoring, and continuous improvement.", step: 5 }
            ].map((step, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" className="flex items-center gap-8">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-foreground/90">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. Portfolio Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
              Our Travel Tech Portfolio
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Real results from real projects – see how we've helped travel businesses thrive with technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">{project.title}</h3>
                      <p className="text-foreground/90">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-primary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                        <Badge className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end">
                          {project.result}
                        </Badge>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary">
                          View Case Study <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. Blogs Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-muted/30 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
              Travel Technology Insights
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Stay ahead with our latest articles and trends in travel technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Future of Travel Booking Platforms", excerpt: "Exploring emerging technologies and trends that are shaping the future of travel technology.", date: "April 18, 2024" },
              { title: "How to Choose the Right GDS Integration", excerpt: "A comprehensive guide to selecting and implementing GDS solutions for your travel business.", date: "April 15, 2024" },
              { title: "Travel Platform Security Best Practices", excerpt: "Essential security measures every travel business should implement to protect customer data.", date: "April 12, 2024" }
            ].map((blog, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground/80">{blog.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary line-clamp-2">{blog.title}</h3>
                    <p className="text-sm text-foreground/90 line-clamp-3">{blog.excerpt}</p>
                    <Button variant="ghost" size="sm" className="mt-4 group-hover:text-primary p-0 h-auto">
                      Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90">
                Explore All Blogs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 7. Details Block */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* FAQs */}
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-primary/20">
                    <AccordionTrigger className="text-left hover:no-underline h-auto p-4 text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="p-4 pt-0 text-foreground/90">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Stats */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                Our Travel Tech Stats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Globe, number: "100+", label: "Travel Projects" },
                  { icon: Users, number: "65+", label: "Satisfied Clients" },
                  { icon: Award, number: "85%", label: "Client Retention" }
                ].map((stat, index) => (
                  <motion.div key={index} variants={cardVariants} className="text-center p-6 bg-background/40 rounded-lg border border-primary/20">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                    <p className="text-foreground/90">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                What Our Clients Say
              </h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div key={index} variants={cardVariants} className="p-6 bg-background/40 rounded-lg border border-primary/20 italic">
                    <p className="text-foreground/90 mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-primary">{testimonial.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-primary text-primary-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/20 via-gradient-primary-end/20 to-cyan-500/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Travel Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's create a powerful, scalable travel technology solution that drives growth and enhances customer experiences.</p>
          <Link to="/contact">
            <Button size="lg" className="px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default TravelTechSolutionsExploreMore;