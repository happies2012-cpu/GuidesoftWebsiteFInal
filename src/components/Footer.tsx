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
  
  const servicesLinks = servicesCategory?.children?.slice(0, 6) || [];
  const quickLinks = [
    ...mainNavigation.filter(nav => !nav.children && nav.title !== 'Contact'),
    { title: 'AI Learning', href: '/ai-learning' },
    { title: 'Login', href: '/login' },
    { title: 'Dashboard', href: '/dashboard' }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={footerVariants} className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={guideSoftLogo} 
                alt="Guidesoft" // Reverted to Guidesoft
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
                    <Link to={link.href || "#"} className="text-muted-foreground transition-colors">
                      {link.title}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={footerVariants} className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Our Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((service) => (
                <li key={service.title}>
                  <motion.div whileHover="hover" variants={linkVariants} className="inline-block">
                    <Link to={service.href || "#"} className="text-muted-foreground transition-colors">
                      {service.title}
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
                <MapPin className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Inner Ring Road, Near to Vijayadigitals,<br />
                  Gorantla, Guntur, AP, INDIA
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@guideitsol.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@guideitsol.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contact@guideitsol.com</span>
              </div>
            </div>
            <Link to="/contact">
              <Button variant="default" className="w-full mt-6 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end hover:opacity-90 transition-opacity shadow-lg">
                Get a Free Consultation
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