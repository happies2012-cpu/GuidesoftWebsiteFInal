import React from 'react';
import { motion, Easing } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Headphones, Shield, Zap, Users, Target, Monitor, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getHeroImage } from "@/lib/image-utils";

const ITSupportServices = () => {
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
      icon: Headphones,
      title: "24/7 Help Desk Support",
      description: "Round-the-clock technical support with rapid response times to minimize downtime and maximize productivity.",
    },
    {
      icon: Shield,
      title: "Proactive Security Monitoring",
      description: "Continuous monitoring and threat detection to protect your systems and data from cyber attacks and vulnerabilities.",
    },
    {
      icon: Zap,
      title: "Rapid Issue Resolution",
      description: "Quick diagnosis and resolution of technical issues with minimal disruption to your business operations.",
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "Experienced IT professionals assigned to your account for consistent, personalized support and relationship management.",
    },
    {
      icon: Monitor,
      title: "Remote & On-Site Support",
      description: "Flexible support options including remote assistance and on-site visits for complex issues or installations.",
    },
    {
      icon: Target,
      title: "SLA-Guaranteed Services",
      description: "Comprehensive service level agreements ensuring uptime, response times, and performance standards are met.",
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
                IT Support Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Keep your business running smoothly with our comprehensive IT support services. From help desk to infrastructure management, we've got you covered.
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
                src={getHeroImage('it-support-services')}
                alt="IT Support Services"
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
              Comprehensive IT Support Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our IT support services ensure your technology infrastructure operates at peak performance with minimal downtime.
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
            Reliable IT Support When You Need It Most
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let Guidesoft provide the expert IT support your business needs to operate efficiently and securely.
          </p>
          <Button size="lg" className="px-8 text-lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default ITSupportServices;