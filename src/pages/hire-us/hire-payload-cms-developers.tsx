import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HirePayloadCmsDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Payload CMS Developers"
      subtitle="Hire expert Payload CMS developers to build powerful, customizable content management systems. Our specialists work with this React-based headless CMS to create flexible, scalable content solutions."
      badgeText="Payload CMS Development"
      primaryColor="black"
      secondaryColor="gray"
      tertiaryColor="slate"
      skills={[
        "Payload CMS", "React", "TypeScript", "Node.js", "MongoDB",
        "Custom Fields", "Access Control", "REST/GraphQL APIs", "Admin UI Customization",
        "Plugin Development", "Performance Optimization", "Security Best Practices"
      ]}
    />
  );
};

export default HirePayloadCmsDevelopers;