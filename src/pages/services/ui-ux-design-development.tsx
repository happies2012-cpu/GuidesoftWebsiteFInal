"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, Easing } from "framer-motion";
import { Palette, Layout, Users, Award, Calendar, ArrowRight, Lightbulb, Smartphone, Search, Zap, CheckCircle, Shield, TrendingUp, Target, Code2, TestTube2, UploadCloud, Monitor, PenTool, Layers, Figma } from "lucide-react";

const UiUxDesignDevelopment = () => {
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
      title: "Intuitive Mobile Banking App",
      description: "Redesigned a banking app focusing on user-centric flows and modern aesthetics, leading to a 30% increase in user engagement.",
      result: "30% User Engagement Boost",
      tech: ["Figma", "Sketch", "User Testing"]
    },
    {
      title: "E-commerce Website UX Overhaul",
      description: "Optimized the user journey and visual design for an e-commerce platform, resulting in a 20% uplift in conversion rates.",
      result: "20% Conversion Rate Increase",
      tech: ["Adobe XD", "Heatmaps", "A/B Testing"]
    },
    {
      title: "Enterprise Dashboard Design System",
      description: "Developed a comprehensive design system for an enterprise analytics dashboard, improving consistency and reducing development time by 40%.",
      result: "40% Dev Time Reduction",
      tech: ["Figma", "Storybook", "Accessibility"]
    }
  ];

  const faqs = [
    {
      question: "What is the difference between UI and UX design?",
      answer: "UX (User Experience) design focuses on the overall feel of the experience, ensuring it's logical and easy to use. UI (User Interface) design focuses on the visual and interactive elements, making sure the interface is aesthetically pleasing and intuitive."
    },
    {
      question: "What tools do you use for UI/UX design?",
      answer: "We primarily use industry-standard tools such as Figma, Sketch, Adobe XD for design, and integrate with prototyping tools like InVision or Marvel. For development, we use modern frontend frameworks."
    },
    {
      question: "How do you ensure a good user experience?",
      answer: "Our process involves extensive user research, persona creation, user journey mapping, wireframing, prototyping, and iterative user testing. We prioritize feedback and data to continuously refine the experience."
    }
  ];

  const testimonials = [
    {
      quote: "Guidesoft's UI/UX team transformed our product. The new interface is not only beautiful but incredibly intuitive, leading to fantastic user feedback.",
      author: "Olivia Wilson",
      role: "Product Manager, InnovateCo"
    },
    {
      quote: "Their design process was thorough and collaborative. They truly understood our users' needs and delivered a solution that exceeded our expectations.",
      author: "Daniel Brown",
      role: "Head of Digital, Global Brands"
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
            <Palette className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">User Interface & Experience</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
            UI/UX Design & Development
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Craft intuitive, engaging, and beautiful digital experiences that captivate users and drive business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
              View Our Portfolio
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
                  <Badge className="bg-primary/10 border-primary/30 w-fit">What is UI/UX Design?</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                    Designing User-Centric Experiences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    UI/UX design is about creating digital products that are not only visually appealing but also incredibly easy and enjoyable to use. It's a blend of aesthetics, psychology, and technology to ensure users have a seamless and positive interaction.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Intuitive navigation and flow</li>
                    <li className="flex items-center gap-2"><Lightbulb className="h-4 w-4 text-primary" /> Visually appealing interfaces</li>
                    <li className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> User research-driven insights</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit">Why It Matters</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                    Driving Engagement & Conversions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Exceptional UI/UX design is critical for retaining users, building brand loyalty, and increasing conversions. A poorly designed interface can lead to frustration and abandonment, while a great one creates memorable interactions and drives business success.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Target className="h-4 w-4 text-primary" /> 88% of online consumers won't return after a bad experience</div>
                      <div className="flex items-center gap-2 text-foreground"><TrendingUp className="h-4 w-4 text-primary" /> Good UX can increase conversion rates by up to 400%</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-foreground"><Search className="h-4 w-4 text-primary" /> Improves customer satisfaction and loyalty</div>
                      <div className="flex items-center gap-2 text-foreground"><Zap className="h-4 w-4 text-primary" /> Reduces development costs by preventing reworks</div>
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
              Our UI/UX Design & Development Expertise
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Comprehensive services to create stunning and functional digital products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: PenTool, title: "User Interface (UI) Design", desc: "Crafting visually stunning and intuitive interfaces that enhance user interaction and brand identity." },
              { icon: Layers, title: "User Experience (UX) Design", desc: "Designing seamless and enjoyable user journeys through research, wireframing, and prototyping." },
              { icon: Monitor, title: "Responsive Web Design", desc: "Ensuring your digital product looks and functions flawlessly across all devices and screen sizes." },
              { icon: Smartphone, title: "Mobile App UI/UX", desc: "Specialized design for iOS and Android applications, focusing on platform-specific guidelines and user behavior." },
              { icon: Figma, title: "Prototyping & Wireframing", desc: "Creating interactive prototypes and detailed wireframes to visualize and test user flows before development." },
              { icon: Layout, title: "Design System Development", desc: "Building scalable design systems for consistency, efficiency, and faster development across your product suite." }
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
              Our UI/UX Design Process
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              A structured approach to creating impactful and user-friendly designs
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { icon: Lightbulb, title: "Discovery & Research", desc: "Understanding your users, business goals, and competitive landscape through in-depth research and analysis.", step: 1 },
              { icon: Code2, title: "Wireframing & Prototyping", desc: "Creating low-fidelity wireframes and interactive prototypes to map out user flows and test concepts.", step: 2 },
              { icon: TestTube2, title: "Visual Design & UI", desc: "Developing high-fidelity mockups, design systems, and visual elements that align with your brand.", step: 3 },
              { icon: UploadCloud, title: "User Testing & Iteration", desc: "Conducting usability testing with real users to gather feedback and iteratively refine the design.", step: 4 },
              { icon: TrendingUp, title: "Implementation & Handoff", desc: "Collaborating with developers for seamless implementation and providing detailed design specifications.", step: 5 }
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
              Our UI/UX Design Portfolio
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Showcasing our award-winning designs and user-centric solutions
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
              UI/UX Design Insights
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends and best practices in design
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Power of Microinteractions in UI Design", excerpt: "Learn how small animations and feedback can significantly enhance user experience and delight.", date: "April 10, 2024" },
              { title: "Designing for Accessibility: A Comprehensive Guide", excerpt: "Ensuring your digital products are usable by everyone, regardless of ability, is crucial for inclusive design.", date: "April 8, 2024" },
              { title: "Future of UX: AI-Powered Personalization", excerpt: "How artificial intelligence is revolutionizing user experiences by delivering highly personalized content and interfaces.", date: "April 5, 2024" }
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
                Our UI/UX Design Stats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Palette, number: "120+", label: "Designs Delivered" },
                  { icon: Users, number: "75+", label: "Happy Clients" },
                  { icon: Award, number: "97%", label: "User Satisfaction" }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for an Exceptional User Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's design and develop a digital product that your users will love.</p>
          <Link to="/contact">
            <Button size="lg" className="px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
              Get a Design Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default UiUxDesignDevelopment;