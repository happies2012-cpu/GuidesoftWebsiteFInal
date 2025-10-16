import React from 'react';
import GenericTravelPage from '@/components/ui/GenericTravelPage';
import { Plane, Code, Globe, Zap, Shield, Cloud, CheckCircle, Database } from 'lucide-react';

const AmadeusApiIntegration: React.FC = () => {
  const features = [
    { icon: <Plane className="h-6 w-6" />, title: "Flight Booking", description: "Integrate Amadeus flight search and booking APIs" },
    { icon: <Code className="h-6 w-6" />, title: "Easy Integration", description: "Simple REST API integration with comprehensive documentation" },
    { icon: <Globe className="h-6 w-6" />, title: "Global Coverage", description: "Access to 400+ airlines worldwide" },
    { icon: <Zap className="h-6 w-6" />, title: "Real-time Data", description: "Live flight availability and pricing" },
    { icon: <Shield className="h-6 w-6" />, title: "Secure", description: "Enterprise-grade security and compliance" },
    { icon: <Cloud className="h-6 w-6" />, title: "Cloud-based", description: "Scalable cloud infrastructure" },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Reliability", description: "99.9% uptime guarantee" },
    { icon: <Database className="h-6 w-6" />, title: "Rich Data", description: "Comprehensive flight and ancillary data" }
  ];

  return (
    <GenericTravelPage
      title="Amadeus API Integration"
      subtitle="Integrate powerful Amadeus travel APIs to access global flight inventory, hotel bookings, and travel services. Build comprehensive travel solutions with industry-leading technology."
      badgeText="Amadeus API"
      primaryColor="blue"
      secondaryColor="indigo"
      tertiaryColor="purple"
      features={features}
    />
  );
};

export default AmadeusApiIntegration;


