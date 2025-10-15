"use client";

import { Users, Award, TrendingUp, Globe } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";
import { motion, Easing } from "framer-motion"; // Import motion and Easing
import { OffersCarousel, CarouselItem } from "@/components/ui/offers-carousel";

const StatsSection = () => {
  const achievements: CarouselItem[] = [
    {
      id: 1,
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=500&q=80",
      title: "Global Clients",
      subtitle: "Serving clients worldwide with innovative solutions",
      rating: 5,
      price: "256+",
    },
    {
      id: 2,
      imageUrl: "https://images.pexels.com/photos/8386366/pexels-photo-8386366.jpeg?w=500&q=80",
      title: "Years Experience",
      subtitle: "Over a decade of delivering excellence",
      rating: 4.9,
      price: "15+",
    },
    {
      id: 3,
      imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?w=500&q=80",
      title: "Success Rate",
      subtitle: "Proven track record of successful projects",
      rating: 4.8,
      price: "98%",
    },
    {
      id: 4,
      imageUrl: "https://images.pexels.com/photos/8386442/pexels-photo-8386442.jpeg?w=500&q=80",
      title: "Countries",
      subtitle: "Global presence across multiple continents",
      rating: 4.7,
      price: "25+",
    },
    {
      id: 5,
      imageUrl: "https://images.pexels.com/photos/8386436/pexels-photo-8386436.jpeg?w=500&q=80",
      title: "AI Workflows",
      subtitle: "Advanced AI models and workflows integrated",
      rating: 5,
      price: "500+",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
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
        <OffersCarousel
          offerTitle="Our Achievements"
          offerSubtitle="Excellence in IT solutions and AI innovation"
          ctaText="View all achievements"
          onCtaClick={() => alert("Redirecting to all achievements...")}
          items={achievements}
        />
      </div>
    </motion.section>
  );
};

export default StatsSection;
