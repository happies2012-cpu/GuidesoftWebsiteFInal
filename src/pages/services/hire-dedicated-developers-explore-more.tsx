"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, Easing } from "framer-motion";
import { Users, Code, Zap, CheckCircle, Award, Calendar, ArrowRight, Lightbulb, Shield, TrendingUp, Target, Cpu, GitBranch, Clock } from "lucide-react";

const HireDedicatedDevelopersExploreMore = () => {
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
      title: "Enterprise E-Commerce Platform",
      description: "Dedicated team of 8 developers worked for 12 months to build a scalable e-commerce platform handling 100K+ daily transactions.",
      result: "100K+ Daily Transactions",
      tech: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Fintech Mobile Banking Solution",
      description: "Team of 12 specialists developed a secure mobile banking app with biometric authentication and real-time analytics.",
      result: "2M+ App Downloads",
      tech: ["React Native", "Firebase", "Python", "Docker"]
    },
    {
      title: "Healthcare Management System",
      description: "Dedicated team built a HIPAA-compliant healthcare platform with telemedicine capabilities and patient portal.",
      result: "500+ Healthcare Providers",
      tech: ["Angular", "Java", "PostgreSQL", "Kubernetes"]
    }
  ];

  const faqs = [
    {
      question: "What types of developers can I hire?",
      answer: "We offer dedicated developers across all major technologies including frontend (React, Angular, Vue), backend (Node.js, Python, Java), mobile (React Native, Flutter, iOS, Android), and specialized roles like DevOps, QA, and data engineers."
    },
    {
      question: "How quickly can you assemble a team?",
      answer: "We can typically assemble a team within 1-2 weeks depending on the specific skill requirements. For highly specialized roles, it may take slightly longer to ensure we find the perfect fit for your project."
    },
    {
      question: "What management and communication tools do you provide?",
      answer: "We provide full transparency with daily standups, weekly reports, and access to project management tools like Jira, Trello, or Asana. Communication is handled through Slack, Microsoft Teams, or your preferred platform with flexible scheduling to accommodate time zones."
    }
  ];

  const testimonials = [
    {
      quote: "Guidesoft's dedicated developers became an integral part of our team. Their expertise and commitment helped us deliver our product ahead of schedule while maintaining the highest quality standards.",
      author: "David Johnson",
      role: "CTO, TechStart Inc"
    },
    {
      quote: "The dedicated team we hired from Guidesoft exceeded our expectations in every way. Their technical skills, work ethic, and communication made them feel like an extension of our own company.",
      author: "Maria Garcia",
      role: "Product Director, FinTech Solutions"
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
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Dedicated Developers</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
            Explore More Hiring Options
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Access top-tier talent with our dedicated developer teams. Scale your projects efficiently with experienced professionals who integrate seamlessly with your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
              View Developer Profiles
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
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Beyond Standard Hiring</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                    Extended Team Capabilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Our dedicated developer hiring services go beyond simply providing technical resources. We offer comprehensive team augmentation with professionals who understand your business goals and integrate seamlessly with your existing workflow.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Pre-vetted Senior Developers</li>
                    <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Full IP Protection</li>
                    <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> 95% Developer Retention</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Flexible Engagement</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                    Multiple Hiring Models
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    We offer flexible engagement models to suit your project needs: dedicated teams, individual developers, or hybrid models. Whether you need a single specialist or an entire team, we can customize the arrangement to fit your requirements.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Target className="h-4 w-4 text-primary" /> Hourly, Monthly, Project-Based</div>
                      <div className="flex items-center gap-2 text-foreground"><TrendingUp className="h-4 w-4 text-primary" /> 20+ Technology Specializations</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Clock className="h-4 w-4 text-primary" /> 24/7 Coverage Options</div>
                      <div className="flex items-center gap-2 text-foreground"><Shield className="h-4 w-4 text-primary" /> GDPR & HIPAA Compliant</div>
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
              Advanced Hiring Benefits
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Comprehensive advantages of our dedicated developer programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: "Elite Talent Pool", desc: "Access to pre-vetted senior developers with 5+ years of experience in cutting-edge technologies." },
              { icon: GitBranch, title: "Seamless Integration", desc: "Developers who quickly adapt to your workflows, tools, and company culture for immediate productivity." },
              { icon: Shield, title: "Complete Security", desc: "Full IP protection, NDA coverage, and compliance with international data protection regulations." },
              { icon: TrendingUp, title: "Performance Guarantee", desc: "Regular performance reviews, skill assessments, and replacement guarantee for unsatisfactory resources." },
              { icon: Clock, title: "Flexible Scaling", desc: "Scale your team up or down based on project demands with minimal notice periods." },
              { icon: Zap, title: "Rapid Onboarding", desc: "Get your team productive within 48 hours with our streamlined onboarding process." }
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
              Our Hiring Process
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              A streamlined approach to assembling the perfect team for your project
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { icon: Lightbulb, title: "Requirement Analysis", desc: "We work with you to understand your technical requirements, project scope, and team dynamics needed.", step: 1 },
              { icon: Users, title: "Talent Matching", desc: "Our team identifies and pre-screens candidates with the exact skills and experience your project requires.", step: 2 },
              { icon: Code, title: "Technical Evaluation", desc: "Candidates undergo rigorous technical assessments and live coding challenges to verify their capabilities.", step: 3 },
              { icon: Shield, title: "Cultural Fit Assessment", desc: "We evaluate communication skills, work style, and cultural alignment to ensure seamless integration.", step: 4 },
              { icon: TrendingUp, title: "Team Assembly & Onboarding", desc: "Finalize your team and get them productive quickly with our comprehensive onboarding process.", step: 5 }
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
              Our Hiring Success Stories
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Real results from real projects – see how dedicated teams have helped businesses achieve their goals
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
              Developer Hiring Insights
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Stay ahead with our latest articles and trends in tech talent acquisition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Future of Remote Development Teams", excerpt: "Exploring how distributed teams are reshaping the tech industry and best practices for management.", date: "April 20, 2024" },
              { title: "How to Evaluate Developer Skills Beyond Technical Tests", excerpt: "A comprehensive guide to assessing soft skills, problem-solving abilities, and cultural fit.", date: "April 17, 2024" },
              { title: "Building High-Performance Development Teams", excerpt: "Essential strategies for creating and maintaining productive, innovative development teams.", date: "April 14, 2024" }
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
                Our Hiring Stats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Users, number: "500+", label: "Developers Hired" },
                  { icon: Award, number: "95%", label: "Client Retention" },
                  { icon: Target, number: "20+", label: "Tech Specializations" }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Expand Your Development Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's connect you with the perfect developers to accelerate your project and drive innovation.</p>
          <Link to="/contact">
            <Button size="lg" className="px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
              Hire Developers Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default HireDedicatedDevelopersExploreMore;