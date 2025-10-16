import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import guideSoftLogo from "@/assets/guideitsol-logo.png";
import { Button } from "@/components/ui/button";
import { motion, Easing } from "framer-motion";
import { mainNavigation } from "@/lib/navigation-data"; // Import mainNavigation

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as Easing } },
  };

  const linkVariants = {
    hover: { x: 5, color: "hsl(var(--primary))" },
  };

  const socialIconVariants = {
    hover: { scale: 1.2, color: "hsl(var(--primary))" },
  };

  // Extracting categories from mainNavigation for comprehensive footer links
  const servicesCategory = mainNavigation.find(nav => nav.title === "Services");
  const solutionsCategory = mainNavigation.find(nav => nav.title === "Solutions");
  const travelCategory = mainNavigation.find(nav => nav.title === "Travel");
  const hireUsCategory = mainNavigation.find(nav => nav.title === "Hire Us");
  const companyCategory = mainNavigation.find(nav => nav.title === "Company");
  
  // Get popular services (first category from each major service area)
  const servicesLinks = [
    ...(servicesCategory?.children?.[0]?.children?.slice(0, 4) || []),
    ...(servicesCategory?.children?.[1]?.children?.slice(0, 2) || []),
  ];
  
  // Get popular solutions
  const solutionsLinks = [
    ...(solutionsCategory?.children?.[0]?.children?.slice(0, 3) || []),
    ...(solutionsCategory?.children?.[1]?.children?.slice(0, 3) || []),
  ];
  
  // Get travel links
  const travelLinks = [
    ...(travelCategory?.children?.[0]?.children?.slice(0, 3) || []),
    ...(travelCategory?.children?.[1]?.children?.slice(0, 3) || []),
  ];
  
  // Get hire us links
  const hireLinks = [
    ...(hireUsCategory?.children?.[0]?.children?.slice(0, 3) || []),
    ...(hireUsCategory?.children?.[1]?.children?.slice(0, 3) || []),
  ];
  
  const quickLinks = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/pages' },
    { title: 'All Services', href: '/services' },
    { title: 'Solutions', href: '/solutions' },
    { title: 'Travel Tech', href: '/travel' },
    { title: 'Hire Developers', href: '/hire-us' },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Blog', href: '/blog' },
    { title: 'AI Learning', href: '/ai-learning' },
    { title: 'Contact Us', href: '/contact' },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
      className="bg-dark-background text-background relative overflow-hidden"
    >
      {/* Subtle background gradient for glossy effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-background/90 to-dark-background/95 opacity-80 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBfiWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ90iBNMzYgMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9ImhzbCgyMzkgODQlIDY3JSAgLSAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <motion.div variants={footerVariants} className="space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={guideSoftLogo} 
                alt="Guidesoft"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-xl font-bold text-foreground">GuideITSol.</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Leading IT solutions provider delivering innovative technology services, software development, and digital transformation solutions for modern businesses.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a 
                href="#" 
                whileHover="hover" 
                variants={socialIconVariants} 
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover="hover" 
                variants={socialIconVariants} 
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover="hover" 
                variants={socialIconVariants} 
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover="hover" 
                variants={socialIconVariants} 
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={footerVariants} className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <motion.div whileHover="hover" variants={linkVariants} className="inline-block">
                    <Link to={link.href || "#"} className="text-muted-foreground transition-colors text-sm">
                      {link.title}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Services */}
          <motion.div variants={footerVariants} className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Popular Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((service) => (
                <li key={service.title}>
                  <motion.div whileHover="hover" variants={linkVariants} className="inline-block">
                    <Link to={service.href || "#"} className="text-muted-foreground transition-colors text-sm">
                      {service.title}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions & Travel */}
          <motion.div variants={footerVariants} className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Solutions</h3>
            <ul className="space-y-2">
              {solutionsLinks.slice(0, 5).map((solution) => (
                <li key={solution.title}>
                  <motion.div whileHover="hover" variants={linkVariants} className="inline-block">
                    <Link to={solution.href || "#"} className="text-muted-foreground transition-colors text-sm">
                      {solution.title}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-lg text-foreground mt-6">Travel Tech</h3>
            <ul className="space-y-2">
              {travelLinks.slice(0, 3).map((travel) => (
                <li key={travel.title}>
                  <motion.div whileHover="hover" variants={linkVariants} className="inline-block">
                    <Link to={travel.href || "#"} className="text-muted-foreground transition-colors text-sm">
                      {travel.title}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={footerVariants} className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Inner Ring Road, Near to Vijayadigitals,<br />
                  Gorantla, Guntur, AP, INDIA
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+91 8500647979</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">support@guideitsol.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">contact@guideitsol.com</span>
              </div>
            </div>
            <Link to="/contact">
              <Button variant="default" className="w-full mt-6 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg text-sm">
                Get a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left relative z-10">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 GuideITSol. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;