"use client";

import React from 'react';
import { motion, Easing } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Network, Code, Shield, Zap, Database, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IoTAppDevelopment = () => {
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
      title: "IoT Protocol Expertise",
      description: "Mastery of MQTT, CoAP, HTTP/HTTPS, and Bluetooth Low Energy for reliable device communication.",
    },
    {
      icon: Network,
      title: "Device Connectivity",
      description: "Seamless integration of sensors, wearables, smart home devices, and industrial IoT hardware.",
    },
    {
      icon: Shield,
      title: "IoT Security",
      description: "End-to-end encryption, secure boot, and compliance with IoT security standards like NIST.",
    },
    {
      icon: Zap,
      title: "Real-Time Data Processing",
      description: "Edge computing and cloud integration for low-latency, real-time IoT data analytics.",
    },
    {
      icon: Database,
      title: "Scalable Backend",
      description: "Cloud-based IoT platforms (AWS IoT, Azure IoT) for handling massive device fleets.",
    },
    {
      icon: Target,
      title: "Industry-Specific Solutions",
      description: "Custom IoT apps for healthcare monitoring, smart manufacturing, agriculture, and logistics.",
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
                IoT App Development
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Guidesoft pioneers IoT solutions that connect the physical and digital worlds. We develop secure, scalable IoT applications for smart devices, enabling innovative business models and operational efficiency.
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
                src="/placeholder.svg" // Replace with actual IoT app mockup image
                alt="IoT App Development"
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
              Why Choose Guidesoft for IoT Development?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With expertise in embedded systems, cloud IoT platforms, and machine learning, we build intelligent IoT ecosystems that drive data-driven decisions and automation.
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
            Connect Your Devices with Guidesoft IoT
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Unlock the potential of IoT with custom applications that integrate hardware and software seamlessly. Let's innovate together.
          </p>
          <Button size="lg" className="px-8 text-lg">
            Start Your IoT Project
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default IoTAppDevelopment;
