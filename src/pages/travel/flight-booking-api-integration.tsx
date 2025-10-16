import React from 'react';
import GenericTravelPage from '@/components/ui/GenericTravelPage';
import { Plane, Code, Globe, Zap, Shield, Cloud, CheckCircle, Database } from 'lucide-react';

const FlightBookingApiIntegration: React.FC = () => {
  const features = [
    { icon: <Plane className="h-6 w-6" />, title: "Flight Search", description: "Comprehensive flight search and filtering" },
    { icon: <Code className="h-6 w-6" />, title: "API Integration", description: "RESTful API with JSON responses" },
    { icon: <Globe className="h-6 w-6" />, title: "Global Airlines", description: "Access to 900+ airlines worldwide" },
    { icon: <Zap className="h-6 w-6" />, title: "Real-time Data", description: "Live availability and pricing" },
    { icon: <Shield className="h-6 w-6" />, title: "Secure Booking", description: "Encrypted booking transactions" },
    { icon: <Cloud className="h-6 w-6" />, title: "Cloud Platform", description: "Scalable infrastructure" },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Complete Solution", description: "Search, book, and manage flights" },
    { icon: <Database className="h-6 w-6" />, title: "Rich Content", description: "Detailed flight information" }
  ];

  return (
    <GenericTravelPage
      title="Flight Booking API Integration"
      subtitle="Integrate powerful flight booking APIs to build comprehensive flight search and booking platforms. Access global airline inventory with real-time pricing."
      badgeText="Flight API"
      primaryColor="blue"
      secondaryColor="cyan"
      tertiaryColor="sky"
      features={features}
    />
  );
};

export default FlightBookingApiIntegration;


