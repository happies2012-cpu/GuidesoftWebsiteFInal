import React from 'react';
import { motion, Easing } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Server, Cloud, Zap, Shield, Users, Target, HardDrive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getHeroImage } from "@/lib/image-utils";

const DataWarehousing = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const features = [
    {
      icon: Database,
      title: "Centralized Data Storage",
      description: "Consolidate data from multiple sources into a single, unified repository for comprehensive analysis and reporting.",
    },
    {
      icon: Server,
      title: "Scalable Architecture",
      description: "Design and implement data warehouse solutions that scale seamlessly with your growing data volumes and business needs.",
    },
    {
      icon: Cloud,
      title: "Cloud Data Warehousing",
      description: "Leverage cloud platforms like AWS Redshift, Google BigQuery, and Snowflake for cost-effective, high-performance data storage.",
    },
    {
      icon: Zap,
      title: "High-Performance Querying",
      description: "Optimize data structures and indexing for lightning-fast query performance and real-time analytics capabilities.",
    },
    {
      icon: Shield,
      title: "Data Security & Compliance",
      description: "Implement robust security measures including encryption, access controls, and compliance with industry regulations.",
    },
    {
      icon: HardDrive,
      title: "ETL/ELT Processes",
      description: "Design efficient data extraction, transformation, and loading pipelines to ensure data quality and consistency.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={containerVariants} className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Data Warehousing Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Build robust, scalable data warehouses that serve as the foundation for your business intelligence and analytics initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-secondary">
                  Get a Quote
                </Button>
                <Button size="lg" variant="outline">
                  View Portfolio
                </Button>
              </div>
            </motion.div>
            <motion.div variants={containerVariants} className="relative">
              <img
                src={getHeroImage('data-warehousing')}
                alt="Data Warehousing Solutions"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Data Warehousing Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our data warehousing solutions help you store, manage, and analyze large volumes of data efficiently and securely.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build Your Data Foundation for Success
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let Guidesoft design and implement a robust data warehousing solution that supports your analytics and business intelligence needs.
          </p>
          <Button size="lg" className="px-8 text-lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default DataWarehousing;