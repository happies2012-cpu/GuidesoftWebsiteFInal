import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, TrendingUp, Database, Brain, Smartphone, Globe, Shield, Zap, PieChart, LineChart, Activity, Target } from 'lucide-react';

const DataAnalytics = () => {
  const features = [
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive data analysis with statistical modeling and predictive insights."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Real-time Dashboards",
      description: "Interactive dashboards with live data updates and customizable visualizations."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Integration",
      description: "Connect to multiple data sources and APIs for unified analytics."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms provide automated insights and recommendations."
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Data Visualization",
      description: "Rich visualizations including charts, graphs, and interactive reports."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Analytics",
      description: "Access analytics on-the-go with responsive mobile applications."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "KPI Tracking",
      description: "Monitor key performance indicators with automated alerts and reporting."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Performance Monitoring",
      description: "Track system performance and business metrics in real-time."
    }
  ];

  const analyticsTypes = [
    "Business Intelligence", "Customer Analytics", "Marketing Analytics", "Financial Analytics", 
    "Operational Analytics", "Predictive Analytics", "Descriptive Analytics", "Prescriptive Analytics"
  ];

  const benefits = [
    "Improve decision-making by 65%",
    "Reduce data processing time by 80%",
    "Increase revenue through insights",
    "Optimize business processes",
    "Identify new opportunities",
    "Enhance customer experience"
  ];

  const techStack = [
    "Python", "R", "SQL", "Tableau", "Power BI", "Apache Spark", "Hadoop", "AWS"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
              Data Analytics Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Data Analytics Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your data into actionable insights with our comprehensive analytics platform. 
              Make data-driven decisions, identify trends, and optimize business performance with 
              advanced analytics and visualization tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Start Analyzing
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
              Comprehensive Analytics Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to analyze data and gain valuable business insights
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
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
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

      {/* Analytics Types Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Analytics for Every Business Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From descriptive to predictive analytics, we cover all your data analysis requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {analyticsTypes.map((type, index) => (
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
              Drive Business Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how data analytics can transform your business operations
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
                <BarChart className="h-6 w-6 text-indigo-500 flex-shrink-0" />
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
              Leveraging cutting-edge technologies for powerful analytics capabilities
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
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of businesses using our analytics platform to drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                Start Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;
