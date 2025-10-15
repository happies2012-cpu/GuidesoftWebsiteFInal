import { Calculator, TrendingUp, Target, PieChart, BarChart3, Users, Code, Globe, Lightbulb, CheckCircle, Layers, Cloud, Shield, Truck, Coffee, ShoppingCart, Video, MessageSquare, Plane, Hotel, Car, Ship, LucideIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { mainNavigation, NavItem } from "@/lib/navigation-data"; // Import mainNavigation and NavItem

const Services = () => {
  // Helper to get a Lucide icon based on a title keyword
  const getIconForTitle = (title: string): LucideIcon | undefined => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("web development")) return Code;
    if (lowerTitle.includes("app development")) return Globe;
    if (lowerTitle.includes("ui/ux")) return Lightbulb;
    if (lowerTitle.includes("ecommerce")) return ShoppingCart;
    if (lowerTitle.includes("full stack")) return Layers;
    if (lowerTitle.includes("cross platform")) return CheckCircle;
    if (lowerTitle.includes("data engineering")) return BarChart3;
    if (lowerTitle.includes("it consulting")) return Users;
    if (lowerTitle.includes("android app")) return Globe;
    if (lowerTitle.includes("ios app")) return Target;
    if (lowerTitle.includes("iot app")) return Cloud;
    if (lowerTitle.includes("native app")) return Shield;
    if (lowerTitle.includes("flutter app")) return Plane;
    if (lowerTitle.includes("progressive web")) return TrendingUp;
    if (lowerTitle.includes("enterprise app")) return PieChart;
    if (lowerTitle.includes("travel portal")) return Hotel;
    if (lowerTitle.includes("travel booking")) return Car;
    if (lowerTitle.includes("white label")) return Ship;
    if (lowerTitle.includes("api integration")) return Calculator;
    if (lowerTitle.includes("global distribution")) return TrendingUp;
    if (lowerTitle.includes("hire")) return Users;
    if (lowerTitle.includes("on-demand")) return Truck;
    if (lowerTitle.includes("booking app")) return Coffee;
    if (lowerTitle.includes("chatbot")) return MessageSquare;
    if (lowerTitle.includes("food delivery")) return Truck;
    if (lowerTitle.includes("video streaming")) return Video;
    return undefined; // Default or fallback icon
  };

  // Flatten and select a diverse set of services from mainNavigation
  const allServices: NavItem[] = [];
  mainNavigation.forEach(navItem => {
    if (navItem.title === "Services" && navItem.children) {
      navItem.children.forEach(subCategory => {
        if (subCategory.children) {
          allServices.push(...subCategory.children);
        } else {
          allServices.push(subCategory);
        }
      });
    }
  });

  // Filter out duplicates and select a representative set (e.g., first 6 unique titles)
  const uniqueServices = Array.from(new Map(allServices.map(item => [item.title, item])).values());
  const selectedServices = uniqueServices.slice(0, 6); // Display first 6 unique services

  const servicesToDisplay = selectedServices.map((service, index) => ({
    icon: getIconForTitle(service.title),
    // Removed the generic placeholder image, now ServiceCard will use the icon if image is undefined
    title: service.title,
    description: `Explore our ${service.title.toLowerCase()} solutions designed to drive your business forward.`,
    href: service.href || "#",
    isHighlighted: index === 1 // Highlight the second card as an example
  }));

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gradient-primary-start via-gradient-primary-end to-cyan-500 bg-clip-text text-transparent">
            Our Professional Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide comprehensive business consulting services to help your company achieve sustainable growth and success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToDisplay.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              // image={service.image} // No longer passing a generic image
              title={service.title}
              description={service.description}
              href={service.href}
              isHighlighted={service.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;