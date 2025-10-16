import React from 'react';
import GenericTravelPage from '@/components/ui/GenericTravelPage';
import { Headphones, Users, Clock, Globe, MessageSquare, Shield, CheckCircle, Zap } from 'lucide-react';

const TravelCustomerSupportAndService: React.FC = () => {
  const features = [
    { icon: <Headphones className="h-6 w-6" />, title: "24/7 Support", description: "Round-the-clock customer assistance" },
    { icon: <Users className="h-6 w-6" />, title: "Dedicated Team", description: "Expert travel support specialists" },
    { icon: <Clock className="h-6 w-6" />, title: "Quick Response", description: "Fast resolution times" },
    { icon: <Globe className="h-6 w-6" />, title: "Multi-lingual", description: "Support in multiple languages" },
    { icon: <MessageSquare className="h-6 w-6" />, title: "Multi-channel", description: "Phone, email, chat, and social media" },
    { icon: <Shield className="h-6 w-6" />, title: "Reliable", description: "Consistent quality service" },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Issue Resolution", description: "Efficient problem solving" },
    { icon: <Zap className="h-6 w-6" />, title: "Proactive Support", description: "Anticipate and prevent issues" }
  ];

  return (
    <GenericTravelPage
      title="Travel Customer Support Services"
      subtitle="Provide exceptional customer support for your travel business. 24/7 multi-channel support to ensure customer satisfaction and loyalty."
      badgeText="Customer Support"
      primaryColor="indigo"
      secondaryColor="blue"
      tertiaryColor="cyan"
      features={features}
    />
  );
};

export default TravelCustomerSupportAndService;


