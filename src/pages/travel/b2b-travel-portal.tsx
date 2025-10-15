"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, Easing } from "framer-motion";
import { Building, MapPin, Calendar, CheckCircle, Users, Award, ArrowRight, Lightbulb, Shield, TrendingUp, Target, Layout, Code2, TestTube2, UploadCloud, Cloud, Rocket } from "lucide-react";

const B2BTravelPortal = () => {
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
      title: "Enterprise Corporate Travel Platform",
      description: "Developed a comprehensive B2B travel portal for a Fortune 500 company, featuring approval workflows, expense management, and duty of care tracking for 50,000+ employees.",
      result: "35% Cost Reduction",
      tech: ["React", "Node.js", "SAP Integration"]
    },
    {
      title: "Travel Management Company Portal",
      description: "Built a white-label B2B platform for TMC partners, including client onboarding, custom branding, and comprehensive reporting for managed travel programs.",
      result: "200+ Client Companies",
      tech: ["Vue.js", "MongoDB", "Multi-tenant Architecture"]
    },
    {
      title: "Government Travel Management System",
      description: "Created a secure B2B portal for government agencies, with compliance tracking, audit trails, and integration with federal travel regulations and procurement systems.",
      result: "100% Compliance Rate",
      tech: ["Angular", "PostgreSQL", "Government APIs"]
    }
  ];

  const faqs = [
    {
      question: "What is a B2B Travel Portal?",
      answer: "A B2B travel portal is a specialized platform designed for corporate and business travel management. It provides companies with tools for booking, expense tracking, policy enforcement, and travel program management while offering employees self-service booking capabilities."
    },
    {
      question: "How does it handle corporate travel policies and compliance?",
      answer: "Our portals enforce company travel policies in real-time during booking, including preferred vendors, spending limits, and approval workflows. Advanced features include duty of care tracking, emergency response, and compliance reporting for regulatory requirements."
    },
    {
      question: "What integrations are essential for B2B travel portals?",
      answer: "Key integrations include ERP systems (SAP, Oracle), expense management tools, HR systems, and travel booking APIs. We also integrate with corporate card programs, preferred airline/hotel contracts, and risk management platforms."
    }
  ];

  const testimonials = [
    {
      quote: "Guidesoft's B2B travel portal has transformed our corporate travel program. We've achieved 30% cost savings and significantly improved employee satisfaction with streamlined booking processes.",
      author: "Robert Chen",
      role: "CFO, Global Manufacturing Corp"
    },
    {
      quote: "The advanced analytics and reporting capabilities have given us unprecedented visibility into our travel spend and program effectiveness. It's been a game-changer for our procurement team.",
      author: "Lisa Thompson",
      role: "VP Procurement, Tech Solutions Inc"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50/50 via-gray-50/50 to-zinc-50/50 pointer-events-none" />
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100/20 via-gray-100/20 to-zinc-100/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8">
            <Building className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">B2B Travel Portal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
            B2B Travel Portal
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Empower your corporate travel program with a sophisticated B2B portal that streamlines bookings, enforces policies, and delivers significant cost savings through intelligent travel management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 bg-gradient-to-r from-slate-600 to-gray-600 hover:opacity-90 transition-opacity shadow-lg">
                Build Your Corporate Portal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
              Explore Enterprise Features
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
                  <Badge className="bg-primary/10 border-primary/30 w-fit">What is a B2B Travel Portal?</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                    Enterprise Travel Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    A B2B travel portal is a comprehensive platform designed for corporate travel programs, providing tools for policy enforcement, cost control, and efficient booking processes. It serves both travel managers and employees with self-service capabilities and detailed analytics.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Policy-driven booking controls</li>
                    <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Comprehensive expense management</li>
                    <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> Advanced reporting and analytics</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Business Impact</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                    Optimize Corporate Travel Spend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Modern B2B portals deliver measurable ROI through reduced travel costs, improved compliance, and enhanced employee satisfaction. They provide the visibility and control needed to manage complex corporate travel programs effectively.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Target className="h-4 w-4 text-primary" /> 20-40% Cost Reduction</div>
                      <div className="flex items-center gap-2 text-foreground"><TrendingUp className="h-4 w-4 text-primary" /> Improved Compliance</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Users className="h-4 w-4 text-primary" /> Enhanced Employee Experience</div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
              Enterprise-Grade Features for B2B Travel
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Comprehensive tools for managing corporate travel programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building, title: "Travel Policy Management", desc: "Create and enforce company travel policies with automated approval workflows, spending limits, and preferred vendor restrictions across all booking channels." },
              { icon: MapPin, title: "Multi-Modal Booking", desc: "Integrated booking for flights, hotels, cars, and rail with policy compliance checks and automatic routing to preferred suppliers and negotiated rates." },
              { icon: Calendar, title: "Trip Management & Tracking", desc: "End-to-end trip management with itinerary tracking, automated notifications, duty of care monitoring, and emergency response coordination." },
              { icon: Shield, title: "Expense & Invoice Management", desc: "Automated expense reporting, receipt matching, and invoice processing with integration to accounting systems and corporate card programs." },
              { icon: Cloud, title: "Analytics & Reporting", desc: "Comprehensive dashboards with spend analysis, compliance reporting, carbon footprint tracking, and predictive analytics for budget planning." },
              { icon: TrendingUp, title: "Vendor & Contract Management", desc: "Manage supplier relationships, track contract performance, and optimize vendor selection based on cost, service quality, and compliance metrics." }
            ].map((feature, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" transition={{ delay: index * 0.1 }}>
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-gray-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
              B2B Travel Portal Development Process
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Building scalable enterprise travel solutions
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { icon: Lightbulb, title: "Business Requirements Analysis", desc: "Understanding corporate travel policies, existing systems, and pain points. Mapping user roles, approval workflows, and integration requirements.", step: 1 },
              { icon: Layout, title: "Platform Design & Architecture", desc: "Designing scalable multi-tenant architecture with role-based access, custom branding capabilities, and comprehensive API integrations.", step: 2 },
              { icon: Code2, title: "Core Development & Integration", desc: "Building policy engines, booking workflows, and reporting systems with secure integrations to ERP, HR, and travel booking platforms.", step: 3 },
              { icon: TestTube2, title: "Testing & Compliance Validation", desc: "Rigorous testing of policy enforcement, data security, and system performance. Validation against industry standards and regulatory requirements.", step: 4 },
              { icon: UploadCloud, title: "Deployment & Change Management", desc: "Phased rollout with data migration, user training programs, and ongoing support. Continuous optimization based on usage analytics.", step: 5 }
            ].map((step, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" className="flex items-center gap-8">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-slate-600 to-gray-600 rounded-full flex items-center justify-center text-white font-bold">
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
