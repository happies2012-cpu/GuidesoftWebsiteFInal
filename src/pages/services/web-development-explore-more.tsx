"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, Easing } from "framer-motion";
import { Code, Smartphone, Search, Zap, CheckCircle, Users, Award, Calendar, ArrowRight, Lightbulb, Shield, TrendingUp, Target, Layout, Code2, TestTube2, UploadCloud, Globe, Database, Cpu } from "lucide-react";

const WebDevelopmentExploreMore = () => {
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
      title: "Enterprise SaaS Platform for Healthcare",
      description: "Developed a comprehensive healthcare management platform with telemedicine capabilities, HIPAA compliance, and real-time data analytics, serving 500+ healthcare providers.",
      result: "500+ Healthcare Providers",
      tech: ["React", "Node.js", "MongoDB", "WebRTC"]
    },
    {
      title: "E-Learning Platform for Global University",
      description: "Built a scalable learning management system with AI-powered personalization, video conferencing, and assessment tools, supporting 100,000+ concurrent users.",
      result: "100K+ Concurrent Users",
      tech: ["Vue.js", "Python", "PostgreSQL", "Redis"]
    },
    {
      title: "Fintech Dashboard for Investment Firm",
      description: "Created a real-time financial dashboard with advanced visualization, risk analysis, and automated reporting, processing $2B+ in transactions monthly.",
      result: "$2B+ Monthly Transactions",
      tech: ["Angular", "Java", "MySQL", "Kafka"]
    }
  ];

  const faqs = [
    {
      question: "What makes your web development approach different?",
      answer: "Our approach combines technical excellence with business strategy. We don't just build websites; we create digital ecosystems that drive growth. Our process includes discovery workshops, user research, agile development, and continuous optimization. We focus on performance, security, and scalability from day one."
    },
    {
      question: "How do you ensure the security of web applications?",
      answer: "Security is integrated throughout our development lifecycle. We implement secure coding practices, conduct regular penetration testing, use HTTPS encryption, implement proper authentication and authorization, and follow OWASP guidelines. We also provide security training for your team and ongoing monitoring."
    },
    {
      question: "What kind of ongoing support do you provide after launch?",
      answer: "We offer comprehensive post-launch support including monitoring, maintenance, updates, performance optimization, and feature enhancements. Our support packages include 24/7 monitoring, regular security updates, performance tuning, content updates, and dedicated account management. We also provide training and documentation."
    }
  ];

  const testimonials = [
    {
      quote: "Guidesoft's web development expertise transformed our online presence. Their attention to detail, technical knowledge, and commitment to excellence resulted in a platform that exceeds our expectations and drives measurable business results.",
      author: "Amanda Richardson",
      role: "Digital Director, Global Retailer"
    },
    {
      quote: "The enterprise web application developed by Guidesoft has become the backbone of our operations. Its scalability, security, and performance have enabled us to expand our business while maintaining the highest standards of data protection.",
      author: "Michael Torres",
      role: "CTO, Financial Services Corporation"
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
            <span className="text-sm font-medium text-primary">Advanced Web Development</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
            Advanced Web Development Solutions
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Enterprise-grade web applications and platforms designed for performance, scalability, and innovation. Beyond standard development to deliver transformative digital experiences.
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
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Beyond Standard Development</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                    Enterprise Web Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Our advanced web development services go beyond creating websites. We architect digital ecosystems that integrate seamlessly with your business processes, scale with your growth, and provide competitive advantages through cutting-edge technology.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Microservices architecture for scalability</li>
                    <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Zero-trust security implementation</li>
                    <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> AI-powered personalization engines</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Future-Ready Technology</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                    Innovation at Scale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    We leverage emerging technologies like progressive web apps, serverless computing, edge computing, and headless CMS architectures to build solutions that are not just current but future-proof. Our platforms adapt to changing technology landscapes.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Target className="h-4 w-4 text-primary" /> 99.99% uptime guarantee</div>
                      <div className="flex items-center gap-2 text-foreground"><TrendingUp className="h-4 w-4 text-primary" /> Sub-second page load times</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Search className="h-4 w-4 text-primary" /> Multi-region deployment</div>
                      <div className="flex items-center gap-2 text-foreground"><Zap className="h-4 w-4 text-primary" /> Auto-scaling infrastructure</div>
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
              Advanced Development Capabilities
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Cutting-edge technologies and methodologies for enterprise-grade web solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Progressive Web Apps", desc: "Native app-like experiences with web technologies, offline functionality, and push notifications for enhanced user engagement." },
              { icon: Database, title: "Headless CMS Integration", desc: "Decoupled content management for omnichannel delivery, enabling content reuse across web, mobile, and IoT platforms." },
              { icon: Cpu, title: "Serverless Architecture", desc: "Event-driven, auto-scaling solutions that reduce infrastructure costs while improving performance and reliability." },
              { icon: Layout, title: "Design Systems", desc: "Component-based design frameworks ensuring consistency, maintainability, and faster development across projects." },
              { icon: Smartphone, title: "API-First Development", desc: "Robust, scalable APIs that enable seamless integration with third-party services and future-proof your technology stack." },
              { icon: Shield, title: "Compliance & Security", desc: "GDPR, HIPAA, PCI-DSS compliant solutions with end-to-end encryption, penetration testing, and continuous monitoring." }
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
              Our Advanced Development Process
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              A sophisticated approach ensuring quality, innovation, and business alignment
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { icon: Lightbulb, title: "Strategic Discovery", desc: "In-depth business analysis, user research, competitive analysis, and technology assessment to define success metrics and innovation opportunities.", step: 1 },
              { icon: Code2, title: "Architecture Design", desc: "Enterprise-grade system design with microservices, API specifications, database modeling, and infrastructure planning for scalability and performance.", step: 2 },
              { icon: TestTube2, title: "Agile Development", desc: "Iterative development with continuous integration, automated testing, code reviews, and stakeholder feedback to ensure quality and alignment.", step: 3 },
              { icon: UploadCloud, title: "DevOps & Deployment", desc: "CI/CD pipelines, containerization, cloud deployment, monitoring setup, and performance optimization for seamless launches.", step: 4 },
              { icon: TrendingUp, title: "Optimization & Growth", desc: "Performance tuning, user analytics implementation, A/B testing, feature enhancement, and scalability planning for continued success.", step: 5 }
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
              Advanced Web Development Portfolio
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Enterprise solutions delivering measurable business impact through innovative technology
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
              Advanced Web Development Insights
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Stay ahead with our latest articles on enterprise web technologies and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Microservices vs Monoliths: Choosing the Right Architecture", excerpt: "A comprehensive guide to architectural decisions for scalable web applications in 2024.", date: "April 18, 2024" },
              { title: "The Future of Headless CMS in Enterprise Web Development", excerpt: "How decoupled content management is transforming digital experiences across industries.", date: "April 15, 2024" },
              { title: "Serverless Computing: Cost Optimization and Performance Benefits", excerpt: "Maximizing efficiency and reducing infrastructure costs with serverless architectures.", date: "April 12, 2024" }
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
                Our Advanced Development Stats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Code, number: "150+", label: "Enterprise Projects" },
                  { icon: Users, number: "85+", label: "Enterprise Clients" },
                  { icon: Award, number: "99%", label: "Client Retention" }
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
                What Our Enterprise Clients Say
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Enterprise-Grade Web Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's create transformative digital experiences that drive business growth and innovation.</p>
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

export default WebDevelopmentExploreMore;