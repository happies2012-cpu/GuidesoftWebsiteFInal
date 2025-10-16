"use client";

import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Easing } from "framer-motion";
import { ArrowRight, Play, Users, TrendingUp, Lightbulb, Code2, Monitor, Smartphone, Cloud } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const Videos: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  const videoCategories = [
    {
      title: "Technology Explained",
      description: "In-depth explanations of complex technology concepts made simple",
      icon: Lightbulb,
      count: 12
    },
    {
      title: "Case Study Highlights",
      description: "Real-world success stories and project outcomes",
      icon: TrendingUp,
      count: 8
    },
    {
      title: "Development Process",
      description: "Behind-the-scenes looks at our development methodologies",
      icon: Code2,
      count: 6
    },
    {
      title: "Industry Insights",
      description: "Expert perspectives on technology trends and innovations",
      icon: Monitor,
      count: 10
    }
  ];

  const featuredVideos = [
    {
      title: "Building Scalable Microservices Architecture",
      duration: "12:45",
      views: "15K",
      category: "Technology Explained",
      thumbnail: "bg-gradient-to-br from-blue-500 to-indigo-600",
      description: "Learn how we design and implement scalable microservices for enterprise applications."
    },
    {
      title: "Digital Transformation Success Story",
      duration: "8:32",
      views: "8.7K",
      category: "Case Study Highlights",
      thumbnail: "bg-gradient-to-br from-purple-500 to-pink-600",
      description: "How we helped a retail giant modernize their legacy systems and improve performance by 40%."
    },
    {
      title: "Agile Development Best Practices",
      duration: "15:20",
      views: "12K",
      category: "Development Process",
      thumbnail: "bg-gradient-to-br from-green-500 to-teal-600",
      description: "Our approach to Agile methodology and how it drives faster, more efficient development cycles."
    },
    {
      title: "The Future of Cloud Computing",
      duration: "18:45",
      views: "22K",
      category: "Industry Insights",
      thumbnail: "bg-gradient-to-br from-orange-500 to-red-600",
      description: "Exploring emerging trends in cloud technology and their impact on business operations."
    }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <PageHero
        title="Video Library"
        subtitle="Educational and informative videos about technology, development, and industry insights"
        cards={[
          { title: "Technology Explained", description: "Complex concepts made simple", href: "#" },
          { title: "Case Studies", description: "Real-world success stories", href: "#" },
          { title: "Development Insights", description: "Behind-the-scenes content", href: "#" }
        ]}
        relatedTitle="Explore Our Resources"
        relatedItems={[
          { title: "Blog", href: "/blog" },
          { title: "Case Studies", href: "/company/case-studies" },
          { title: "Glossary", href: "/company/glossary" }
        ]}
      />

      {/* Video Library Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Visual Learning Resources
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Our video library offers engaging content to help you understand technology concepts, explore our work, and stay informed about industry trends. Whether you're a business leader or technology enthusiast, there's something for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {videoCategories.map((category, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all text-center h-full">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{category.title}</h3>
                    <p className="text-foreground/90 text-sm mb-3">{category.description}</p>
                    <Badge variant="outline" className="border-primary/30">
                      {category.count} videos
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Videos
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Our most popular and informative content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all h-full">
                  <div className={`h-48 ${video.thumbnail} rounded-t-lg relative flex items-center justify-center`}>
                    <div className="w-16 h-16 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-bold text-foreground line-clamp-2">{video.title}</CardTitle>
                      <Badge className="bg-primary/10 border-primary/30 whitespace-nowrap">{video.category}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Users className="h-4 w-4" />
                      <span>{video.views} views</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90 text-sm">{video.description}</p>
                    <Button variant="ghost" size="sm" className="mt-4 w-full group">
                      Watch Video
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90">
                View All Videos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Series */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Video Series
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              In-depth explorations of key technology topics
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-t-lg relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg"></div>
                  <div className="relative text-center z-10">
                    <Smartphone className="h-12 w-12 text-white mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-white">Mobile App Development</h3>
                    <p className="text-white/90">5-part series</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-foreground/90 mb-4">
                    A comprehensive guide to building modern mobile applications for iOS and Android platforms.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-center gap-2"><Play className="h-4 w-4 text-primary" /> Planning & Design</li>
                    <li className="flex items-center gap-2"><Play className="h-4 w-4 text-primary" /> Development Process</li>
                    <li className="flex items-center gap-2"><Play className="h-4 w-4 text-primary" /> Testing & Deployment</li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-4 w-full border-primary/30">
                    Start Series
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 rounded-t-lg relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg"></div>
                  <div className="relative text-center z-10">
                    <Cloud className="h-12 w-12 text-white mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-white">Cloud Infrastructure</h3>
                    <p className="text-white/90">4-part series</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-foreground/90 mb-4">
                    Understanding cloud computing platforms and how to leverage them for your business.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-center gap-2"><Play className="h-4 w-4 text-primary" /> Cloud Fundamentals</li>
                    <li className="flex items-center gap-2"><Play className="h-4 w-4 text-primary" /> Migration Strategies</li>
                    <li className="flex items-center gap-2"><Play className="h-4 w-4 text-primary" /> Security & Compliance</li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-4 w-full border-primary/30">
                    Start Series
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="bg-background/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all">
                <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-t-lg relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg"></div>
                  <div className="relative text-center z-10">
                    <Code2 className="h-12 w-12 text-white mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-white">Web Development</h3>
                    <p className="text-white/90">6-part series</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-foreground/90 mb-4">
                    Master modern web development techniques and frameworks for building responsive applications.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-center gap-2"><Play className="h-4 w-4 text-primary" /> Frontend Frameworks</li>
                    <li className="flex items-center gap-2"><Play className="h-4 w-4 text-primary" /> Backend Architecture</li>
                    <li className="flex items-center gap-2"><Play className="h-4 w-4 text-primary" /> Performance Optimization</li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-4 w-full border-primary/30">
                    Start Series
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated with Our Latest Videos</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our channel for regular updates on technology trends, development insights, and company news.
          </p>
          <Button size="lg" className="px-8 bg-white text-blue-600 hover:bg-white/90 shadow-lg">
            Subscribe Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default Videos;