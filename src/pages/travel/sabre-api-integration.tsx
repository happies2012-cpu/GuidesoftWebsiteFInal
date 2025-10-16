import React from 'react';
import GenericTravelPage from '@/components/ui/GenericTravelPage';
import { Plane, Code, Globe, Zap, Shield, Cloud, CheckCircle, Database } from 'lucide-react';

const SabreApiIntegration: React.FC = () => {
  const features = [
    { icon: <Plane className="h-6 w-6" />, title: "GDS Access", description: "Direct access to Sabre GDS for travel inventory" },
    { icon: <Code className="h-6 w-6" />, title: "API Integration", description: "RESTful and SOAP API integration options" },
    { icon: <Globe className="h-6 w-6" />, title: "Global Reach", description: "Access worldwide travel content" },
    { icon: <Zap className="h-6 w-6" />, title: "Fast Processing", description: "Quick response times for bookings" },
    { icon: <Shield className="h-6 w-6" />, title: "Secure Transactions", description: "PCI DSS compliant payment processing" },
    { icon: <Cloud className="h-6 w-6" />, title: "Cloud Platform", description: "Reliable cloud-based services" },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Complete Solution", description: "End-to-end travel booking platform" },
    { icon: <Database className="h-6 w-6" />, title: "Rich Content", description: "Comprehensive travel data and services" }
  ];

  return (
    <GenericTravelPage
      title="Sabre API Integration"
      subtitle="Integrate Sabre GDS APIs to power your travel platform with extensive flight, hotel, and car rental inventory. Build robust travel booking solutions."
      badgeText="Sabre GDS"
      primaryColor="red"
      secondaryColor="orange"
      tertiaryColor="amber"
      features={features}
    />
  );
};

export default SabreApiIntegration;


