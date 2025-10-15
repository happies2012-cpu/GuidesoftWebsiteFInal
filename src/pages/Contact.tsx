"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, Sparkles, MessageSquare, Zap } from "lucide-react";
import { toast } from "sonner";
import { motion, Easing } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message Received!", {
      description: "Our AI team will analyze your inquiry and respond within 2 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const services = [
    "AI-Powered Tax Solutions",
    "Digital Advisory Services",
    "Strategic AI Planning",
    "Intelligent Finance Planning",
    "Robo-Advisory Platform",
    "Digital Retirement Solutions",
    "Custom AI Development"
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Global HQ",
      details: ["Inner Ring Road, Near to Vijayadigitals,", "Gorantla, Guntur, AP, INDIA"],
      gradient: "from-blue-500 to-cyan-500"
    },
     {
       icon: Phone,
       title: "Contact Information",
       details: ["support@guideitsol.com", "contact@guideitsol.com"],
       gradient: "from-purple-500 to-pink-500"
     },
    {
      icon: Mail,
      title: "Digital Contact",
      details: ["AI Support: support@guideitsol.com", "Business: contact@guideitsol.com", "Careers: talent@guideitsol.com"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "24/7 AI Support",
      details: ["AI Chat: Always Available", "Human Support: 8am - 10pm EST", "Weekend: AI-Assisted"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gradient-primary-start/5 via-gradient-primary-end/5 to-cyan-500/5 pointer-events-none" />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/10 via-gradient-primary-end/10 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-in">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">24/7 AI-Powered Support</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent animate-fade-in">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Start your AI transformation journey today with instant support from our intelligent systems
          </p>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={cardVariants}>
              <Card className="relative overflow-hidden backdrop-blur-xl bg-background/40 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/5 to-gradient-primary-end/5" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-primary-start to-gradient-primary-end flex items-center justify-center shadow-lg">
                      <Send className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Send Message</h2>
                      <p className="text-sm text-muted-foreground">AI-powered response system</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                          className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        AI Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50 backdrop-blur-sm"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your AI transformation goals..."
                        rows={6}
                        className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
                      Send Message
                      <Zap className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
                  Contact Channels
                </h2>
                <p className="text-muted-foreground">
                  Multiple ways to connect with our AI-powered support team
                </p>
              </div>
              
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={cardVariants} whileHover="hover" transition={{ delay: index * 0.1 }}>
                  <Card 
                    className="relative overflow-hidden backdrop-blur-xl bg-background/40 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsl(var(--gradient-primary-start)/0.5)] group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="relative flex-shrink-0">
                          <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} rounded-xl opacity-20 blur-xl`} />
                          <div className={`relative w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/20 via-gradient-primary-end/20 to-cyan-500/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-background/10 backdrop-blur-xl border border-primary/20 shadow-[0_0_60px_-15px_hsl(var(--gradient-primary-start)/0.5)]">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
              Instant AI Consultation
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get immediate answers from our AI assistant or schedule a call with our expert team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
                Chat with AI Now
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
                Schedule Human Call
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;