import React from 'react';
import GenericTravelPage from '@/components/ui/GenericTravelPage';
import { CreditCard, Code, Globe, Zap, Shield, Cloud, CheckCircle, Lock } from 'lucide-react';

const PaymentGatewayIntegration: React.FC = () => {
  const features = [
    { icon: <CreditCard className="h-6 w-6" />, title: "Multiple Payment Methods", description: "Support cards, wallets, and local payment methods" },
    { icon: <Code className="h-6 w-6" />, title: "Easy Integration", description: "Simple API integration with SDKs" },
    { icon: <Globe className="h-6 w-6" />, title: "Global Payments", description: "Accept payments in multiple currencies" },
    { icon: <Zap className="h-6 w-6" />, title: "Instant Processing", description: "Fast transaction processing" },
    { icon: <Shield className="h-6 w-6" />, title: "PCI Compliant", description: "Full PCI DSS compliance" },
    { icon: <Cloud className="h-6 w-6" />, title: "Cloud-based", description: "Reliable cloud payment processing" },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Fraud Protection", description: "Advanced fraud detection" },
    { icon: <Lock className="h-6 w-6" />, title: "Secure", description: "Bank-grade security" }
  ];

  return (
    <GenericTravelPage
      title="Payment Gateway Integration"
      subtitle="Integrate secure payment gateways to process travel bookings. Support multiple payment methods, currencies, and ensure PCI compliance for safe transactions."
      badgeText="Payment Integration"
      primaryColor="green"
      secondaryColor="emerald"
      tertiaryColor="teal"
      features={features}
    />
  );
};

export default PaymentGatewayIntegration;


