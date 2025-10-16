"use client";

import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Easing } from "framer-motion";
import { ArrowRight, Lightbulb, Target, TrendingUp, Users, Award, Code2, Zap, Shield, Cpu, Database, Globe, Smartphone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const CenterOfExcellence: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const excellenceAreas = [
    {
      title: "Frontend Development",
      description: "Mastering modern frameworks and creating exceptional user experiences",
      icon: Code2,
      technologies: ["React", "Vue.js", "Angular", "Next.js", "Svelte"]
    },
    {
      title: "Backend Engineering",
      description: "Building scalable, secure, and efficient server-side solutions",
      icon: Database,
      technologies: ["Node.js", "Python", "Java", "Go", "C#"]
    },
    {
      title: "Cloud & DevOps",
      description: "Leveraging cloud platforms and automation for optimal performance",
      icon: Globe,
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"]
    },
    {
      title: "Mobile Development",
      description: "Creating cross-platform and native mobile applications",
      icon: Smartphone,
      technologies: ["React Native", "Flutter", "iOS", "Android", "Xamarin"]
    },
    {
      title: "AI & Machine Learning",
      description: "Implementing intelligent solutions and data-driven insights",
      icon: Cpu,
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face"]
    },
    {
      title: "Quality Assurance",
      description: "Ensuring robust, reliable, and bug-free software delivery",
      icon: Shield,
      technologies: ["Selenium", "Jest", "Cypress", "Postman", "LoadRunner"]
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative approach with continuous feedback and improvement",
      icon: TrendingUp
    },
    {
      title: "DevOps Practices",
      description: "Streamlining development and operations for faster delivery",
      icon: Zap
    },
    {
      title: "Design Thinking",
      description: "Human-centered approach to problem-solving and innovation",
      icon: Lightbulb
    },
    {
      title: "Continuous Learning",
      description: "Ongoing skill development and knowledge sharing",
      icon: Award
    }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <PageHero
        title="Center of Excellence"
        subtitle="Our dedicated focus areas driving innovation and technical excellence"
        cards={[
          { title: "Frontend Development", description: "Modern frameworks and UX excellence", href: "#" },
          { title: "Backend Engineering", description: "Scalable server-side solutions", href: "#" },
          { title: "Cloud & DevOps", description: "Optimized infrastructure and automation", href: "#" }
        ]}
        relatedTitle="Explore Our Expertise"
        relatedItems={[
          { title: "Services", href: "/services" },
          { title: "Solutions", href: "/solutions" },
          { title: "Technologies", href: "/solutions/trending-technology-solutions" }
        ]}
      />

      {/* Center of Excellence Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Driving Technical Excellence
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Our Center of Excellence represents our commitment to staying at the forefront of technology innovation. We continuously invest in our team's skills, adopt best practices, and leverage cutting-edge tools to deliver exceptional solutions to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Strategic Focus</h3>
              </div>
              <p className="text-foreground/90">
                Concentrating our efforts on key technology areas that drive maximum business value and innovation.
              </p>
            </Card>
            
            <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Knowledge Sharing</h3>
              </div>
              <p className="text-foreground/90">
                Promoting collaboration and knowledge transfer across teams to accelerate learning and innovation.
              </p>
            </Card>
            
            <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Industry Leadership</h3>
              </div>
              <p className="text-foreground/90">
                Establishing ourselves as thought leaders through research, publications, and community engagement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Excellence Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Areas of Excellence
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Our specialized focus areas where we maintain deep expertise and continuously innovate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excellenceAreas.map((area, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                        <area.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">{area.title}</CardTitle>
                    </div>
                    <p className="text-foreground/90">{area.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-primary/30 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Our Methodologies
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              The approaches and practices that guide our work and ensure consistent excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{method.title}</h3>
                    <p className="text-foreground/90 text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={cardVariants}>
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-8">
                <CardHeader>
                  <Badge className="bg-primary/10 border-primary/30 w-fit mb-4">Innovation</Badge>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Innovation Lab
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Our dedicated innovation lab serves as a sandbox for experimenting with emerging technologies and developing proof-of-concepts. This space allows our team to explore new possibilities and bring cutting-edge solutions to our clients.
                  </p>
                  <ul className="space-y-3 text-foreground/90">
                    <li className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Research and development of emerging technologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Prototyping and proof-of-concept development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Internal hackathons and innovation challenges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Collaboration with academic institutions and startups</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={cardVariants}>
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-primary/20 h-full">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Current Research Areas</h3>
                <div className="space-y-4">
                  {[
                    { title: "Generative AI Applications", status: "Active" },
                    { title: "Quantum Computing Integration", status: "Research" },
                    { title: "Edge Computing Solutions", status: "Pilot" },
                    { title: "Blockchain for Enterprise", status: "Evaluation" },
                    { title: "Extended Reality (XR) Interfaces", status: "Concept" }
                  ].map((research, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background/40 rounded-lg">
                      <span className="font-medium text-foreground">{research.title}</span>
                      <Badge 
                        className={
                          research.status === "Active" ? "bg-green-500/10 text-green-700 border-green-500/30" :
                          research.status === "Research" ? "bg-blue-500/10 text-blue-700 border-blue-500/30" :
                          research.status === "Pilot" ? "bg-purple-500/10 text-purple-700 border-purple-500/30" :
                          "bg-gray-500/10 text-gray-700 border-gray-500/30"
                        }
                      >
                        {research.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner with Our Center of Excellence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Leverage our specialized expertise to drive innovation and achieve your business objectives.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8 bg-white text-blue-600 hover:bg-white/90 shadow-lg">
              Connect With Our Experts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default CenterOfExcellence;