import React from 'react';
import GenericTravelPage from '@/components/ui/GenericTravelPage';
import { Plane, Code, Globe, Zap, Shield, Cloud, CheckCircle, Database } from 'lucide-react';

const ExpediaApiIntegration: React.FC = () => {
  const features = [
    { icon: <Plane className="h-6 w-6" />, title: "Hotel Inventory", description: "Access millions of hotel properties worldwide" },
    { icon: <Code className="h-6 w-6" />, title: "RESTful APIs", description: "Modern REST API architecture" },
    { icon: <Globe className="h-6 w-6" />, title: "Global Content", description: "Worldwide travel inventory" },
    { icon: <Zap className="h-6 w-6" />, title: "Real-time Rates", description: "Live pricing and availability" },
    { icon: <Shield className="h-6 w-6" />, title: "Trusted Platform", description: "Industry-leading security" },
    { icon: <Cloud className="h-6 w-6" />, title: "Scalable", description: "Cloud-based infrastructure" },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Easy Integration", description: "Developer-friendly APIs" },
    { icon: <Database className="h-6 w-6" />, title: "Rich Data", description: "Detailed property information" }
  ];

  return (
    <GenericTravelPage
      title="Expedia API Integration"
      subtitle="Integrate Expedia Partner Solutions APIs to access extensive hotel inventory and travel services. Build powerful booking platforms with Expedia's technology."
      badgeText="Expedia Partner Solutions"
      primaryColor="yellow"
      secondaryColor="amber"
      tertiaryColor="orange"
      features={features}
    />
  );
};

export default ExpediaApiIntegration;


