"use client";

import { Button } from "@/components/ui/button";
import { Quote, Brain, Zap, Settings, TrendingUp, CheckCircle } from "lucide-react";
import { motion, Easing } from "framer-motion";
import SphereImageGrid, { ImageData } from "@/components/ui/image-sphere";

// Image data for the sphere - using local assets
const BASE_IMAGES: Omit<ImageData, 'id'>[] = [
  {
    src: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758731403/1_d8uozd.jpg",
    alt: "Business Transformation 1",
    title: "Digital Innovation",
    description: "Leading business transformation through cutting-edge digital solutions."
  },
  {
    src: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758731402/5_ionpyy.jpg",
    alt: "Business Transformation 2",
    title: "Strategic Growth",
    description: "Driving sustainable growth with data-driven strategies and insights."
  },
  {
    src: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758731402/4_zeoqje.jpg",
    alt: "Business Transformation 3",
    title: "Technology Leadership",
    description: "Pioneering technology solutions that transform businesses and industries."
  },
  {
    src: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758731402/2_hme6yu.jpg",
    alt: "Business Transformation 4",
    title: "Operational Excellence",
    description: "Optimizing operations for maximum efficiency and competitive advantage."
  },
  {
    src: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758731402/3_nfdtim.jpg",
    alt: "Business Transformation 5",
    title: "Customer Experience",
    description: "Creating exceptional customer experiences through innovative design."
  },
  {
    src: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758823070/11_c9flg6.jpg",
    alt: "Business Transformation 6",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure for modern enterprise requirements."
  },
  {
    src: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758823069/10_qujlpy.jpg",
    alt: "Business Transformation 7",
    title: "AI Integration",
    description: "Harnessing artificial intelligence to drive business intelligence."
  },
  {
    src: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758823070/8_hkn2jm.jpg",
    alt: "Business Transformation 8",
    title: "Cybersecurity",
    description: "Protecting digital assets with enterprise-grade security solutions."
  },
  {
    src: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758823069/6_li3ger.jpg",
    alt: "Business Transformation 9",
    title: "Data Analytics",
    description: "Transforming data into actionable insights for strategic decision-making."
  },
  {
    src: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758823069/12_kitql2.jpg",
    alt: "Business Transformation 10",
    title: "DevOps Excellence",
    description: "Accelerating development cycles with modern DevOps practices."
  },
  {
    src: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758823069/7_ojrozd.jpg",
    alt: "Business Transformation 11",
    title: "Mobile Innovation",
    description: "Creating engaging mobile experiences for today's digital consumers."
  },
  {
    src: "https://res.cloudinary.com/dctgknnt7/image/upload/v1758823069/9_gkuidt.jpg",
    alt: "Business Transformation 12",
    title: "E-commerce Solutions",
    description: "Building scalable e-commerce platforms for global marketplaces."
  }
];

// Generate more images by repeating the base set
const IMAGES: ImageData[] = [];
for (let i = 0; i < 60; i++) {
  const baseIndex = i % BASE_IMAGES.length;
  const baseImage = BASE_IMAGES[baseIndex];
  IMAGES.push({
    id: `img-${i + 1}`,
    ...baseImage,
    alt: `${baseImage.alt} (${Math.floor(i / BASE_IMAGES.length) + 1})`
  });
}

const CEOSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" as Easing } },
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
                <span className="text-primary">Transformation with AI Intelligence</span>
              </h2>
            </div>
            
            <blockquote className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Guidesoft, we redefine how businesses evolve — by combining human insight with AI-powered intelligence.
              We help organizations unlock new efficiencies, empower decision-making, and accelerate innovation through intelligent digital transformation.
            </blockquote>

            <blockquote className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From strategy to execution, our team integrates AI tools, automation frameworks, and data-driven workflows that transform traditional business models into agile, scalable, and future-ready ecosystems.
            </blockquote>

            {/* Our Approach Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Our Approach
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">AI-Driven Strategy:</span> We blend data analytics, predictive modeling, and automation to craft intelligent business roadmaps.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Smart Workflows:</span> Replace manual processes with AI-powered workflows that learn, adapt, and optimize continuously.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Intelligent Tools Integration:</span> Seamlessly connect AI tools for CRM, marketing, HR, finance, and operations to drive measurable efficiency.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Digital Empowerment:</span> Transform your workforce with guided AI adoption, ensuring every team benefits from augmented intelligence.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Outcomes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Outcomes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Accelerated decision-making</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Operational excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Personalized customer journeys</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Scalable systems</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">Praveen Kumar</h3>
              <p className="text-primary font-medium">CEO & Founder</p>
            </div>

            <Button size="lg" className="px-8 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
              Get Consultations
            </Button>
          </motion.div>

          {/* Interactive Image Sphere */}
          <motion.div variants={imageVariants} className="relative flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
              <SphereImageGrid
                images={IMAGES}
                containerSize={500}
                sphereRadius={180}
                dragSensitivity={0.8}
                momentumDecay={0.96}
                maxRotationSpeed={6}
                baseImageScale={0.15}
                hoverScale={1.4}
                perspective={1000}
                autoRotate={true}
                autoRotateSpeed={0.2}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CEOSection;