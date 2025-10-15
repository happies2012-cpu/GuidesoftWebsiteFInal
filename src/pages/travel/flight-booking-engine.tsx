"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, Easing } from "framer-motion";
import { Plane, MapPin, Calendar, CheckCircle, Users, Award, ArrowRight, Lightbulb, Shield, TrendingUp, Target, Layout, Code2, TestTube2, UploadCloud, Cloud, Rocket } from "lucide-react";

const FlightBookingEngine = () => {
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
      title: "Global Flight Search & Booking Platform",
      description: "Developed a comprehensive flight booking engine aggregating data from 800+ airlines, featuring advanced search filters, fare comparison, and seamless booking flows.",
      result: "5M+ Bookings",
      tech: ["React", "Node.js", "Amadeus API"]
    },
    {
      title: "Corporate Travel Management System",
      description: "Built a B2B flight booking platform for corporations, including approval workflows, expense tracking, and preferred airline partnerships.",
      result: "40% Cost Savings",
      tech: ["Vue.js", "MongoDB", "Sabre API"]
    },
    {
      title: "Low-Cost Carrier Booking Portal",
      description: "Created a specialized booking engine for budget airlines, with dynamic pricing, ancillary services, and mobile-optimized booking for price-sensitive travelers.",
      result: "90% Mobile Conversion",
      tech: ["Angular", "PostgreSQL", "Custom API"]
    }
  ];

  const faqs = [
    {
      question: "What is a Flight Booking Engine?",
      answer: "A flight booking engine is a sophisticated platform that searches, compares, and books airline tickets from multiple carriers. It integrates with Global Distribution Systems (GDS), airline APIs, and payment processors to provide real-time pricing, availability, and instant confirmations."
    },
    {
      question: "How does it handle complex fare rules and availability?",
      answer: "Our engines parse complex fare rules, manage seat inventory, and handle dynamic pricing. They support multi-passenger bookings, special requests (meals, seating), and integrate with loyalty programs for personalized pricing."
    },
    {
      question: "What integrations are crucial for flight booking systems?",
      answer: "Essential integrations include GDS (Amadeus, Sabre, Travelport), airline APIs (direct connects), payment gateways, and ancillary services. We also integrate with travel insurance, hotels, and car rentals for complete trip packages."
    }
  ];

  const testimonials = [
    {
      quote: "Guidesoft's flight booking engine has revolutionized our travel agency operations. We've increased bookings by 60% and our clients love the comprehensive search options.",
      author: "Sarah Johnson",
      role: "CEO, Global Travel Solutions"
    },
    {
      quote: "The advanced features for corporate travel management, including duty of care and compliance tracking, have made us the preferred partner for enterprise clients.",
      author: "Michael Rodriguez",
      role: "VP Corporate Travel, TechCorp"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-sky-50/50 via-blue-50/50 to-indigo-50/50 pointer-events-none" />
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(30 30)'%3E%3Ccircle cx='0' cy='0' r='1' fill='hsl(var(--primary)/0.1)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/20 via-blue-100/20 to-indigo-100/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8">
            <Plane className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Flight Booking Engine</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Flight Booking Engine
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Power your travel business with a cutting-edge flight booking engine that searches thousands of airlines, compares fares in real-time, and delivers seamless booking experiences worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 bg-gradient-to-r from-sky-600 to-blue-600 hover:opacity-90 transition-opacity shadow-lg">
                Launch Your Flight Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
              Explore Capabilities
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
                  <Badge className="bg-primary/10 border-primary/30 w-fit">What is a Flight Booking Engine?</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                    Global Air Travel Technology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    A flight booking engine is the technological backbone of modern travel agencies and airlines, enabling comprehensive flight searches across global airlines. It handles complex fare structures, seat availability, and booking processes while providing real-time pricing and instant confirmations.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Real-time fare comparison</li>
                    <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Secure payment processing</li>
                    <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> Advanced search algorithms</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Competitive Advantage</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                    Dominate the Travel Market
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    In a crowded market, a superior flight booking engine can be your differentiator. It provides faster search results, better pricing visibility, and seamless user experiences that convert browsers into bookers and build customer loyalty.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Target className="h-4 w-4 text-primary" /> 30% Higher Conversion Rates</div>
                      <div className="flex items-center gap-2 text-foreground"><TrendingUp className="h-4 w-4 text-primary" /> Real-Time Price Tracking</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Users className="h-4 w-4 text-primary" /> Multi-Passenger Support</div>
                      <div className="flex items-center gap-2 text-foreground"><Lightbulb className="h-4 w-4 text-primary" /> Ancillary Revenue Streams</div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Advanced Features for Flight Booking
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Comprehensive functionality for modern air travel booking
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Plane, title: "Global Flight Search", desc: "Search across 800+ airlines with advanced filters for airlines, aircraft type, flight duration, and connection preferences. Support for one-way, round-trip, and multi-city searches." },
              { icon: MapPin, title: "Fare Comparison & Tracking", desc: "Real-time price comparison with fare tracking alerts. Historical price analysis and price prediction to help travelers find the best deals." },
              { icon: Calendar, title: "Flexible Booking Management", desc: "Easy modifications, cancellations, and rebooking. Support for group bookings, special assistance requests, and corporate travel policies." },
              { icon: Shield, title: "Secure Payment & Compliance", desc: "PCI-DSS compliant payment processing with multiple gateways. Automated fare rules application and regulatory compliance for international travel." },
              { icon: Cloud, title: "GDS & Airline Integration", desc: "Direct connections to Amadeus, Sabre, and Travelport GDS. Real-time inventory sync and automated PNR creation with airline systems." },
              { icon: TrendingUp, title: "Analytics & Revenue Optimization", desc: "Detailed booking analytics, conversion tracking, and revenue management tools. Integration with loyalty programs and frequent flyer systems." }
            ].map((feature, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" transition={{ delay: index * 0.1 }}>
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Flight Booking Engine Development Process
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Building reliable and scalable aviation booking solutions
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { icon: Lightbulb, title: "Requirements & Architecture", desc: "Analyzing business needs, target markets, and technical requirements. Designing scalable architecture for high-volume flight searches and bookings.", step: 1 },
              { icon: Layout, title: "UI/UX Design & Prototyping", desc: "Creating intuitive search interfaces, booking flows, and mobile experiences. Designing for complex scenarios like multi-passenger and international travel.", step: 2 },
              { icon: Code2, title: "Core Engine Development", desc: "Building search algorithms, fare parsing, and booking logic. Implementing GDS integrations and payment processing with high reliability.", step: 3 },
              { icon: TestTube2, title: "Integration & Testing", desc: "Testing API connections, booking accuracy, and performance. Load testing for peak travel seasons and ensuring compliance with airline systems.", step: 4 },
              { icon: UploadCloud, title: "Deployment & Monitoring", desc: "Cloud deployment with auto-scaling, real-time monitoring, and 24/7 support. Continuous optimization based on booking patterns and user feedback.", step: 5 }
            ].map((step, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" className="flex items-center gap-8">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-sky-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Successful Flight Booking Implementations
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Powering travel businesses with advanced aviation technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary">{project.title}</h3>
                      <p className="text-foreground/90">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-primary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                        <Badge className="bg-gradient-to-r from-sky-600 to-blue-600">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Aviation Technology Insights
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Latest trends in flight booking and air travel technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "NDC and the Future of Airline Distribution", excerpt: "How New Distribution Capability is transforming direct airline bookings and reshaping the travel industry.", date: "July 30, 2024" },
              { title: "AI-Powered Fare Prediction and Optimization", excerpt: "Using machine learning to predict price changes and optimize booking timing for maximum savings.", date: "July 27, 2024" },
              { title: "Mobile-First Flight Booking Experiences", excerpt: "Designing booking engines specifically for mobile users and the challenges of complex search on small screens.", date: "July 24, 2024" }
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
              <Button size="lg" className="bg-gradient-to-r from-sky-600 to-blue-600 hover:opacity-90">
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
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
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
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Our Flight Booking Stats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Plane, number: "800+", label: "Airlines Connected" },
                  { icon: Users, number: "10M+", label: "Tickets Booked" },
                  { icon: Award, number: "99.9%", label: "System Uptime" }
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
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                What Our Aviation Partners Say
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 via-blue-600/20 to-indigo-600/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Take Off with Advanced Flight Booking?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Launch a world-class flight booking engine that connects travelers with the best fares and delivers exceptional booking experiences globally.</p>
          <Link to="/contact">
            <Button size="lg" className="px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
              Start Your Aviation Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default FlightBookingEngine;
