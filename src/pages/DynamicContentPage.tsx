"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, Easing } from 'framer-motion';
import { mainNavigation, NavItem } from '@/lib/navigation-data';
import { Sparkles } from 'lucide-react';

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

const DynamicContentPage = () => {
  const { '*': path } = useParams<{ '*': string }>(); // Catch-all parameter for the dynamic path
  const currentPath = `/${path}`;
  const [pageTitle, setPageTitle] = useState("Page Not Found");
  const [pageDescription, setPageDescription] = useState("The content you are looking for does not exist or has been moved.");

  useEffect(() => {
    const navItem = findNavItemByHref(currentPath, mainNavigation);
    if (navItem) {
      setPageTitle(navItem.title);
      setPageDescription(`This is the dedicated page for ${navItem.title} services. More content coming soon!`);
    } else {
      setPageTitle("Page Not Found");
      setPageDescription("The content you are looking for does not exist or has been moved.");
    }
  }, [currentPath]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-[calc(100vh-200px)] flex items-center justify-center bg-background p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-primary-start/5 via-gradient-primary-end/5 to-cyan-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iaHNs(var(--gradient-primary-start)/0.1) )" />

      <div className="text-center relative z-10 max-w-3xl mx-auto p-8 rounded-xl bg-background/40 backdrop-blur-xl border border-primary/20 shadow-lg">
        <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent mb-4">
          {pageTitle}
        </h1>
        <p className="text-xl text-foreground max-w-2xl mx-auto">
          {pageDescription}
        </p>
      </div>
    </motion.div>
  );
};

export default DynamicContentPage;