"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, Easing } from "framer-motion";
import { Users, TrendingUp, CheckCircle, Award, Calendar, ArrowRight, Lightbulb, Shield, Target, Briefcase, Clock, Zap } from "lucide-react";

const HRConsultancy = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const services = [
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Strategic recruitment solutions to attract, assess, and hire top-tier talent for your organization."
    },
    {
      icon: TrendingUp,
      title: "Performance Management",
      description: "Comprehensive systems to evaluate, enhance, and optimize employee performance and productivity."
    },
    {
      icon: Shield,
      title: "Compliance & Risk Management",
      description: "Ensure adherence to labor laws, regulations, and industry standards while minimizing organizational risks."
    },
    {
      icon: Lightbulb,
      title: "Organizational Development",
      description: "Transform your workplace culture, structure, and processes to drive growth and innovation."
    },
    {
      icon: Zap,
      title: "HR Technology Solutions",
      description: "Implement cutting-edge HR tech platforms to streamline processes and enhance employee experience."
    },
    {
      icon: Award,
      title: "Training & Development",
      description: "Custom learning programs to upskill employees and build future-ready capabilities."
    }
  ];

  const faqs = [
    {
      question: "How can HR consultancy benefit my business?",
      answer: "HR consultancy helps optimize your human resources functions, reduce operational costs, ensure legal compliance, improve employee engagement, and implement best practices that drive organizational growth and productivity."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have extensive experience across various industries including technology, finance, healthcare, manufacturing, retail, and professional services. Our consultants adapt strategies to fit the unique needs of each sector."
    },
    {
      question: "Do you provide ongoing support or just one-time projects?",
      answer: "We offer both project-based and ongoing retainer services. Whether you need assistance with a specific initiative or comprehensive HR support, we can customize our engagement model to meet your requirements."
    }
  ];

  const testimonials = [
    {
      quote: "Guidesoft's HR consultancy transformed our workplace culture. Their strategic approach to talent management helped us reduce turnover by 40% while improving employee satisfaction scores.",
      author: "Jennifer Martinez",
      role: "HR Director, TechInnovate Inc"
    },
    {
      quote: "The compliance framework they implemented saved us from potential legal issues and streamlined our HR processes significantly. Their expertise is unmatched in the industry.",
      author: "Robert Thompson",
      role: "CEO, Global Manufacturing Group"
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
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">HR Consultancy</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
            HR Consultancy Services
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Strategic human resources solutions designed to optimize your workforce, enhance employee experience, and drive organizational success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
              Download Brochure
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
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Strategic HR Solutions</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                    Transform Your Human Capital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Our HR consultancy services help organizations navigate the complexities of human resources management. From talent acquisition to performance optimization, we provide strategic solutions that align with your business objectives.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Data-driven HR strategies</li>
                    <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Compliance assurance</li>
                    <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> Employee engagement optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Why Choose Us</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                    Expertise You Can Trust
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    With over a decade of experience in HR consultancy, our team brings deep industry knowledge and proven methodologies to help your organization thrive. We combine strategic insight with practical implementation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Target className="h-4 w-4 text-primary" /> 200+ Successful Projects</div>
                      <div className="flex items-center gap-2 text-foreground"><TrendingUp className="h-4 w-4 text-primary" /> 95% Client Retention</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Users className="h-4 w-4 text-primary" /> 50+ Industry Experts</div>
                      <div className="flex items-center gap-2 text-foreground"><Shield className="h-4 w-4 text-primary" /> ISO 30414 Certified</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Services Section */}
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
              Our HR Services
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Comprehensive human resources solutions tailored to your organization's needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" transition={{ delay: index * 0.1 }}>
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary">{service.title}</h3>
                    <p className="text-foreground/90">{service.description}</p>
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
              Our Consultancy Process
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              A structured approach to delivering impactful HR solutions
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { icon: Lightbulb, title: "Assessment & Discovery", desc: "We conduct a thorough analysis of your current HR practices, challenges, and objectives to develop a customized strategy.", step: 1 },
              { icon: Target, title: "Strategy Development", desc: "Our experts create a comprehensive HR roadmap aligned with your business goals and industry best practices.", step: 2 },
              { icon: Users, title: "Implementation", desc: "We work alongside your team to execute the strategy with minimal disruption to daily operations.", step: 3 },
              { icon: TrendingUp, title: "Monitoring & Optimization", desc: "Continuous evaluation and refinement of HR processes to ensure sustained improvement and ROI.", step: 4 }
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

      {/* 5. Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Employees Trained" },
              { icon: Award, number: "95%", label: "Client Retention" },
              { icon: Clock, number: "15+", label: "Years Experience" },
              { icon: TrendingUp, number: "40%", label: "Avg. Productivity Increase" }
            ].map((stat, index) => (
              <motion.div key={index} variants={cardVariants} className="text-center p-6 bg-background/40 backdrop-blur-xl rounded-lg border border-primary/20">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <p className="text-foreground/90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. Testimonials Section */}
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
              Client Success Stories
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Hear from organizations that have transformed their HR functions with our consultancy
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={cardVariants} className="p-8 bg-background/40 backdrop-blur-xl rounded-lg border border-primary/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground/90 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 7. FAQs Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Everything you need to know about our HR consultancy services
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-primary/20 bg-background/40 backdrop-blur-xl mb-4 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline h-auto py-6 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-foreground/90">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your HR Function Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's discuss how our HR consultancy services can help your organization thrive.</p>
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

export default HRConsultancy;