import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireTypescriptDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire TypeScript Developers"
      subtitle="Hire expert TypeScript developers to build robust, scalable applications with strong typing and modern JavaScript features. Our specialists leverage TypeScript to create maintainable and error-free code."
      badgeText="TypeScript Development"
      primaryColor="blue"
      secondaryColor="indigo"
      tertiaryColor="purple"
      skills={[
        "TypeScript", "JavaScript", "React/Vue/Angular", "Node.js", "Type Safety",
        "Interfaces & Types", "Generics", "Modules", "Decorators", "Build Tools: Webpack/Vite",
        "Testing: Jest/Cypress", "Debugging", "Performance Optimization", "Code Quality"
      ]}
    />
  );
};

export default HireTypescriptDevelopers;