"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, Easing } from "framer-motion";
import { Hotel, Bed, MapPin, Calendar, CheckCircle, Users, Award, ArrowRight, Lightbulb, Shield, TrendingUp, Target, Layout, Code2, TestTube2, UploadCloud, Cloud, Rocket } from "lucide-react";

const HotelBookingEngine = () => {
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
      title: "Global Hotel Chain Reservation System",
      description: "Developed a comprehensive hotel booking engine for a major chain, integrating with PMS systems and supporting multi-property management.",
      result: "1M+ Reservations",
      tech: ["React", "Node.js", "Oracle PMS"]
    },
    {
      title: "OTA Hotel Search Platform",
      description: "Built a scalable hotel booking engine with advanced filters, real-time rates, and loyalty program integration for an online travel agency.",
      result: "98% Availability Sync",
      tech: ["Vue.js", "MongoDB", "Booking.com API"]
    },
    {
      title: "Corporate Hotel Booking Portal",
      description: "Created a B2B hotel booking system for corporate travel, featuring approval workflows and expense tracking.",
      result: "50% Cost Savings",
      tech: ["Angular", "PostgreSQL", "Expedia API"]
    }
  ];

  const faqs = [
    {
      question: "What is a Hotel Booking Engine?",
      answer: "A hotel booking engine is a software solution that allows guests to search for hotel rooms, view availability, rates, and book directly on your website. It integrates with your property management system (PMS), channel managers, and payment gateways for real-time operations."
    },
    {
      question: "How does it integrate with channel managers and OTAs?",
      answer: "Our engines connect via XML/JSON APIs to channel managers like SiteMinder, STAAH, and OTAs such as Booking.com, Expedia, and Hotels.com. This ensures synchronized inventory, rates, and bookings across all platforms to prevent overbookings."
    },
    {
      question: "What features are essential for a modern hotel booking engine?",
      answer: "Key features include real-time availability, dynamic pricing, mobile-responsive design, multi-language/currency support, secure payments, guest reviews integration, and analytics for revenue management."
    }
  ];

  const testimonials = [
    {
      quote: "Guidesoft's hotel booking engine has revolutionized our direct bookings. The seamless integration with our PMS and OTAs increased revenue by 35% in the first year.",
      author: "Lisa Rodriguez",
      role: "General Manager, Horizon Hotels"
    },
    {
      quote: "The custom features they built for our boutique hotel chain, including loyalty rewards and mobile check-in, have delighted our guests and staff alike.",
      author: "David Kim",
      role: "IT Director, Urban Stays"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-amber-50/50 via-orange-50/50 to-red-50/50 pointer-events-none" />
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-orange-100/20 to-red-100/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8">
            <Hotel className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Hotel Booking Engine</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            Hotel Booking Engine
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Drive direct bookings and maximize revenue with a powerful hotel booking engine that offers real-time availability, dynamic pricing, and seamless guest experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 bg-gradient-to-r from-amber-600 to-orange-600 hover:opacity-90 transition-opacity shadow-lg">
                Launch Your Booking Engine
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
              Discover Features
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
                  <Badge className="bg-primary/10 border-primary/30 w-fit">What is a Hotel Booking Engine?</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Direct Revenue Generation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    A hotel booking engine empowers properties to accept direct reservations on their website, reducing reliance on OTAs and commission fees. It handles room inventory, rates, guest details, and payments while syncing with your property management system.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Real-time room availability</li>
                    <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> PCI-compliant payments</li>
                    <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> Upsell opportunities (rooms, packages)</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Business Impact</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Maximize Occupancy & Profits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    By owning the booking process, hotels can capture more direct revenue, build stronger guest relationships, and implement personalized marketing. Our engines are optimized for conversion, mobile usage, and integration with modern hospitality tech stacks.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Target className="h-4 w-4 text-primary" /> 20-30% Increase in Direct Bookings</div>
                      <div className="flex items-center gap-2 text-foreground"><TrendingUp className="h-4 w-4 text-primary" /> Reduced OTA Commissions</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Users className="h-4 w-4 text-primary" /> Guest Data Ownership</div>
                      <div className="flex items-center gap-2 text-foreground"><Lightbulb className="h-4 w-4 text-primary" /> Personalized Experiences</div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Key Features of Our Hotel Booking Engine
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Everything you need to create exceptional booking experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Bed, title: "Room Search & Availability", desc: "Advanced search with filters for room type, amenities, dates, occupancy, and special requests. Real-time calendar and rate display." },
              { icon: Hotel, title: "Dynamic Pricing & Rates", desc: "Intelligent pricing engine with seasonal rates, promotions, minimum stay rules, and yield management tools for revenue optimization." },
              { icon: MapPin, title: "Multi-Property Support", desc: "Centralized booking for hotel chains or groups, with property-specific configurations, branding, and inventory management." },
              { icon: Calendar, title: "Booking Management", desc: "Guest profile creation, reservation holds, cancellations, modifications, and automated confirmations with integrated email/SMS." },
              { icon: Cloud, title: "PMS & Channel Manager Integration", desc: "Two-way sync with popular PMS (Opera, Fidelio) and channel managers (SiteMinder, Cloudbeds) for accurate inventory control." },
              { icon: Shield, title: "Secure Payments & Compliance", desc: "PCI-DSS compliant payment processing with multiple gateways, fraud detection, and GDPR-compliant data handling." }
            ].map((feature, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" transition={{ delay: index * 0.1 }}>
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Our Hotel Booking Engine Development Process
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              A proven methodology tailored for the hospitality industry
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { icon: Lightbulb, title: "Discovery & Requirements", desc: "Analyzing your hotel operations, target markets, and technical needs to define features and integrations.", step: 1 },
              { icon: Layout, title: "Design & Prototyping", desc: "Creating wireframes, user flows, and interactive prototypes focused on conversion-optimized booking journeys.", step: 2 },
              { icon: Code2, title: "Development & Integration", desc: "Building the engine with secure backend, frontend, and integrations using agile sprints and CI/CD pipelines.", step: 3 },
              { icon: TestTube2, title: "Testing & Optimization", desc: "Comprehensive testing for usability, performance, security, and cross-device compatibility, including load testing.", step: 4 },
              { icon: UploadCloud, title: "Deployment & Training", desc: "Live deployment, staff training, and ongoing support with monitoring, updates, and performance analytics.", step: 5 }
            ].map((step, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" className="flex items-center gap-8">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Proven Hotel Booking Implementations
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Case studies from successful hotel and hospitality projects
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
                        <Badge className="bg-gradient-to-r from-amber-600 to-orange-600">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Hospitality Tech Insights
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Trends and strategies for hotel booking optimization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Dynamic Pricing Strategies for Hotels in 2024", excerpt: "How AI-driven revenue management can boost occupancy and ADR without compromising guest satisfaction.", date: "July 18, 2024" },
              { title: "Integrating PMS with Booking Engines: Best Practices", excerpt: "Streamlining operations through seamless two-way integration between your booking engine and property management system.", date: "July 16, 2024" },
              { title: "Mobile Optimization for Hotel Direct Bookings", excerpt: "Why a mobile-first approach is crucial for capturing the growing number of smartphone-based hotel reservations.", date: "July 13, 2024" }
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
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:opacity-90">
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
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
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
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Our Hotel Booking Stats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Hotel, number: "5K+", label: "Hotels Connected" },
                  { icon: Users, number: "2M+", label: "Guest Bookings" },
                  { icon: Award, number: "99%", label: "Satisfaction Rate" }
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
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                What Our Hospitality Clients Say
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-red-600/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Boost Your Hotel's Direct Bookings?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Implement a state-of-the-art hotel booking engine that captures more revenue and provides superior guest experiences.</p>
          <Link to="/contact">
            <Button size="lg" className="px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default HotelBookingEngine;
