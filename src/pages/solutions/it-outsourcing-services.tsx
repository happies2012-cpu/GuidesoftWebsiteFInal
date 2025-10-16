import React from 'react';
import { motion, Easing } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Shield, Zap, Target, Monitor, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getHeroImage } from "@/lib/image-utils";

const ITOutsourcingServices = () => {
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
      icon: Users,
      title: "Skilled IT Professionals",
      description: "Access to a pool of experienced IT professionals with specialized skills across various technologies and domains.",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Enterprise-grade security practices and compliance standards to protect your sensitive data and infrastructure.",
    },
    {
      icon: Zap,
      title: "Faster Time-to-Market",
      description: "Accelerate project delivery with dedicated teams and proven methodologies for rapid development and deployment.",
    },
    {
      icon: Target,
      title: "Cost Optimization",
      description: "Reduce operational costs by leveraging our global talent pool and efficient resource allocation strategies.",
    },
    {
      icon: Monitor,
      title: "24/7 Coverage",
      description: "Continuous support and monitoring across multiple time zones for uninterrupted business operations.",
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Benefit from diverse perspectives and best practices from our international team of technology experts.",
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
                IT Outsourcing Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Scale your technology capabilities efficiently with our comprehensive IT outsourcing services. Focus on your core business while we handle your technology needs.
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
                src={getHeroImage('it-outsourcing-services')}
                alt="IT Outsourcing Services"
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
              Strategic IT Outsourcing Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our IT outsourcing services provide flexible, scalable solutions that adapt to your business requirements and growth objectives.
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
            Scale Your Technology with Confidence
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let Guidesoft provide the expert IT outsourcing services your business needs to grow and compete effectively.
          </p>
          <Button size="lg" className="px-8 text-lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default ITOutsourcingServices;