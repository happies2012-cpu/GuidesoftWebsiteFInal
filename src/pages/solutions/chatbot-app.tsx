"use client";

import React from 'react';
import { motion, Easing } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Bot, Zap, Users, Shield, Brain, TrendingUp, Headphones, Settings, BarChart, ShoppingBag, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getHeroImage } from "@/lib/image-utils";

const ChatbotApp = () => {
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
      icon: MessageCircle,
      title: "Conversational AI",
      description: "Natural language processing for human-like interactions that understand context and intent.",
    },
    {
      icon: Bot,
      title: "Multi-Platform Support",
      description: "Deploy across websites, mobile apps, social media, and messaging platforms seamlessly.",
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "24/7 availability with lightning-fast responses to customer inquiries and support requests.",
    },
    {
      icon: Users,
      title: "Personalization",
      description: "Tailored experiences based on user history, preferences, and behavioral patterns.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with encryption, compliance, and privacy protection for sensitive data.",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Continuous learning from interactions to improve responses and user satisfaction over time.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into conversation metrics, user behavior, and performance analytics.",
    },
    {
      icon: Headphones,
      title: "Seamless Handoff",
      description: "Intelligent escalation to human agents when complex issues require personal attention.",
    }
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "Reduce response times and support costs with intelligent automated assistance.",
      icon: Headphones
    },
    {
      title: "E-commerce Assistant",
      description: "Guide customers through product selection, recommendations, and purchase processes.",
      icon: ShoppingBag
    },
    {
      title: "Lead Generation",
      description: "Capture and qualify leads through engaging conversations and data collection.",
      icon: Target
    },
    {
      title: "HR & Recruitment",
      description: "Streamline candidate screening, onboarding, and employee queries with chatbot automation.",
      icon: Users
    }
  ];

  const benefits = [
    "Reduce support costs by up to 30%",
    "Handle 80% of routine inquiries automatically",
    "Improve customer satisfaction scores",
    "Scale support without additional staff",
    "Capture leads 24/7",
    "Enhance user engagement"
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
                AI Chatbot Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Transform customer interactions with intelligent chatbots that provide instant, personalized support across all channels. Our AI-powered solutions reduce costs while enhancing user experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-secondary">
                  Build Your Chatbot
                </Button>
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </div>
            </motion.div>
            <motion.div variants={containerVariants} className="relative">
              <img
                src={getHeroImage('chatbot-app')}
                alt="AI Chatbot Solution"
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
              Powerful Chatbot Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our chatbot solutions combine cutting-edge AI with intuitive design to deliver exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Versatile chatbot solutions tailored to meet specific business needs across various sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
              >
                <Card className="h-full border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <useCase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our chatbot solutions deliver tangible results that drive efficiency and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg"
              >
                <BarChart className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Customer Interactions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Implement an intelligent chatbot solution that reduces costs and enhances customer experience.
          </p>
          <Button size="lg" className="px-8 text-lg bg-white text-primary hover:bg-gray-100">
            Start Your Chatbot Project
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default ChatbotApp;