import React from 'react';
import GenericTravelPage from '@/components/ui/GenericTravelPage';
import { Plane, Code, Globe, Zap, Shield, Cloud, CheckCircle, Database } from 'lucide-react';

const NdcApiIntegration: React.FC = () => {
  const features = [
    { icon: <Plane className="h-6 w-6" />, title: "Direct Airline Connect", description: "Connect directly to airline NDC APIs" },
    { icon: <Code className="h-6 w-6" />, title: "Modern Standards", description: "IATA NDC standard compliance" },
    { icon: <Globe className="h-6 w-6" />, title: "Rich Content", description: "Access to branded fares and ancillaries" },
    { icon: <Zap className="h-6 w-6" />, title: "Real-time Offers", description: "Dynamic pricing and personalization" },
    { icon: <Shield className="h-6 w-6" />, title: "Secure Protocol", description: "Industry-standard security" },
    { icon: <Cloud className="h-6 w-6" />, title: "Cloud Integration", description: "Scalable cloud deployment" },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Full Implementation", description: "Complete NDC capability" },
    { icon: <Database className="h-6 w-6" />, title: "Enhanced Data", description: "Rich product differentiation" }
  ];

  return (
    <GenericTravelPage
      title="NDC API Integration"
      subtitle="Integrate New Distribution Capability (NDC) APIs to access direct airline content, branded fares, and ancillary services. Build modern airline booking solutions."
      badgeText="NDC Integration"
      primaryColor="sky"
      secondaryColor="blue"
      tertiaryColor="indigo"
      features={features}
    />
  );
};

export default NdcApiIntegration;


