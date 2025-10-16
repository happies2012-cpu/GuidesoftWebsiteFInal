import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { mainNavigation } from "@/lib/navigation-data";
import { NavigationMenuViewport } from "@/components/ui/navigation-menu";
import MegaMenuPanel from './MegaMenuPanel';

const MainNav = () => {
  const location = useLocation();

  return (
    <NavigationMenu className="hidden lg:flex relative z-[999999] overflow-visible w-full justify-center">
      <NavigationMenuList className="w-full justify-center">
        {mainNavigation.map((item) => {
          const itemIsActive = location.pathname === item.href;

          if (item.children && item.children.length > 0) {
            return (
              <NavigationMenuItem key={item.title} className="relative">
                <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), "text-foreground px-3 py-2", itemIsActive && "text-primary font-medium")}>
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black border border-white/10 shadow-2xl text-white w-full">
                  <MegaMenuPanel items={item.children} locationPathname={location.pathname} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem key={item.title}>
                <Link to={item.href || "#"}>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-foreground px-3 py-2", itemIsActive && "text-primary font-medium")}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
      <NavigationMenuViewport className="w-full max-w-full" />
    </NavigationMenu>
  );
};

export default MainNav;