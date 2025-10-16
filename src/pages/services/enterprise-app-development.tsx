"use client";

import React from 'react';
import { motion, Easing } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Building, Shield, Zap, Database, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getHeroImage } from "@/lib/image-utils";

const EnterpriseAppDevelopment = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const features = [
    {
      icon: Code,
      title: "Scalable Architecture",
      description: "Microservices, cloud-native design, and containerization for handling enterprise-scale workloads.",
    },
    {
      icon: Building,
      title: "Integration Capabilities",
      description: "Seamless connectivity with ERP, CRM, legacy systems, and third-party enterprise software.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Compliance with SOC 2, GDPR, HIPAA; role-based access, encryption, and audit logging.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Load balancing, caching, and database optimization for high availability and low latency.",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Big data handling, analytics integration, and secure data storage solutions.",
    },
    {
      icon: Target,
      title: "Custom Enterprise Solutions",
      description: "Tailored apps for finance, healthcare, manufacturing, retail, and government sectors.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={containerVariants} className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Enterprise App Development
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Guidesoft delivers robust, scalable enterprise applications that streamline operations, enhance collaboration, and drive digital transformation for large organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-secondary">
                  Get a Quote
                </Button>
                <Button size="lg" variant="outline">
                  View Portfolio
                </Button>
              </div>
            </motion.div>
            <motion.div variants={containerVariants} className="relative">
              <img
                src={getHeroImage('enterprise-app')} // Replace with actual enterprise app mockup image
                alt="Enterprise App Development"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Guidesoft for Enterprise Development?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our enterprise solutions are built with agility, security, and scalability in mind, using technologies like Java, .NET, Node.js, and cloud platforms to meet complex business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empower Your Enterprise with Custom Apps
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your business processes with enterprise-grade applications from Guidesoft. Let's architect your digital future.
          </p>
          <Button size="lg" className="px-8 text-lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default EnterpriseAppDevelopment;
