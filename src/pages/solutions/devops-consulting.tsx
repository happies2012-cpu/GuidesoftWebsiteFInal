import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, Cloud, Shield, Zap, Smartphone, Globe, Database, Activity, GitBranch, Container, Monitor, Wrench } from 'lucide-react';

const DevOpsConsulting = () => {
  const features = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "CI/CD Pipeline Setup",
      description: "Implement automated continuous integration and deployment pipelines for faster releases."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Migration",
      description: "Migrate your infrastructure to AWS, Azure, or Google Cloud with zero downtime."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Integration",
      description: "Integrate security practices into your development workflow with DevSecOps."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Infrastructure as Code",
      description: "Manage infrastructure using code with Terraform, Ansible, and other IaC tools."
    },
    {
      icon: <Container className="h-6 w-6" />,
      title: "Containerization",
      description: "Containerize applications with Docker and orchestrate with Kubernetes."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Monitoring & Logging",
      description: "Set up comprehensive monitoring, logging, and alerting systems."
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "GitOps Implementation",
      description: "Implement GitOps workflows for declarative infrastructure management."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Optimize application and infrastructure performance for better scalability."
    }
  ];

  const services = [
    "DevOps Assessment", "CI/CD Implementation", "Cloud Migration", "Container Orchestration", 
    "Infrastructure Automation", "Security Integration", "Monitoring Setup", "Performance Tuning"
  ];

  const benefits = [
    "Reduce deployment time by 90%",
    "Increase deployment frequency by 50x",
    "Improve system reliability by 99.9%",
    "Reduce recovery time by 80%",
    "Lower infrastructure costs by 40%",
    "Enable faster feature delivery"
  ];

  const techStack = [
    "Docker", "Kubernetes", "AWS", "Azure", "Terraform", "Ansible", "Jenkins", "GitLab CI"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
              DevOps Consulting
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              DevOps Consulting Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your development and operations with our expert DevOps consulting. 
              Accelerate delivery, improve reliability, and scale your infrastructure with 
              modern DevOps practices and cutting-edge tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive DevOps Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end DevOps services to modernize your development and operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our DevOps Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From assessment to implementation, we cover all aspects of DevOps transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how DevOps can revolutionize your software delivery and operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg"
              >
                <Settings className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modern DevOps Tools & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with the latest and most effective DevOps tools and platforms
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Let our experts help you implement world-class DevOps practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                Get Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsConsulting;
