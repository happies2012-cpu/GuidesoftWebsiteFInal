import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireExtJsDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire ExtJS Developers"
      subtitle="Hire experienced ExtJS developers to build enterprise-grade web applications. Our developers specialize in Sencha ExtJS and complex UI development."
      badgeText="Hire ExtJS Developers"
      primaryColor="green"
      secondaryColor="lime"
      tertiaryColor="emerald"
      skills={[
        "Sencha ExtJS", "JavaScript", "MVC", "Grid", "Charts",
        "Data Binding", "Theming", "Custom Components", "REST APIs", "Testing"
      ]}
    />
  );
};

export default HireExtJsDevelopers;