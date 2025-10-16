import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Award, BarChart, Smartphone, Globe, Shield, Zap, Video, FileText, Download, Clock } from 'lucide-react';

const ELearningSolution = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Course Management",
      description: "Create, organize, and manage comprehensive online courses with multimedia content."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Student Management",
      description: "Track student progress, manage enrollments, and provide personalized learning paths."
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Learning",
      description: "Stream HD video content with adaptive bitrate and offline viewing capabilities."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certification System",
      description: "Issue digital certificates and badges upon course completion with verification."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description: "Comprehensive learning analytics to track engagement and performance metrics."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Learning",
      description: "Native mobile apps for iOS and Android with offline content synchronization."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Assessment Tools",
      description: "Create quizzes, assignments, and exams with automated grading and feedback."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-language Support",
      description: "Support for multiple languages and localization for global audiences."
    }
  ];

  const courseTypes = [
    "Professional Development", "Technical Training", "Soft Skills", "Compliance Training", 
    "Onboarding Programs", "Leadership Development", "Industry Certifications", "Academic Courses"
  ];

  const benefits = [
    "Increase learning engagement by 70%",
    "Reduce training costs by 60%",
    "Improve knowledge retention",
    "Enable self-paced learning",
    "Scale to unlimited students",
    "Track learning progress in real-time"
  ];

  const techStack = [
    "React", "Node.js", "MongoDB", "AWS", "Docker", "WebRTC", "SCORM", "xAPI"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              eLearning Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              eLearning Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Create engaging online learning experiences with our comprehensive eLearning platform. 
              Build courses, track progress, and deliver knowledge to learners worldwide with 
              advanced features and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                Start Learning
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
              Complete eLearning Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create, deliver, and manage online learning experiences
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
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white mb-4">
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

      {/* Course Types Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect for Every Learning Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From corporate training to academic courses, our platform adapts to your requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {courseTypes.map((type, index) => (
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
              Transform Learning Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our eLearning platform improves learning effectiveness and engagement
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
                <Award className="h-6 w-6 text-orange-500 flex-shrink-0" />
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
              Leveraging cutting-edge technologies for optimal learning experiences
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
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Learning?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join thousands of educators and organizations using our eLearning platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Start Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ELearningSolution;
