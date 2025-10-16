"use client";

import React from 'react';
import { motion, Easing } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, MapPin, Camera, Shield, Zap, MessageCircle, Star, TrendingUp, Filter, Gift, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getHeroImage } from "@/lib/image-utils";

const DatingApp = () => {
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
      icon: Heart,
      title: "Smart Matching Algorithm",
      description: "Advanced compatibility algorithms that connect users based on interests, values, and preferences.",
    },
    {
      icon: Users,
      title: "User Verification",
      description: "Multi-layer verification process including photo verification and social media integration.",
    },
    {
      icon: MapPin,
      title: "Location-Based Discovery",
      description: "Discover potential matches in your area with precise geolocation and proximity filters.",
    },
    {
      icon: Camera,
      title: "Rich Media Profiles",
      description: "Create engaging profiles with photos, videos, and detailed personal information.",
    },
    {
      icon: Shield,
      title: "Privacy & Safety",
      description: "Robust privacy controls and safety features to protect user information and ensure secure interactions.",
    },
    {
      icon: Zap,
      title: "Instant Messaging",
      description: "Real-time chat with read receipts, typing indicators, and multimedia sharing capabilities.",
    },
    {
      icon: Star,
      title: "Premium Features",
      description: "Monetization options including premium subscriptions, boosts, and special visibility features.",
    },
    {
      icon: Video,
      title: "Video Calling",
      description: "Secure video chat functionality for users to connect face-to-face before meeting in person.",
    }
  ];

  const appFeatures = [
    {
      title: "Advanced Filters",
      description: "Detailed search filters for age, location, interests, and lifestyle preferences.",
      icon: Filter
    },
    {
      title: "Swipe Mechanics",
      description: "Intuitive swipe-based interface for quick and easy match discovery.",
      icon: Heart
    },
    {
      title: "In-App Purchases",
      description: "Seamless payment integration for premium features and virtual gifts.",
      icon: Gift
    },
    {
      title: "Social Integration",
      description: "Connect with friends and import contacts for enhanced matching possibilities.",
      icon: Users
    }
  ];

  const benefits = [
    "Increase user engagement by 40%",
    "Boost retention rates with personalized matching",
    "Generate revenue through premium subscriptions",
    "Enhance safety with advanced verification",
    "Scale to millions of users",
    "Reduce development time with our framework"
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
                Dating App Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Create engaging dating platforms that connect people meaningfully. Our solutions combine cutting-edge technology with intuitive design to build successful dating applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-secondary">
                  Build Your Dating App
                </Button>
                <Button size="lg" variant="outline">
                  View Portfolio
                </Button>
              </div>
            </motion.div>
            <motion.div variants={containerVariants} className="relative">
              <img
                src={getHeroImage('dating-app')}
                alt="Dating App Solution"
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
              Core Dating App Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive functionality to create engaging and successful dating platforms.
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

      {/* App Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enhanced User Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Features designed to keep users engaged and coming back for more meaningful connections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appFeatures.map((feature, index) => (
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
              Business Advantages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dating app solutions deliver measurable results that drive growth and user satisfaction.
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
                <TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
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
            Ready to Create the Next Big Dating Platform?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us to build a dating app that connects people and creates meaningful relationships.
          </p>
          <Button size="lg" className="px-8 text-lg bg-white text-primary hover:bg-gray-100">
            Start Your Project
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default DatingApp;