"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, Easing } from "framer-motion";
import { Truck, Smartphone, Clock, Users, Award, Calendar, ArrowRight, Lightbulb, Shield, TrendingUp, Target, Code2, TestTube2, UploadCloud, Package, MessageSquare, Video, Coffee, Plane, Building, CalendarCheck, CheckCircle } from "lucide-react";

const OnDemandSolutions = () => {
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
      title: "Food Delivery App (On-Demand)",
      description: "Developed a comprehensive food delivery platform with real-time tracking, secure payments, and restaurant management features.",
      result: "200% User Growth",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Ride-Sharing Application",
      description: "Built a scalable ride-sharing solution with GPS integration, dynamic pricing, and driver/passenger apps.",
      result: "10K+ Daily Rides",
      tech: ["Flutter", "Firebase", "Google Maps API"]
    },
    {
      title: "On-Demand Home Services Platform",
      description: "Created a platform connecting users with local service providers for cleaning, repairs, and maintenance, with instant booking.",
      result: "Streamlined Service Booking",
      tech: ["Angular", "Laravel", "PostgreSQL"]
    }
  ];

  const faqs = [
    {
      question: "What are On-Demand Solutions?",
      answer: "On-Demand Solutions are applications or platforms that provide immediate access to services or products, typically through a mobile app. Examples include food delivery, ride-sharing, and instant booking services."
    },
    {
      question: "What technologies do you use for On-Demand apps?",
      answer: "We leverage modern mobile and web technologies like React Native, Flutter, Node.js, Python, and cloud platforms (AWS, Azure, GCP) to build robust and scalable on-demand solutions."
    },
    {
      question: "How do you ensure scalability for peak demand?",
      answer: "We design our on-demand solutions with cloud-native architectures, auto-scaling capabilities, and efficient database management to handle sudden spikes in user traffic and service requests without performance degradation."
    }
  ];

  const testimonials = [
    {
      quote: "Guidesoft's on-demand food delivery app was a game-changer for our business. The seamless user experience and robust backend handled our rapid growth effortlessly.",
      author: "Chef Antoine",
      role: "Founder, Gourmet Eats"
    },
    {
      quote: "The ride-sharing platform they developed is incredibly reliable and user-friendly. It has allowed us to quickly establish a strong presence in a competitive market.",
      author: "Maria Rodriguez",
      role: "CEO, CityRide"
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
            <Truck className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Instant Services, Anytime, Anywhere</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
            On-Demand Solutions
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Revolutionize your business with cutting-edge on-demand applications that connect users with services instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
              View Our Case Studies
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
                  <Badge className="bg-primary/10 border-primary/30 w-fit">What are On-Demand Solutions?</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                    Instant Access to Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    On-demand solutions are digital platforms designed to provide immediate access to services or products, typically facilitated through mobile applications. They cater to the modern consumer's need for speed and convenience, connecting users with providers in real-time.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Real-time service delivery</li>
                    <li className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-primary" /> Mobile-first user experience</li>
                    <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 24/7 availability and booking</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Why They Matter</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                    Meeting Modern Consumer Needs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    The on-demand economy is booming, driven by consumer expectations for instant gratification. Businesses that adopt on-demand models can tap into new markets, increase customer loyalty, and achieve significant operational efficiencies.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Target className="h-4 w-4 text-primary" /> Access to a wider customer base</div>
                      <div className="flex items-center gap-2 text-foreground"><TrendingUp className="h-4 w-4 text-primary" /> Increased revenue streams</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Users className="h-4 w-4 text-primary" /> Enhanced customer satisfaction</div>
                      <div className="flex items-center gap-2 text-foreground"><Shield className="h-4 w-4 text-primary" /> Optimized resource utilization</div>
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
              Our On-Demand Solution Expertise
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Building diverse on-demand platforms for various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Coffee, title: "Food & Grocery Delivery", desc: "Developing robust platforms for restaurants and grocery stores to offer seamless on-demand delivery services." },
              { icon: Plane, title: "Ride-Sharing & Logistics", desc: "Creating efficient ride-sharing apps and logistics solutions with real-time tracking and optimized routing." },
              { icon: MessageSquare, title: "Chatbot & AI Assistants", desc: "Integrating intelligent chatbots and AI assistants for instant customer support and personalized interactions." },
              { icon: Video, title: "Video Streaming & Content", desc: "Building on-demand video streaming platforms with secure content delivery and personalized recommendations." },
              { icon: CalendarCheck, title: "Booking & Scheduling Apps", desc: "Developing intuitive apps for instant booking of appointments, services, and events across various sectors." },
              { icon: Building, title: "Home Services & Maintenance", desc: "Creating platforms to connect users with on-demand home services like cleaning, repairs, and handyman tasks." }
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
              Our On-Demand Development Process
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              A streamlined approach to delivering high-performance on-demand applications
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { icon: Lightbulb, title: "Concept & Strategy", desc: "Defining your on-demand service model, target audience, and key features for a successful launch.", step: 1 },
              { icon: Code2, title: "UI/UX Design", desc: "Crafting intuitive and engaging user interfaces for both service providers and end-users.", step: 2 },
              { icon: TestTube2, title: "Backend & API Development", desc: "Building robust server-side logic, real-time communication, and secure APIs for seamless operations.", step: 3 },
              { icon: UploadCloud, title: "Mobile App Development", desc: "Developing high-performance native or cross-platform mobile applications for iOS and Android.", step: 4 },
              { icon: TrendingUp, title: "Testing & Deployment", desc: "Rigorous testing, secure deployment to app stores, and continuous monitoring for optimal performance.", step: 5 }
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
              Our On-Demand Solutions Portfolio
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Showcasing successful on-demand applications that redefine convenience
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
              On-Demand Insights
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Stay ahead with our latest articles on the on-demand economy and technology trends
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Rise of Hyperlocal On-Demand Services", excerpt: "Explore how businesses are leveraging location-based services to deliver instant solutions to local customers.", date: "July 1, 2024" },
              { title: "Building a Scalable Backend for Your On-Demand App", excerpt: "Key architectural considerations and technologies for creating a robust and performant backend for on-demand platforms.", date: "June 28, 2024" },
              { title: "AI in On-Demand: Personalization and Predictive Analytics", excerpt: "How artificial intelligence is enhancing user experiences and operational efficiency in the on-demand sector.", date: "June 25, 2024" }
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
                Our On-Demand Success Stats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Package, number: "80+", label: "Solutions Delivered" },
                  { icon: Users, number: "50+", label: "Satisfied Clients" },
                  { icon: Award, number: "95%", label: "User Retention" }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Launch Your On-Demand Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's build an innovative platform that delivers instant value to your customers.</p>
          <Link to="/contact">
            <Button size="lg" className="px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
              Start Your On-Demand Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default OnDemandSolutions;