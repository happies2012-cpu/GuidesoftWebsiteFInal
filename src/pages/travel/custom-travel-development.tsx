import React from 'react';
import GenericTravelPage from '@/components/ui/GenericTravelPage';
import { Code, Globe, Zap, Shield, Users, Cloud, CheckCircle, Briefcase } from 'lucide-react';

const CustomTravelDevelopment: React.FC = () => {
  const features = [
    { icon: <Code className="h-6 w-6" />, title: "Custom Development", description: "Tailor-made travel solutions for your business" },
    { icon: <Globe className="h-6 w-6" />, title: "Global Reach", description: "Multi-language and multi-currency support" },
    { icon: <Zap className="h-6 w-6" />, title: "High Performance", description: "Optimized for speed and scalability" },
    { icon: <Shield className="h-6 w-6" />, title: "Secure Platform", description: "Enterprise-grade security" },
    { icon: <Users className="h-6 w-6" />, title: "User-Centric", description: "Intuitive user experience design" },
    { icon: <Cloud className="h-6 w-6" />, title: "Cloud-based", description: "Scalable cloud infrastructure" },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Full Control", description: "Complete ownership and customization" },
    { icon: <Briefcase className="h-6 w-6" />, title: "Business Logic", description: "Custom workflows and processes" }
  ];

  return (
    <GenericTravelPage
      title="Custom Travel Development"
      subtitle="Build bespoke travel solutions tailored to your unique business requirements. From custom booking engines to complete travel management systems."
      badgeText="Custom Development"
      primaryColor="purple"
      secondaryColor="violet"
      tertiaryColor="fuchsia"
      features={features}
    />
  );
};

export default CustomTravelDevelopment;


