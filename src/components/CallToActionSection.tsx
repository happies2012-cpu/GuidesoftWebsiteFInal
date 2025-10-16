"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, Easing } from 'framer-motion';

const CallToActionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.5 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-20 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Subtle background pattern for AI vibe */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iaHNs(var(--gradient-primary-start)/0.1) )" />
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/20 via-gradient-primary-end/20 to-cyan-500/20 opacity-30 backdrop-blur-sm" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div variants={textVariants}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/10 mb-6 mx-auto">
            <Sparkles className="h-12 w-12 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Partner with Guidesoft IT Solutions to unlock innovation, drive growth, and achieve your strategic objectives with confidence. {/* Reverted to Guidesoft */}
          </p>
        </motion.div>
        <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="px-8 py-6 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
            onClick={() => window.dispatchEvent(new CustomEvent('openModal', {
              detail: {
                type: 'consultation',
                data: {
                  title: 'Consultation',
                  description: 'Schedule a consultation to discuss your project requirements and how we can help.'
                }
              }
            }))}
          >
            Get a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            onClick={() => window.dispatchEvent(new CustomEvent('openModal', { 
              detail: { 
                type: 'services', 
                data: { 
                  title: 'Explore Our Services', 
                  description: 'Discover our comprehensive range of IT solutions and services.' 
                } 
              } 
            }))}
          >
            Explore Our Services
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToActionSection;