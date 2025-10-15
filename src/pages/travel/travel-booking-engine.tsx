"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, Easing } from "framer-motion";
import { Plane, Hotel, Car, MapPin, Calendar, CheckCircle, Users, Award, ArrowRight, Lightbulb, Shield, TrendingUp, Target, Layout, Code2, TestTube2, UploadCloud, Cloud, Rocket } from "lucide-react";

const TravelBookingEngine = () => {
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
      title: "Global Flight Booking Platform",
      description: "Developed a comprehensive flight booking engine integrated with GDS systems, supporting real-time pricing and multi-city itineraries.",
      result: "500K+ Bookings",
      tech: ["React", "Node.js", "Amadeus API"]
    },
    {
      title: "Hotel Reservation System",
      description: "Built a scalable hotel booking engine with advanced search filters, dynamic pricing, and seamless payment integration.",
      result: "95% Booking Success",
      tech: ["Vue.js", "MongoDB", "Stripe"]
    },
    {
      title: "Car Rental Marketplace",
      description: "Created a car rental booking platform connecting users with global providers, featuring GPS integration and instant confirmations.",
      result: "200K+ Rentals",
      tech: ["Angular", "PostgreSQL", "Google Maps API"]
    }
  ];

  const faqs = [
    {
      question: "What is a Travel Booking Engine?",
      answer: "A travel booking engine is a software platform that enables users to search, compare, and book travel services like flights, hotels, cars, and activities directly through your website or app. It integrates with global distribution systems (GDS) and APIs for real-time availability and pricing."
    },
    {
      question: "How long does it take to develop a custom travel booking engine?",
      answer: "Development timelines vary based on features and integrations. A basic engine might take 3-6 months, while a full-featured system with multi-GDS support can take 6-12 months. We provide detailed estimates after requirements gathering."
    },
    {
      question: "Do you support multiple GDS and API integrations?",
      answer: "Yes, we integrate with major GDS like Amadeus, Sabre, Galileo, and APIs from Expedia, Booking.com, and more. Our engines support XML/JSON formats for seamless connectivity and real-time data exchange."
    }
  ];

  const testimonials = [
    {
      quote: "Guidesoft's travel booking engine transformed our website into a complete booking platform. The integration with multiple GDS was flawless and bookings increased by 40%.",
      author: "Sarah Johnson",
      role: "CEO, Wanderlust Travels"
    },
    {
      quote: "Their expertise in travel tech helped us launch a robust hotel and flight booking system that handles peak loads effortlessly. Highly recommended!",
      author: "Michael Chen",
      role: "CTO, Global Journeys"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 pointer-events-none" />
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-indigo-100/20 to-purple-100/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8">
            <Plane className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Travel Booking Engine</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Travel Booking Engine
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Power your travel business with a robust booking engine that connects customers to flights, hotels, cars, and more with real-time availability and seamless payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-opacity shadow-lg">
                Build Your Booking Engine
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
              Explore Features
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
                  <Badge className="bg-primary/10 border-primary/30 w-fit">What is a Travel Booking Engine?</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Seamless Travel Reservations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    A travel booking engine is the core technology that powers online travel agencies (OTAs), tour operators, and travel portals. It enables real-time search, comparison, and booking of travel products while integrating with global distribution systems (GDS), suppliers, and payment gateways.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Real-time inventory and pricing</li>
                    <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Secure payment processing</li>
                    <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> Multi-currency and multi-language support</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Why Choose Guidesoft?</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Empower Your Travel Business
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Our booking engines are designed to scale with your business, providing a competitive edge through advanced features, reliable integrations, and exceptional performance. Whether you're a startup OTA or an established travel agency, we deliver solutions that drive bookings and revenue.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Target className="h-4 w-4 text-primary" /> 99.9% Uptime Guarantee</div>
                      <div className="flex items-center gap-2 text-foreground"><TrendingUp className="h-4 w-4 text-primary" /> 40% Increase in Conversion Rates</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Users className="h-4 w-4 text-primary" /> B2B & B2C Solutions</div>
                      <div className="flex items-center gap-2 text-foreground"><Lightbulb className="h-4 w-4 text-primary" /> Custom API Integrations</div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Core Features of Our Booking Engine
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Comprehensive functionality to handle all aspects of travel bookings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Plane, title: "Flight Booking", desc: "Advanced flight search with multi-city, flexible dates, and low-fare calendar. Integration with major GDS like Amadeus, Sabre, and Galileo." },
              { icon: Hotel, title: "Hotel Reservations", desc: "Real-time hotel availability, room type filters, and dynamic pricing. Supports XML/JSON APIs from Booking.com, Expedia, and hotel chains." },
              { icon: Car, title: "Car Rental", desc: "Vehicle search by location, dates, and category. Integration with rental providers and GPS mapping for pickup/drop-off points." },
              { icon: MapPin, title: "Activities & Transfers", desc: "Excursions, tours, and airport transfers booking. Partnerships with local operators and activity aggregators." },
              { icon: Calendar, title: "Package Tours", desc: "Customizable travel packages combining flights, hotels, and activities. Dynamic bundling for personalized itineraries." },
              { icon: Cloud, title: "API & GDS Integration", desc: "Seamless connectivity with global distribution systems, supplier APIs, and third-party services for comprehensive travel inventory." }
            ].map((feature, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" transition={{ delay: index * 0.1 }}>
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Development Process for Booking Engines
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              From concept to launch, our proven methodology ensures a reliable and feature-rich travel booking solution
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { icon: Lightbulb, title: "Requirements & Planning", desc: "Gathering business requirements, defining features, selecting GDS/API integrations, and creating technical architecture.", step: 1 },
              { icon: Layout, title: "UI/UX Design", desc: "Designing intuitive search interfaces, booking flows, and admin dashboards with user-centric travel booking experiences.", step: 2 },
              { icon: Code2, title: "Core Development", desc: "Building the backend with API integrations, real-time search engines, and secure payment gateways using agile methodologies.", step: 3 },
              { icon: TestTube2, title: "Integration & Testing", desc: "Rigorous testing of GDS connectivity, load testing for peak seasons, and end-to-end booking flow validation.", step: 4 },
              { icon: UploadCloud, title: "Deployment & Launch", desc: "Cloud deployment, app store submission, and go-live support with monitoring and optimization for live traffic.", step: 5 }
            ].map((step, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" className="flex items-center gap-8">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
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
