"use client";

import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, Easing } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Zap, 
  Shield, 
  Users, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud,
  Cpu,
  GitBranch,
  Layers,
  Server,
  Terminal,
  Wrench
} from "lucide-react";
import { mainNavigation, NavItem } from '@/lib/navigation-data';

interface EnhancedPageTemplateProps {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  techStack: string[];
  projects: {
    title: string;
    description: string;
    metrics: {
      users: string;
      uptime: string;
      performance: string;
      roi: string;
    };
    technologies: string[];
  }[];
  blogPosts: {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
  }[];
  backgroundImage?: string;
}

// Helper function to find a NavItem by its href
const findNavItemByHref = (href: string, navItems: NavItem[]): NavItem | undefined => {
  for (const item of navItems) {
    if (item.href === href) {
      return item;
    }
    if (item.children) {
      const found = findNavItemByHref(href, item.children);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
};

// Helper function to find parent items
const findParentItems = (href: string, items: NavItem[]): NavItem[] => {
  const parents: NavItem[] = [];
  
  const findParents = (currentHref: string, currentItems: NavItem[], path: NavItem[] = []) => {
    for (const item of currentItems) {
      const newPath = [...path, item];
      if (item.href === currentHref) {
        parents.push(...newPath.filter((p, i) => i < newPath.length - 1));
        return;
      }
      if (item.children) {
        findParents(currentHref, item.children, newPath);
      }
    }
  };
  
  findParents(href, items);
  return parents;
};

// Get technology icons
const getTechIcon = (tech: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    "React": <Code className="w-6 h-6" />,
    "Angular": <Code className="w-6 h-6" />,
    "Vue.js": <Code className="w-6 h-6" />,
    "Node.js": <Server className="w-6 h-6" />,
    "Python": <Terminal className="w-6 h-6" />,
    "Java": <Cpu className="w-6 h-6" />,
    "PHP": <Terminal className="w-6 h-6" />,
    "Ruby": <Terminal className="w-6 h-6" />,
    "Go": <Terminal className="w-6 h-6" />,
    "Swift": <Smartphone className="w-6 h-6" />,
    "Kotlin": <Smartphone className="w-6 h-6" />,
    "Flutter": <Smartphone className="w-6 h-6" />,
    "React Native": <Smartphone className="w-6 h-6" />,
    "Docker": <Layers className="w-6 h-6" />,
    "Kubernetes": <Layers className="w-6 h-6" />,
    "AWS": <Cloud className="w-6 h-6" />,
    "Azure": <Cloud className="w-6 h-6" />,
    "GCP": <Cloud className="w-6 h-6" />,
    "MongoDB": <Database className="w-6 h-6" />,
    "PostgreSQL": <Database className="w-6 h-6" />,
    "MySQL": <Database className="w-6 h-6" />,
    "Redis": <Database className="w-6 h-6" />,
    "Elasticsearch": <Database className="w-6 h-6" />,
    "GraphQL": <GitBranch className="w-6 h-6" />,
    "REST API": <GitBranch className="w-6 h-6" />,
    "Microservices": <Layers className="w-6 h-6" />,
    "Serverless": <Cloud className="w-6 h-6" />,
    "DevOps": <Wrench className="w-6 h-6" />,
    "CI/CD": <GitBranch className="w-6 h-6" />,
  };
  
  return iconMap[tech] || <Code className="w-6 h-6" />;
};

const EnhancedPageTemplate: React.FC<EnhancedPageTemplateProps> = ({
  title,
  description,
  category,
  technologies,
  techStack,
  projects,
  blogPosts,
  backgroundImage
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as Easing } },
    hover: { y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
  };

  // Get related items for sidebar navigation
  const relatedItems = useMemo(() => {
    // This would be implemented based on the current page path
    // For now, we'll return a sample structure
    return [
      { title: "Overview", href: "#" },
      { title: "Features", href: "#" },
      { title: "Benefits", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "FAQ", href: "#" }
    ];
  }, []);

  // Get sidebar navigation items based on main navigation
  const sidebarNavItems = useMemo(() => {
    // This would be implemented to show Services, Solutions, Hire Us items
    return [
      {
        title: "Services",
        items: [
          { title: "Web Development", href: "/services/web-development" },
          { title: "Mobile Apps", href: "/services/app-development" },
          { title: "UI/UX Design", href: "/services/ui-ux-design-development" },
          { title: "Cloud Solutions", href: "/services/cloud-solutions" }
        ]
      },
      {
        title: "Solutions",
        items: [
          { title: "E-commerce", href: "/solutions/ecommerce-solutions" },
          { title: "CRM Systems", href: "/solutions/crm-systems" },
          { title: "Data Analytics", href: "/solutions/data-analytics" },
          { title: "AI Integration", href: "/solutions/ai-integration" }
        ]
      },
      {
        title: "Hire Developers",
        items: [
          { title: "React Developers", href: "/hire-us/react-developers" },
          { title: "Node.js Developers", href: "/hire-us/nodejs-developers" },
          { title: "Python Developers", href: "/hire-us/python-developers" },
          { title: "Mobile Developers", href: "/hire-us/mobile-developers" }
        ]
      }
    ];
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : "url(/src/assets/hero-bg.jpg)",
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
              {category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold">
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full text-lg font-semibold">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Navigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-6">
                    {sidebarNavItems.map((section, index) => (
                      <div key={index}>
                        <h3 className="font-medium text-foreground mb-2">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link 
                                to={item.href} 
                                className="text-muted-foreground hover:text-primary transition-colors block py-1"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            {/* Technology Section */}
            <section className="mb-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Expertise</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We leverage cutting-edge technologies to deliver innovative solutions tailored to your business needs.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <h3 className="text-xl font-semibold mb-2">{tech}</h3>
                      <p className="text-muted-foreground">
                        Advanced {tech} solutions designed for scalability and performance.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Tech Stack Section */}
            <section className="mb-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Our comprehensive technology stack ensures robust, scalable, and future-proof solutions.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <div className="mb-3 text-primary">
                        {getTechIcon(tech)}
                      </div>
                      <h3 className="font-medium">{tech}</h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Projects Section */}
            <section className="mb-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Explore our successful implementations and the impact we've made for our clients.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="bg-card border border-border rounded-xl overflow-hidden"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-6">{project.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-muted rounded-lg p-3">
                            <div className="text-2xl font-bold text-primary">{project.metrics.users}</div>
                            <div className="text-sm text-muted-foreground">Users</div>
                          </div>
                          <div className="bg-muted rounded-lg p-3">
                            <div className="text-2xl font-bold text-primary">{project.metrics.uptime}</div>
                            <div className="text-sm text-muted-foreground">Uptime</div>
                          </div>
                          <div className="bg-muted rounded-lg p-3">
                            <div className="text-2xl font-bold text-primary">{project.metrics.performance}</div>
                            <div className="text-sm text-muted-foreground">Performance</div>
                          </div>
                          <div className="bg-muted rounded-lg p-3">
                            <div className="text-2xl font-bold text-primary">{project.metrics.roi}</div>
                            <div className="text-sm text-muted-foreground">ROI</div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                        
                        <Button variant="outline">View Case Study</Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Blog Section */}
            <section className="mb-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Stay updated with the latest trends, insights, and best practices in technology.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.map((post, index) => (
                    <motion.div
                      key={index}
                      className="bg-card border border-border rounded-xl overflow-hidden"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center mt-10">
                  <Button variant="outline">View All Articles</Button>
                </div>
              </motion.div>
            </section>

            {/* Get Quote Section */}
            <section>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 md:p-12"
              >
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                  <p className="text-muted-foreground mb-8">
                    Contact us today for a free consultation and discover how our solutions can transform your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="px-8">
                      Get a Quote
                    </Button>
                    <Button size="lg" variant="outline" className="px-8">
                      Schedule a Call
                    </Button>
                  </div>
                </div>
              </motion.div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPageTemplate;