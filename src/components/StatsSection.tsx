"use client";

import { Users, Award, TrendingUp, Globe } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";
import SmartImage from "@/components/ui/SmartImage";
import { motion, Easing } from "framer-motion"; // Import motion and Easing

const StatsSection = () => {
  const stats = [
    { icon: Users, number: "256+", label: "AI Workflows " },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: TrendingUp, number: "98%", label: "Success Rate" },
    { icon: Globe, number: "25+", label: "Countries" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" as Easing } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as Easing } },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as Easing } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative rounded-lg shadow-xl w-full h-96 object-cover overflow-hidden border border-primary/20 backdrop-blur-sm bg-background/20">
              <SmartImage
                src={teamMeeting}
                alt="Professional team meeting"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-primary-foreground p-6 rounded-lg shadow-lg border border-primary/30 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold">256+</div>
                <div className="text-sm">AI Workflows </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={contentVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
              We've More Than
              <br />
              <span className="text-primary">256+ AI Workflows </span>
            </h2>
            
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Our experienced team of consultants has helped businesses across the globe achieve their goals through strategic planning, financial expertise, and innovative solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={statItemVariants} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 backdrop-blur-sm">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;