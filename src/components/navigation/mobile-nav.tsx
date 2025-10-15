import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { mainNavigation, NavItem } from "@/lib/navigation-data";
import guideSoftLogo from "@/assets/guidesoft-logo.png";

interface MobileNavProps {
  onOpenChange: (open: boolean) => void;
  isOpen: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ onOpenChange, isOpen }) => {
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const renderMobileNavItems = (items: NavItem[], level: number = 0) => {
    return items.map((item) => (
      <React.Fragment key={item.title}>
        {item.children && item.children.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={item.title} className="border-b-0">
              <AccordionTrigger className={cn(
                "py-3 text-base font-medium hover:no-underline",
                level === 0 ? "text-foreground" : "text-muted-foreground",
                isActive(item.href || "") && "text-primary"
              )}>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="pl-4 bg-background/20 border-l border-primary/10">
                {renderMobileNavItems(item.children, level + 1)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <Link
            to={item.href || "#"}
            className={cn(
              "block py-3 text-base font-medium hover:text-primary transition-colors",
              level === 0 ? "text-foreground" : "text-muted-foreground",
              isActive(item.href || "") && "text-primary"
            )}
            onClick={() => onOpenChange(false)}
          >
            {item.title}
          </Link>
        )}
      </React.Fragment>
    ));
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] flex flex-col bg-background/80 backdrop-blur-xl border-primary/20">
        <div className="flex items-center space-x-3 py-4 border-b border-primary/20 mb-4">
          <img
            src={guideSoftLogo}
            alt="Guidesoft IT Solutions" // Reverted to Guidesoft
            className="w-8 h-8 rounded-lg"
          />
          <span className="text-lg font-semibold text-foreground">Guidesoft IT Solutions</span> {/* Reverted to Guidesoft */}
        </div>
        <nav className="flex-1 overflow-y-auto">
          {renderMobileNavItems(mainNavigation)}
        </nav>
        <div className="mt-auto py-4 border-t border-primary/20">
          <Link to="/contact" onClick={() => onOpenChange(false)}>
            <Button variant="default" className="w-full bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
              Get A Quote →
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;