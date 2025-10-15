"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, Easing } from "framer-motion";
import { Home, MapPin, Calendar, CheckCircle, Users, Award, ArrowRight, Lightbulb, Shield, TrendingUp, Target, Layout, Code2, TestTube2, UploadCloud, Cloud, Rocket } from "lucide-react";

const VacationRentalManagementSystem = () => {
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
      title: "Global Vacation Rental Marketplace",
      description: "Developed a comprehensive vacation rental platform connecting property owners with travelers worldwide, featuring advanced search, booking management, and automated pricing.",
      result: "50K+ Properties Listed",
      tech: ["React", "Node.js", "Airbnb API"]
    },
    {
      title: "Property Management System for Hosts",
      description: "Built a full-featured PMS for vacation rental hosts, including calendar sync, pricing optimization, and guest communication tools.",
      result: "95% Occupancy Increase",
      tech: ["Vue.js", "MongoDB", "Booking.com API"]
    },
    {
      title: "Regional Vacation Rental Network",
      description: "Created a localized platform for a specific region, integrating with local tourism boards and offering unique properties not available on global sites.",
      result: "30% Higher Revenue",
      tech: ["Angular", "PostgreSQL", "Custom API"]
    }
  ];

  const faqs = [
    {
      question: "What is a Vacation Rental Management System?",
      answer: "A vacation rental management system is a comprehensive platform that handles property listings, booking management, pricing optimization, and guest services for short-term rental businesses. It integrates with major OTAs while providing direct booking capabilities and automated operations."
    },
    {
      question: "How does it handle multi-channel distribution?",
      answer: "Our systems integrate with major platforms (Airbnb, VRBO, Booking.com) through APIs, synchronizing calendars, rates, and availability in real-time. This prevents double-bookings and maximizes revenue across all channels."
    },
    {
      question: "What features are essential for property managers?",
      answer: "Key features include dynamic pricing algorithms, automated guest communication, maintenance request handling, financial reporting, and analytics for occupancy optimization and revenue forecasting."
    }
  ];

  const testimonials = [
    {
      quote: "Guidesoft's vacation rental system has transformed our property management business. We've increased revenue by 40% and reduced administrative work significantly.",
      author: "Jennifer Martinez",
      role: "CEO, Coastal Properties"
    },
    {
      quote: "The automated pricing and channel management features have made it possible for us to scale from 10 to 100+ properties without adding staff.",
      author: "David Chen",
      role: "Operations Manager, Mountain Retreats"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-50/50 via-teal-50/50 to-cyan-50/50 pointer-events-none" />
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 via-teal-100/20 to-cyan-100/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8">
            <Home className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Vacation Rental Management System</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Vacation Rental Management System
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Streamline your vacation rental business with a comprehensive management system that handles bookings, pricing, and operations across all channels for maximum revenue and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 transition-opacity shadow-lg">
                Build Your Rental Platform
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
                  <Badge className="bg-primary/10 border-primary/30 w-fit">What is a Vacation Rental Management System?</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Complete Property Operations Platform
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    A vacation rental management system is an all-in-one solution for property owners and managers to handle listings, bookings, pricing, and guest services. It integrates with major booking platforms while providing direct booking capabilities and automated business operations.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Multi-channel distribution</li>
                    <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Automated pricing optimization</li>
                    <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> Revenue management tools</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Business Impact</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Maximize Rental Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Modern management systems enable property managers to optimize pricing, reduce vacancies, and scale operations. By automating routine tasks and providing data-driven insights, they significantly increase profitability and operational efficiency.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Target className="h-4 w-4 text-primary" /> 25-35% Revenue Increase</div>
                      <div className="flex items-center gap-2 text-foreground"><TrendingUp className="h-4 w-4 text-primary" /> Reduced Operational Costs</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Users className="h-4 w-4 text-primary" /> Scalable Property Management</div>
                      <div className="flex items-center gap-2 text-foreground"><Lightbulb className="h-4 w-4 text-primary" /> Data-Driven Decisions</div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Essential Features for Rental Management
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Comprehensive tools for managing vacation rental properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Property Listings & Management", desc: "Create detailed property profiles with photos, amenities, and policies. Manage multiple properties with centralized dashboards and automated updates." },
              { icon: MapPin, title: "Channel Integration", desc: "Sync calendars, rates, and availability with Airbnb, VRBO, Booking.com, and other platforms. Prevent double-bookings and maximize distribution." },
              { icon: Calendar, title: "Booking & Reservation Management", desc: "Handle inquiries, confirmations, modifications, and cancellations. Automated guest communication and check-in/check-out processes." },
              { icon: Shield, title: "Dynamic Pricing & Revenue Management", desc: "AI-powered pricing optimization based on demand, seasonality, and competitor rates. Minimum stay rules and yield management." },
              { icon: Cloud, title: "Guest Services & Communication", desc: "Automated welcome messages, maintenance request handling, and review management. Integrated messaging and document sharing." },
              { icon: TrendingUp, title: "Analytics & Reporting", desc: "Comprehensive financial reports, occupancy analytics, and performance metrics. Forecasting tools for revenue planning and budgeting." }
            ].map((feature, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" transition={{ delay: index * 0.1 }}>
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Vacation Rental System Development Process
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Building scalable solutions for the vacation rental industry
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { icon: Lightbulb, title: "Business Analysis & Strategy", desc: "Understanding your property portfolio, target markets, and operational needs to design a system that scales with your business.", step: 1 },
              { icon: Layout, title: "Platform Design & Architecture", desc: "Creating user-friendly interfaces for hosts and guests, with robust backend architecture for multi-channel integration and data management.", step: 2 },
              { icon: Code2, title: "Core Development & Integration", desc: "Building the platform with API integrations, automated workflows, and advanced features like dynamic pricing and analytics.", step: 3 },
              { icon: TestTube2, title: "Testing & Quality Assurance", desc: "Rigorous testing of booking flows, channel sync, payment processing, and performance under high load during peak seasons.", step: 4 },
              { icon: UploadCloud, title: "Deployment & Training", desc: "Cloud deployment, data migration from existing systems, and comprehensive training for property managers and staff.", step: 5 }
            ].map((step, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" className="flex items-center gap-8">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Successful Vacation Rental Projects
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Transforming property management businesses worldwide
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
                        <Badge className="bg-gradient-to-r from-emerald-600 to-teal-600">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Vacation Rental Industry Insights
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Latest trends and strategies in short-term rental management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AI-Driven Dynamic Pricing for Vacation Rentals", excerpt: "How artificial intelligence is revolutionizing pricing strategies and maximizing revenue for property owners.", date: "July 28, 2024" },
              { title: "Regulatory Compliance in Short-Term Rentals", excerpt: "Navigating changing laws and regulations across different markets and ensuring compliance in your management system.", date: "July 25, 2024" },
              { title: "The Rise of Direct Bookings in Vacation Rentals", excerpt: "Strategies for reducing reliance on third-party platforms and capturing more revenue through direct channels.", date: "July 22, 2024" }
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
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90">
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
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
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
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Our Vacation Rental Stats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Home, number: "25K+", label: "Properties Managed" },
                  { icon: Users, number: "1.5M+", label: "Bookings Processed" },
                  { icon: Award, number: "98%", label: "Uptime Guarantee" }
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
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                What Our Property Partners Say
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-cyan-600/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Optimize Your Vacation Rental Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Implement a comprehensive management system that automates operations, maximizes revenue, and scales your property portfolio effortlessly.</p>
          <Link to="/contact">
            <Button size="lg" className="px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default VacationRentalManagementSystem;
