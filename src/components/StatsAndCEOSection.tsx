"use client";

import React from 'react';
import { motion, Easing } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, TrendingUp, Globe } from 'lucide-react';
import { ShuffleHero } from '@/components/ui/shuffle-grid';
import ceoImage from '@/assets/praveen.png';
import SmartImage from '@/components/ui/SmartImage';

const StatsAndCEOSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const stats = [
    { icon: Users, number: "256+", label: "Global Innovations", color: "text-blue-600" },
    { icon: Award, number: "15+", label: "Years Experience", color: "text-green-600" },
    { icon: TrendingUp, number: "98%", label: "Success Rate", color: "text-purple-600" },
    { icon: Globe, number: "25+", label: "Countries Served", color: "text-orange-600" },
  ];

  return (
    <>
      {/* Enhanced AI Tools Section with ShuffleHero */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-muted/30 relative"
      >
        <div className="container mx-auto px-4">
          <ShuffleHero />
        </div>
      </motion.section>

      {/* Original CEO and Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-background relative"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: CEO Image */}
            <motion.div variants={cardVariants} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-background/40 backdrop-blur-xl border border-primary/20 h-full">
                <SmartImage
                  src={ceoImage}
                  alt="CEO of Guidesoft"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/20 to-gradient-primary-end/20" />
                <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-foreground mb-1">Praveen Kumar</h3>
                  <p className="text-sm text-muted-foreground">CEO & Founder, Guidesoft</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Stats Cards */}
            <motion.div variants={cardVariants} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
                Our Achievement Stats
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group"
                  >
                    <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full group">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-primary/10 group-hover:bg-primary transition-all duration-300">
                          <stat.icon className={`h-8 w-8 ${stat.color} group-hover:text-primary-foreground transition-all duration-300`} />
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                        <p className="text-muted-foreground">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* Our Process Section */}
              <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Our Process</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background/60 border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Discovery & Analysis</h4>
                      <p className="text-sm text-muted-foreground">Understanding your business needs and objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background/60 border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Strategy & Planning</h4>
                      <p className="text-sm text-muted-foreground">Creating comprehensive roadmap for success</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background/60 border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Implementation & Delivery</h4>
                      <p className="text-sm text-muted-foreground">Executing solutions with precision and expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background/60 border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Support & Optimization</h4>
                      <p className="text-sm text-muted-foreground">Continuous improvement and ongoing support</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default StatsAndCEOSection;