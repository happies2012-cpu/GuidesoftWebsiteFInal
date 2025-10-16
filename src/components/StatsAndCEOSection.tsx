"use client";

import React from 'react';
import { motion, Easing } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, TrendingUp, Globe, Search, Route, Wrench, RotateCcw, Brain, Workflow, Plug, Users2, Zap, Target, HeartHandshake, Scale, Cpu, ZapIcon, Monitor, Palette, BarChartBig, MessageCircle } from 'lucide-react';
import { ShuffleHero } from '@/components/ui/shuffle-grid';
import { StaggerTestimonials } from '@/components/ui/stagger-testimonials';
import ceoImage from '@/assets/praveen.png';
import SmartImage from '@/components/ui/SmartImage';

const StatsAndCEOSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const stats = [
    { icon: Users, number: "256+", label: "Global Innovations", color: "text-blue-600" },
    { icon: Award, number: "15+", label: "Years Experience", color: "text-green-600" },
    { icon: TrendingUp, number: "98%", label: "Success Rate", color: "text-purple-600" },
    { icon: Globe, number: "25+", label: "Countries Served", color: "text-orange-600" },
  ];

  const processSteps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Analysis",
      description: "Understanding your business needs and objectives",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Route,
      number: "02",
      title: "Strategy & Planning",
      description: "Creating comprehensive roadmap for success",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Wrench,
      number: "03",
      title: "Implementation & Delivery",
      description: "Executing solutions with precision and expertise",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: RotateCcw,
      number: "04",
      title: "Support & Optimization",
      description: "Continuous improvement and ongoing support",
      color: "from-emerald-500 to-green-500"
    }
  ];

  const approachData = [
    {
      icon: Brain,
      title: "AI-Driven Strategy",
      description: "We blend data analytics, predictive modeling, and automation to craft intelligent business roadmaps.",
      outcomes: ["Accelerated decision-making", "Operational excellence"]
    },
    {
      icon: Workflow,
      title: "Smart Workflows",
      description: "Replace manual processes with AI-powered workflows that learn, adapt, and optimize continuously.",
      outcomes: ["Personalized customer journeys", "Scalable systems"]
    },
    {
      icon: Plug,
      title: "Intelligent Tools Integration",
      description: "Seamlessly connect AI tools for CRM, marketing, HR, finance, and operations to drive measurable efficiency.",
      outcomes: ["Enhanced productivity", "Data-driven insights"]
    },
    {
      icon: Users2,
      title: "Digital Empowerment",
      description: "Transform your workforce with guided AI adoption, ensuring every team benefits from augmented intelligence.",
      outcomes: ["Skill development", "Innovation culture"]
    }
  ];

  const coreCompetencies = [
    {
      icon: Cpu,
      title: "AI-Driven Digital Transformation",
      description: "Integrating intelligent agents, predictive analytics, and automation to help enterprises evolve into AI-first organizations."
    },
    {
      icon: ZapIcon,
      title: "Workflow & Process Automation",
      description: "Streamlining complex business processes with Gen-AI powered workflow orchestration, robotic process automation (RPA), and intelligent data pipelines."
    },
    {
      icon: Monitor,
      title: "Enterprise Application Development",
      description: "Crafting scalable, cloud-native web and mobile applications with seamless integration across modern architectures."
    },
    {
      icon: Palette,
      title: "UI/UX Innovation Lab",
      description: "Delivering human-centered design systems powered by behavioral analytics and adaptive interfaces — where creativity meets cognitive technology."
    },
    {
      icon: BarChartBig,
      title: "Data Intelligence & Analytics",
      description: "Turning big data into actionable insights with advanced data visualization, ML models, and decision intelligence dashboards."
    },
    {
      icon: MessageCircle,
      title: "AI Agents & Conversational Systems",
      description: "Building context-aware digital agents and copilots that redefine how humans interact with technology."
    }
  ];

  const ceoInfo = {
    name: "Praveen Kumar",
    title: "CEO & Founder",
    quote: "Get Consultations"
  };

  return (
    <>
      {/* Enhanced AI Tools Section with ShuffleHero */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-muted/30 relative"
      >
        <div className="container mx-auto px-4">
          <ShuffleHero />
        </div>
      </motion.section>

      {/* Original CEO and Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-background relative"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: CEO Image - Increased size and mixed background */}
            <motion.div variants={cardVariants} className="relative flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-background/40 backdrop-blur-xl border border-primary/20 w-4/5 mx-auto">
                <SmartImage
                  src={ceoImage}
                  alt="CEO of Guidesoft"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/30 to-gradient-primary-end/30 mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm rounded-lg p-6 m-4">
                  <h3 className="text-2xl font-semibold text-foreground mb-1">{ceoInfo.name}</h3>
                  <p className="text-base text-muted-foreground">{ceoInfo.title}, Guidesoft</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Stats Cards - Fully centered */}
            <motion.div variants={cardVariants} className="space-y-6 flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent text-center">
                Our Achievement Stats
              </h2>
              <div className="grid grid-cols-2 gap-6 w-full max-w-2xl justify-items-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group flex justify-center"
                  >
                    <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group w-full max-w-[200px]">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-primary/10 group-hover:bg-primary transition-all duration-300 mx-auto">
                          <stat.icon className={`h-8 w-8 ${stat.color} group-hover:text-primary-foreground transition-all duration-300`} />
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                        <p className="text-muted-foreground">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* Our Core Competencies Section */}
              <div className="mt-16 w-full max-w-2xl">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-foreground mb-3">Our Core Competencies</h3>
                  <p className="text-muted-foreground max-w-lg mx-auto">
                    Specialized expertise driving digital innovation and transformation
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coreCompetencies.map((competency, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover="hover"
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <Card className="bg-background/40 backdrop-blur-xl border border-primary/20 hover:border-primary/50 transition-all h-full overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                              <competency.icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-foreground text-lg mb-2">{competency.title}</h4>
                              <p className="text-muted-foreground text-sm">{competency.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Our Process Section */}
              <div className="mt-12 space-y-6 w-full max-w-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-2">Our Process</h3>
                  <p className="text-muted-foreground max-w-lg mx-auto">
                    A proven methodology to ensure successful project delivery
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover="hover"
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <Card className="bg-background/40 backdrop-blur-xl border border-primary/20 hover:border-primary/50 transition-all h-full overflow-hidden">
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`} />
                        <CardContent className="p-6 relative z-10">
                          <div className="flex items-start gap-4">
                            <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                              {step.number}
                            </div>
                            <div className="flex-1">
                              <div className="inline-flex items-center gap-2 mb-2">
                                <step.icon className="h-5 w-5 text-primary" />
                                <h4 className="font-semibold text-foreground text-lg">{step.title}</h4>
                              </div>
                              <p className="text-muted-foreground text-sm">{step.description}</p>
                            </div>
                          </div>
                          
                          {/* Decorative elements */}
                          <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r ${step.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                          <div className={`absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-r ${step.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* New Our Approach Section */}
              <div className="mt-16 w-full max-w-2xl">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-foreground mb-3">Our Approach</h3>
                  <p className="text-muted-foreground max-w-lg mx-auto">
                    Transforming businesses through intelligent AI solutions
                  </p>
                </div>
                
                <div className="space-y-8">
                  {approachData.map((approach, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover="hover"
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <Card className="bg-background/40 backdrop-blur-xl border border-primary/20 hover:border-primary/50 transition-all overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <approach.icon className="h-8 w-8" />
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-foreground mb-2">{approach.title}</h4>
                              <p className="text-muted-foreground mb-4">{approach.description}</p>
                              
                              <div className="flex flex-wrap gap-2">
                                {approach.outcomes.map((outcome, outcomeIndex) => (
                                  <span 
                                    key={outcomeIndex} 
                                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                  >
                                    <Zap className="h-3 w-3" />
                                    {outcome}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-gradient-primary-start/10 to-gradient-primary-end/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                  
                  {/* CEO Quote Card */}
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="group relative mt-12"
                  >
                    <Card className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end border-0 text-primary-foreground shadow-xl">
                      <CardContent className="p-8 text-center">
                        <div className="flex flex-col items-center">
                          <HeartHandshake className="h-12 w-12 mb-4 text-primary-foreground/80" />
                          <blockquote className="text-xl font-medium mb-4 italic">
                            "{ceoInfo.quote}"
                          </blockquote>
                          <div className="mt-4">
                            <p className="font-bold text-lg">{ceoInfo.name}</p>
                            <p className="text-primary-foreground/80">{ceoInfo.title}, Guidesoft</p>
                          </div>
                          <div className="mt-6">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-lg shadow-lg hover:bg-primary-foreground/90 transition-colors"
                            >
                              Schedule Consultation
                            </motion.button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Don't just take our word for it - hear from businesses we've transformed
            </p>
          </div>
          <StaggerTestimonials />
        </div>
      </motion.section>
    </>
  );
};

export default StatsAndCEOSection;