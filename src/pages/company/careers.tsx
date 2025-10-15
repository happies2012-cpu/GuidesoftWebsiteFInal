"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Easing } from "framer-motion";
import { Users, TrendingUp, CheckCircle, Award, Calendar, ArrowRight, Lightbulb, Shield, Target, Briefcase, Clock, Zap, Heart, Globe, GraduationCap } from "lucide-react";

const Careers = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance for you and your family."
    },
    {
      icon: Clock,
      title: "Flexible Work",
      description: "Remote work options and flexible schedules to support work-life balance."
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Continuous learning opportunities, certifications, and conference attendance."
    },
    {
      icon: Award,
      title: "Performance Bonuses",
      description: "Quarterly bonuses based on individual and company performance."
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Work on international projects and collaborate with global teams."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear advancement paths and mentorship programs for professional growth."
    }
  ];

  const cultureValues = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collective intelligence."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creative thinking and experimentation with new technologies."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our interactions."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "Understanding and supporting our colleagues and clients with compassion."
    }
  ];

  const openPositions = [
    {
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time"
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
            <span className="text-sm font-medium text-primary">Join Our Team</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
            Build Your Career With Us
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Join a team of passionate innovators who are shaping the future of technology. We offer challenging projects, continuous learning, and a supportive environment where you can thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </motion.section>

      {/* 2. Why Join Section */}
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
              Why Guidesoft?
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              We're committed to creating an environment where talent thrives and innovation flourishes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" transition={{ delay: index * 0.1 }}>
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary">{benefit.title}</h3>
                    <p className="text-foreground/90">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. Culture Section */}
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
              Our Culture & Values
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              The principles that guide how we work and interact with each other
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" transition={{ delay: index * 0.1 }}>
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary">{value.title}</h3>
                    <p className="text-foreground/90">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. Open Positions Section */}
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
              Open Positions
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Join us in creating innovative solutions that make a difference
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-foreground group-hover:text-primary">{position.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="border-primary/30">{position.department}</Badge>
                      <Badge variant="outline" className="border-primary/30">{position.location}</Badge>
                      <Badge variant="outline" className="border-primary/30">{position.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="default" className="w-full bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-foreground/80 mb-6">Don't see a position that matches your skills?</p>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </motion.section>

      {/* 5. Life at Guidesoft Section */}
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
              Life at Guidesoft
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              A glimpse into our workplace culture and team activities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={cardVariants} className="md:col-span-2">
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 h-full">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end h-64 rounded-t-lg flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">Team Collaboration</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">Collaborative Environment</h3>
                    <p className="text-foreground/90">
                      Our open office layout and digital collaboration tools foster seamless communication and knowledge sharing across teams.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants} className="space-y-6">
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-32 rounded-t-lg flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Learning & Development</span>
                  </div>
                  <div className="p-4">
                    <p className="text-foreground/90 text-sm">
                      Monthly tech talks and workshops to keep our skills sharp.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-32 rounded-t-lg flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Team Events</span>
                  </div>
                  <div className="p-4">
                    <p className="text-foreground/90 text-sm">
                      Quarterly team outings and hackathons to foster creativity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our team of innovators and help shape the future of technology.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
              View All Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Contact Our HR Team
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Careers;