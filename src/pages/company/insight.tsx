"use client";

import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Easing } from "framer-motion";
import { ArrowRight, TrendingUp, Lightbulb, Target, Users, Award, Calendar, BookOpen, BarChart3, Globe, Cpu, Zap, Shield, Leaf } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const Insight: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const insights = [
    {
      title: "The Rise of Low-Code Development Platforms",
      category: "Technology Trends",
      date: "September 15, 2024",
      excerpt: "How low-code platforms are democratizing software development and enabling faster digital transformation across industries.",
      readTime: "5 min read",
      icon: Zap
    },
    {
      title: "Cybersecurity in the Age of Remote Work",
      category: "Security",
      date: "September 10, 2024",
      excerpt: "Best practices for maintaining robust security protocols while supporting distributed teams and remote operations.",
      readTime: "7 min read",
      icon: Shield
    },
    {
      title: "Sustainable Tech: Green Coding Practices",
      category: "Sustainability",
      date: "September 5, 2024",
      excerpt: "Exploring how developers can reduce the environmental impact of software through efficient coding and infrastructure optimization.",
      readTime: "6 min read",
      icon: Leaf
    },
    {
      title: "The Future of AI in Enterprise Applications",
      category: "Artificial Intelligence",
      date: "August 28, 2024",
      excerpt: "How businesses are integrating AI capabilities into their core operations to drive efficiency and innovation.",
      readTime: "8 min read",
      icon: Cpu
    }
  ];

  const categories = [
    { name: "Technology Trends", count: 12, icon: TrendingUp },
    { name: "Industry Insights", count: 8, icon: BarChart3 },
    { name: "Best Practices", count: 15, icon: Target },
    { name: "Case Studies", count: 7, icon: Award },
    { name: "Security", count: 9, icon: Shield },
    { name: "Sustainability", count: 5, icon: Leaf }
  ];

  const popularTopics = [
    "Digital Transformation",
    "Cloud Migration",
    "DevOps Practices",
    "Microservices Architecture",
    "Data Analytics",
    "User Experience Design",
    "API Integration",
    "Scalable Infrastructure"
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <PageHero
        title="Insights & Perspectives"
        subtitle="Thought leadership and industry insights from our technology experts"
        cards={[
          { title: "Latest Trends", description: "Stay updated with technology developments", href: "#" },
          { title: "Expert Opinions", description: "Perspectives from our technology leaders", href: "#" },
          { title: "Industry Reports", description: "In-depth analysis and research findings", href: "#" }
        ]}
        relatedTitle="Explore Our Resources"
        relatedItems={[
          { title: "Blog", href: "/blog" },
          { title: "Case Studies", href: "/company/case-studies" },
          { title: "Videos", href: "/company/videos" }
        ]}
      />

      {/* Insights Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technology Insights & Analysis
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Our team of experts shares insights on emerging technologies, industry trends, and best practices to help you navigate the ever-evolving digital landscape. Stay informed with our curated content designed for technology leaders and decision-makers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Expert Perspectives</h3>
              </div>
              <p className="text-foreground/90">
                Gain insights from our seasoned professionals with decades of experience across diverse technology domains.
              </p>
            </Card>
            
            <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Industry Trends</h3>
              </div>
              <p className="text-foreground/90">
                Stay ahead of the curve with our analysis of emerging technologies and market developments.
              </p>
            </Card>
            
            <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Actionable Insights</h3>
              </div>
              <p className="text-foreground/90">
                Practical advice and strategies you can implement to drive innovation and business growth.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Insights
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Our most recent and impactful articles and analyses
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-t-lg md:rounded-l-lg md:rounded-t-none h-48 md:h-auto"></div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-primary/10 border-primary/30">Featured</Badge>
                      <span className="text-sm text-foreground/80">September 18, 2024</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">The Evolution of Cloud-Native Development</h3>
                    <p className="text-foreground/90 mb-4">
                      Exploring how cloud-native principles are reshaping application development and deployment strategies for modern enterprises.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-foreground/80">
                        <Users className="h-4 w-4" />
                        <span>12 min read</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-t-lg md:rounded-l-lg md:rounded-t-none h-48 md:h-auto"></div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-primary/10 border-primary/30">Research</Badge>
                      <span className="text-sm text-foreground/80">September 12, 2024</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Measuring Developer Productivity in the Modern Era</h3>
                    <p className="text-foreground/90 mb-4">
                      New metrics and approaches for assessing and improving developer effectiveness in agile environments.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-foreground/80">
                        <Users className="h-4 w-4" />
                        <span>9 min read</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full">
                  <div className={`h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-t-lg relative flex items-center justify-center`}>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <insight.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-bold text-foreground line-clamp-2">{insight.title}</CardTitle>
                      <Badge className="bg-primary/10 border-primary/30 whitespace-nowrap text-xs">
                        {insight.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Calendar className="h-4 w-4" />
                      <span>{insight.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 text-sm mb-4 line-clamp-3">{insight.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground/80">{insight.readTime}</span>
                      <Button variant="ghost" size="sm" className="group p-0 h-auto">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Topics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Browse by Category
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((category, index) => (
                  <motion.div key={index} variants={cardVariants} whileHover="hover">
                    <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                            <category.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{category.name}</h4>
                            <p className="text-sm text-foreground/80">{category.count} articles</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Popular Topics
              </h3>
              <div className="flex flex-wrap gap-3">
                {popularTopics.map((topic, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2 text-base border-primary/30 hover:bg-primary/10 cursor-pointer">
                    {topic}
                  </Badge>
                ))}
              </div>
              
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 p-6 mt-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Subscribe to Our Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 mb-4">
                    Get the latest insights, trends, and expert perspectives delivered directly to your inbox.
                  </p>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-1 px-4 py-2 bg-background border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Deepen Your Technology Knowledge</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our comprehensive library of articles, case studies, and research to stay informed about the latest developments in technology.
          </p>
          <Link to="/blog">
            <Button size="lg" className="px-8 bg-white text-blue-600 hover:bg-white/90 shadow-lg">
              Visit Our Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Insight;