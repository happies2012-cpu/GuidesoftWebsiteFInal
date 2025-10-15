"use client";

import React from 'react';
import { Lightbulb, ShieldCheck, Users, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, Easing } from 'framer-motion';

const WhyChooseUsSection = () => {
  const advantages = [
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We leverage cutting-edge AI and technology to deliver forward-thinking solutions that drive real business value."
    },
    {
      icon: ShieldCheck,
      title: "Proven Expertise",
      description: "Our team comprises industry veterans and certified experts with a track record of successful project delivery."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We work closely with you to understand your needs and deliver tailored strategies."
    },
    {
      icon: Rocket,
      title: "Measurable Results",
      description: "We focus on outcomes, ensuring our solutions provide tangible benefits and a strong return on investment."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
            Why Choose Guidesoft? {/* Reverted to Guidesoft */}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the difference of partnering with a leader in IT solutions and business consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-background/40 backdrop-blur-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group h-full">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-primary/10 group-hover:bg-primary transition-all duration-300 border-2 border-primary/20 group-hover:border-primary-foreground/30 shadow-lg group-hover:shadow-xl">
                    <advantage.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{advantage.title}</h3>
                  <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;