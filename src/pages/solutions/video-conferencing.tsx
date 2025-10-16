import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Video, Mic, Camera, Users, Share, MessageSquare, Circle, Shield, Zap, Smartphone, Globe, Settings } from 'lucide-react';

const VideoConferencing = () => {
  const features = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "HD Video Conferencing",
      description: "Crystal clear HD video calls with up to 4K resolution and adaptive quality."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Large Meeting Support",
      description: "Host meetings with up to 1000 participants with advanced moderation tools."
    },
    {
      icon: <Share className="h-6 w-6" />,
      title: "Screen Sharing",
      description: "Share your screen, applications, or specific windows with participants."
    },
    {
      icon: <Circle className="h-6 w-6" />,
      title: "Meeting Recording",
      description: "Record meetings with automatic transcription and cloud storage."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Chat & Collaboration",
      description: "Real-time chat, file sharing, and collaborative whiteboarding tools."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Apps",
      description: "Native mobile apps for iOS and Android with full feature parity."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "End-to-end encryption, SSO integration, and compliance with security standards."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Infrastructure",
      description: "Worldwide data centers ensure low latency and reliable connections."
    }
  ];

  const useCases = [
    "Team Meetings", "Client Presentations", "Webinars", "Training Sessions", 
    "Board Meetings", "Customer Support", "Remote Interviews", "Virtual Events"
  ];

  const benefits = [
    "Reduce travel costs by 80%",
    "Increase meeting efficiency by 40%",
    "Improve team collaboration",
    "Enable remote work flexibility",
    "Reduce carbon footprint",
    "Scale to any organization size"
  ];

  const techStack = [
    "WebRTC", "Node.js", "React", "WebSocket", "AWS", "Docker", "Kubernetes", "Redis"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Video Conferencing Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Video Conferencing Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect your team with enterprise-grade video conferencing. Host crystal-clear HD meetings, 
              webinars, and virtual events with advanced collaboration tools and security features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Start Meeting
              </Button>
              <Button size="lg" variant="outline">
                View Demo
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
              Professional Video Conferencing Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for seamless virtual meetings and collaboration
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
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From small team meetings to large-scale webinars and virtual events
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium">{useCase}</span>
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
              Transform Your Communication
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how video conferencing can transform your business operations
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
                <Video className="h-6 w-6 text-green-500 flex-shrink-0" />
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
              Built with Modern Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leveraging cutting-edge technologies for optimal performance and reliability
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
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Connect Your Team?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of organizations using our video conferencing platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VideoConferencing;
