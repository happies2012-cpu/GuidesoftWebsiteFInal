import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireHapiJsDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Hapi.js Developers"
      subtitle="Hire experienced Hapi.js developers to build scalable backend services. Our developers specialize in Hapi.js framework and Node.js ecosystem."
      badgeText="Hire Hapi.js Developers"
      primaryColor="orange"
      secondaryColor="amber"
      tertiaryColor="yellow"
      skills={[
        "Hapi.js", "Node.js", "TypeScript", "Joi Validation", "Plugins",
        "Authentication", "REST APIs", "MongoDB", "PostgreSQL", "Testing"
      ]}
    />
  );
};

export default HireHapiJsDevelopers;


