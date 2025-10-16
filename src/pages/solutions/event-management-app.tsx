import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Ticket, BarChart, Smartphone, Globe, Shield, Zap, Camera, Mic, Wifi } from 'lucide-react';
import { useButtonActions } from '@/hooks/use-button-actions';

const EventManagementApp = () => {
  const { handleGetStarted, handleBookDemo, handleGetQuote } = useButtonActions();
  
  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Event Planning & Scheduling",
      description: "Complete event lifecycle management from planning to execution with automated workflows."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Attendee Management",
      description: "Comprehensive attendee registration, check-in, and communication tools."
    },
    {
      icon: <Ticket className="h-6 w-6" />,
      title: "Ticketing & Registration",
      description: "Customizable ticketing system with multiple pricing tiers and payment processing."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Venue Management",
      description: "Venue selection, floor plan management, and logistics coordination tools."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description: "Real-time event analytics, attendee insights, and ROI tracking."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Event App",
      description: "Native mobile apps for attendees with personalized schedules and networking."
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Live Streaming",
      description: "Integrated live streaming and recording capabilities for hybrid events."
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Networking Tools",
      description: "AI-powered matchmaking, virtual business cards, and networking features."
    }
  ];

  const eventTypes = [
    "Corporate Events", "Conferences", "Trade Shows", "Webinars", "Workshops", 
    "Seminars", "Product Launches", "Networking Events", "Virtual Events", "Hybrid Events"
  ];

  const benefits = [
    "Increase event attendance by 60%",
    "Reduce event planning time by 50%",
    "Improve attendee satisfaction scores",
    "Generate 40% more leads per event",
    "Streamline vendor management",
    "Real-time event monitoring"
  ];

  const techStack = [
    "React Native", "Node.js", "MongoDB", "Redis", "AWS", "WebRTC", "Stripe", "Twilio"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Event Management Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Event Management App
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Create, manage, and execute unforgettable events with our comprehensive event management platform. 
              From intimate gatherings to large-scale conferences, we provide all the tools you need for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => handleGetStarted('Event Management')}
              >
                Start Planning
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => handleBookDemo('Event Management')}
              >
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
              Complete Event Management Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to plan, execute, and analyze successful events
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
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
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

      {/* Event Types Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect for Every Event Type
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From small meetings to large conferences, our platform scales with your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {eventTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium">{type}</span>
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
              Measurable Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our event management platform transforms your events
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
                <BarChart className="h-6 w-6 text-purple-500 flex-shrink-0" />
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
              Leveraging cutting-edge technologies for optimal performance and scalability
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Amazing Events?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of event organizers who trust our platform to deliver exceptional experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventManagementApp;
