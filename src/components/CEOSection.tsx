"use client";

import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import praveenPortrait from "@/assets/praveen.png";
import { motion, Easing } from "framer-motion";

const CEOSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" as Easing } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as Easing } },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div variants={contentVariants}>
            <div className="mb-6">
              <Quote className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
                Leading Business
                <br />
                <span className="text-primary">Transformation</span>
              </h2>
            </div>
            
            <blockquote className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
              "Our mission is to empower businesses with strategic insights and innovative solutions that drive sustainable growth. We believe in building long-term partnerships that create lasting value."
            </blockquote>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">Praveen Kumar</h3>
              <p className="text-primary font-medium">CEO & Founder</p>
            </div>

            <Button size="lg" className="px-8 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
              Get Consultations
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative rounded-lg shadow-xl w-full h-[500px] object-cover overflow-hidden border border-primary/20 backdrop-blur-sm bg-background/20">
              <img
                src={praveenPortrait}
                alt="Praveen Kumar - CEO & Founder of Guidesoft"
                className="w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">GS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CEOSection;