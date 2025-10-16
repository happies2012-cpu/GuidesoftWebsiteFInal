import React from 'react';
import { motion, Easing } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Brain, Zap, Shield, Users, Target, Rocket, Globe, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getHeroImage } from "@/lib/image-utils";

const TrendingTechnology = () => {
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
      icon: Brain,
      title: "Generative AI",
      description: "Harness the power of generative AI for content creation, design, and automated decision-making across your business processes.",
    },
    {
      icon: Cloud,
      title: "Edge AI",
      description: "Deploy AI models at the edge for real-time processing, reduced latency, and enhanced privacy in IoT and mobile applications.",
    },
    {
      icon: Zap,
      title: "Quantum Computing",
      description: "Explore quantum algorithms and computing platforms for solving complex optimization and simulation problems.",
    },
    {
      icon: Globe,
      title: "5G & Beyond",
      description: "Leverage next-generation connectivity for ultra-low latency applications, enhanced mobile experiences, and IoT deployments.",
    },
    {
      icon: Shield,
      title: "Zero Trust Security",
      description: "Implement comprehensive security frameworks that verify every user and device before granting access to resources.",
    },
    {
      icon: Rocket,
      title: "Autonomous Systems",
      description: "Develop intelligent systems that can operate independently with minimal human intervention across various domains.",
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
                Trending Technology Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Stay at the forefront of innovation with our trending technology solutions. Transform your business with the latest technological advancements.
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
                src={getHeroImage('trending-technology-solutions')}
                alt="Trending Technology Solutions"
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
              Next-Generation Technology Implementation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our trending technology solutions help you leverage the latest innovations to drive business transformation and maintain competitive advantage.
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
            Lead the Technology Revolution
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let Guidesoft help you implement trending technologies that will define the future of your industry.
          </p>
          <Button size="lg" className="px-8 text-lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default TrendingTechnology;