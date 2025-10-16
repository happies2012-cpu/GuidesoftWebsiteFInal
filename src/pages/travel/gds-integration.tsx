import React from 'react';
import GenericTravelPage from '@/components/ui/GenericTravelPage';
import { Plane, Code, Globe, Zap, Shield, Cloud, CheckCircle, Database } from 'lucide-react';

const GdsIntegration: React.FC = () => {
  const features = [
    { icon: <Plane className="h-6 w-6" />, title: "Multi-GDS Support", description: "Integrate with Amadeus, Sabre, Travelport" },
    { icon: <Code className="h-6 w-6" />, title: "Unified API", description: "Single integration for multiple GDS" },
    { icon: <Globe className="h-6 w-6" />, title: "Global Distribution", description: "Worldwide travel content access" },
    { icon: <Zap className="h-6 w-6" />, title: "Fast Booking", description: "Quick search and booking process" },
    { icon: <Shield className="h-6 w-6" />, title: "Secure", description: "Enterprise-grade security standards" },
    { icon: <Cloud className="h-6 w-6" />, title: "Cloud-based", description: "Reliable cloud infrastructure" },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Complete Integration", description: "Full GDS functionality" },
    { icon: <Database className="h-6 w-6" />, title: "Comprehensive Data", description: "Rich travel inventory data" }
  ];

  return (
    <GenericTravelPage
      title="GDS Integration Services"
      subtitle="Integrate with leading Global Distribution Systems (GDS) to access extensive travel inventory. Connect with Amadeus, Sabre, and Travelport for comprehensive travel solutions."
      badgeText="GDS Integration"
      primaryColor="purple"
      secondaryColor="violet"
      tertiaryColor="fuchsia"
      features={features}
    />
  );
};

export default GdsIntegration;


