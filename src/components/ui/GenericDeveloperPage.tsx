import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Users, Award, Clock, Globe, Shield, Zap, CheckCircle } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface GenericDeveloperPageProps {
  title: string;
  subtitle: string;
  badgeText: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  skills: string[];
  icon?: IconDefinition;
}

const GenericDeveloperPage: React.FC<GenericDeveloperPageProps> = ({
  title,
  subtitle,
  badgeText,
  primaryColor,
  secondaryColor,
  tertiaryColor,
  skills,
  icon
}) => {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Expert Development",
      description: `Skilled ${title.toLowerCase()} with 5+ years of experience in modern frameworks.`
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dedicated Team",
      description: "Work with dedicated developers who understand your project goals."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proven Track Record",
      description: "Successfully delivered 100+ projects across various industries."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Engagement",
      description: "Hire for hourly, part-time, or full-time projects with flexible terms."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Talent Pool",
      description: "Access to top developers from around the world."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality assurance for bug-free applications."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Agile development methodology for faster time-to-market."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock support and regular progress updates."
    }
  ];

  const benefits = [
    "Access to 50+ skilled developers",
    "Average 5+ years experience",
    "99% client satisfaction rate",
    "24/7 project support",
    "Flexible engagement models",
    "Competitive pricing"
  ];

  const process = [
    "Share your project requirements",
    "We match you with suitable developers",
    "Interview and select your team",
    "Start development immediately",
    "Regular progress updates",
    "Deliver your project successfully"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br from-${primaryColor}-500/10 via-${secondaryColor}-500/10 to-${tertiaryColor}-500/10`} />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className={`mb-4 bg-${primaryColor}-100 text-${primaryColor}-800 hover:bg-${primaryColor}-200`}>
              {badgeText}
            </Badge>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-${primaryColor}-600 via-${secondaryColor}-600 to-${tertiaryColor}-600 bg-clip-text text-transparent`}>
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className={`bg-gradient-to-r from-${primaryColor}-600 to-${secondaryColor}-600 hover:from-${primaryColor}-700 hover:to-${secondaryColor}-700`}>
                Hire Now
              </Button>
              <Button size="lg" variant="outline">
                View Portfolio
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
              Why Hire Our Developers?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our developers bring expertise, experience, and dedication to your project
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
                    <div className={`w-12 h-12 bg-gradient-to-br from-${primaryColor}-500 to-${secondaryColor}-500 rounded-lg flex items-center justify-center text-white mb-4`}>
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

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our developers are proficient in the latest technologies and frameworks
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
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
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive benefits when you hire our developers
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
                <CheckCircle className={`h-6 w-6 text-${primaryColor}-500 flex-shrink-0`} />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple process to hire the perfect developer for your project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 bg-background rounded-lg shadow-sm"
              >
                <div className={`w-8 h-8 bg-gradient-to-br from-${primaryColor}-500 to-${secondaryColor}-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {index + 1}
                </div>
                <span className="text-sm font-medium">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 bg-gradient-to-r from-${primaryColor}-600 to-${secondaryColor}-600`}>
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Hire Developers?
            </h2>
            <p className={`text-xl text-${primaryColor}-100 mb-8`}>
              Start your development project with our expert developers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className={`bg-white text-${primaryColor}-600 hover:bg-gray-100`}>
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className={`border-white text-white hover:bg-white hover:text-${primaryColor}-600`}>
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GenericDeveloperPage;
