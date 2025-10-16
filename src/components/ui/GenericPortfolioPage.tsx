"use client";

import React from 'react';
import { motion, Easing } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, LucideIcon } from 'lucide-react';

interface PortfolioProject {
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: {
    [key: string]: string;
  };
  features: string[];
}

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Technology {
  name: string;
  category: string;
  icon: string;
}

interface PortfolioStats {
  value: string;
  label: string;
}

interface GenericPortfolioPageProps {
  title: string;
  subtitle: string;
  category: string;
  stats: PortfolioStats[];
  projects: PortfolioProject[];
  capabilities: Capability[];
  technologies: Technology[];
  ctaTitle?: string;
  ctaDescription?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const GenericPortfolioPage: React.FC<GenericPortfolioPageProps> = ({
  title,
  subtitle,
  category,
  stats,
  projects,
  capabilities,
  technologies,
  ctaTitle = "Ready to Start Your Project?",
  ctaDescription = "Let's create a custom solution that drives results and exceeds your expectations",
  gradientFrom = "blue-600",
  gradientTo = "cyan-600"
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-br from-${gradientFrom}/10 via-${gradientTo}/10 to-${gradientFrom}/5`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className={`mb-4 bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}>
              {category}
            </Badge>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-${gradientFrom} via-${gradientTo} to-${gradientFrom} bg-clip-text text-transparent`}>
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}>
                Start Your Project
              </Button>
              <Button size="lg" variant="outline">
                Download Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-12 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} text-white`}>
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} gap-8 text-center`}>
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our successful implementations and client success stories
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className={`absolute top-4 left-4 bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}>
                        {project.category}
                      </Badge>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">Client: {project.client}</p>
                      <p className="text-muted-foreground mb-6">{project.description}</p>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-3 bg-primary/5 rounded-lg">
                            <div className="text-2xl font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key.replace(/_/g, ' ')}</div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold mb-2">Technologies Used:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <p className="text-sm font-semibold mb-2">Key Features:</p>
                        <ul className="space-y-2">
                          {project.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="mt-6" variant="outline">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      {capabilities.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Capabilities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions across all aspects of development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className={`w-12 h-12 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} rounded-lg flex items-center justify-center mb-4`}>
                        <capability.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>{capability.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Stack */}
      {technologies.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Technology Stack</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technologies powering our solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-card border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <div className="font-semibold mb-1">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">{tech.category}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r from-${gradientFrom} via-${gradientTo} to-${gradientFrom} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {ctaTitle}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-50">
            {ctaDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenericPortfolioPage;
