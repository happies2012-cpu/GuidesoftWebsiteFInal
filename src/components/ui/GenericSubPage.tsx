"use client";

import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { motion, Easing } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { mainNavigation, NavItem } from "@/lib/navigation-data";

function findNavItemByHref(href: string, items: NavItem[]): NavItem | undefined {
  for (const item of items) {
    if (item.href === href) return item;
    if (item.children) {
      const child = findNavItemByHref(href, item.children);
      if (child) return child;
    }
  }
  return undefined;
}

function findParent(href: string, items: NavItem[]): NavItem | undefined {
  for (const item of items) {
    if (item.children?.some((c) => c.href === href)) return item;
    if (item.children) {
      const res = findParent(href, item.children);
      if (res) return res;
    }
  }
  return undefined;
}

const GenericSubPage: React.FC = () => {
  const { pathname } = useLocation();

  const { title, description, related } = useMemo(() => {
    const item = findNavItemByHref(pathname, mainNavigation);
    const parent = findParent(pathname, mainNavigation);
    const relatedItems = parent?.children
      ?.filter((c) => c.href && c.href !== pathname)
      .slice(0, 8)
      .map((c) => ({ title: c.title, href: c.href as string })) || [];

    return {
      title: item?.title || "Page",
      description: item ? `Explore ${item.title} with Guidesoft.` : "Explore our solutions.",
      related: relatedItems,
    };
  }, [pathname]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <PageHero
        title={title}
        subtitle={description}
        cards={related.map((r) => ({ title: r.title, description: "Explore more", href: r.href }))}
        relatedTitle="Related"
        relatedItems={related}
      />
    </motion.div>
  );
};

export default GenericSubPage;