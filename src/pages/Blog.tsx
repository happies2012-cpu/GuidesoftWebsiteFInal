"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock, Sparkles, Brain, Zap } from "lucide-react";
import { motion, Easing } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of AI in Tax Planning: Machine Learning Revolution",
      excerpt: "Discover how neural networks and machine learning algorithms are transforming tax strategy with predictive analytics and automated optimization.",
      author: "Dr. Sarah Chen",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "AI & Automation",
      featured: true,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Quantum Computing in M&A: Next-Gen Deal Analytics",
      excerpt: "Exploring quantum-inspired algorithms revolutionizing merger analysis and acquisition strategy with unprecedented computational power.",
      author: "Michael Zhang",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Digital Transformation",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Building Neural Financial Models with Deep Learning",
      excerpt: "Best practices for leveraging deep learning and neural networks to create adaptive financial models that learn and evolve.",
      author: "Dr. Lisa Rodriguez",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "AI & Automation",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "Robo-Advisory 3.0: The Age of Autonomous Investing",
      excerpt: "How autonomous AI agents and reinforcement learning are creating self-optimizing investment portfolios.",
      author: "David Kumar",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Smart Finance",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Digital Transformation with Generative AI",
      excerpt: "The transformative impact of generative AI models on business strategy, automation, and decision-making processes.",
      author: "Emma Watson",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Digital Transformation",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      id: 6,
      title: "Smart Retirement: AI-Powered Wealth Management",
      excerpt: "Everything you need to know about AI-enhanced retirement planning, from predictive modeling to automated portfolio rebalancing.",
      author: "James Wilson",
      date: "March 1, 2024",
      readTime: "12 min read",
      category: "Smart Finance",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gradient-primary-start/5 via-gradient-primary-end/5 to-cyan-500/5 pointer-events-none" />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/10 via-gradient-primary-end/10 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-in">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI Insights & Innovation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent animate-fade-in">
            Intelligence Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Explore the latest in AI, machine learning, and digital transformation from industry thought leaders
          </p>
        </div>
      </motion.section>

      {/* Featured Post */}
      {posts.filter(post => post.featured).map(post => (
        <motion.section
          key={post.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="py-16 relative"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="relative overflow-hidden backdrop-blur-xl bg-background/40 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(var(--gradient-primary-start)/0.6)]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-10`} />
                  <CardContent className="p-12 relative z-10">
                    <Badge className="mb-4 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end border-0">
                      <Zap className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gradient-primary-start to-gradient-primary-end flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">{post.author}</span>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button size="lg" className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Blog Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep dives into AI, automation, and the future of intelligent business solutions
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                variants={cardVariants}
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="group relative overflow-hidden backdrop-blur-xl bg-background/40 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsl(var(--gradient-primary-start)/0.5)] h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-gradient-primary-start/5 via-gradient-primary-end/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <CardContent className="p-6 relative z-10 h-full flex flex-col">
                    <Badge variant="secondary" className="mb-4 w-fit bg-primary/10 border-primary/30 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gradient-primary-start/20 to-gradient-primary-end/20 flex items-center justify-center">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">{post.author}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-primary/10">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date.split(',')[0]}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary p-0 h-auto">
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/20 via-gradient-primary-end/20 to-cyan-500/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-background/10 backdrop-blur-xl border border-primary/20 shadow-[0_0_60px_-15px_hsl(var(--gradient-primary-start)/0.5)]">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
              Join the AI Revolution
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get cutting-edge insights on AI, automation, and digital transformation delivered weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/20 focus:border-primary/50 focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              />
              <Button size="lg" className="px-8 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;