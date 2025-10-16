import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireMagentoDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Magento Developers"
      subtitle="Hire expert Magento developers to build powerful e-commerce platforms. Our developers specialize in Magento 2, custom extensions, and online store development."
      badgeText="Hire Magento Developers"
      primaryColor="orange"
      secondaryColor="amber"
      tertiaryColor="yellow"
      skills={[
        "Magento 2", "PHP", "MySQL", "Custom Modules", "Themes",
        "Payment Integration", "Performance Optimization", "APIs", "PWA", "Cloud Deployment"
      ]}
    />
  );
};

export default HireMagentoDevelopers;


