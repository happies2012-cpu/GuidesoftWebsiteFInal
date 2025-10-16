import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireQaEngineers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire QA Engineers"
      subtitle="Hire skilled QA engineers to ensure the highest quality in your software products. Our testers implement comprehensive testing strategies to identify issues and improve user experience."
      badgeText="Quality Assurance"
      primaryColor="green"
      secondaryColor="emerald"
      tertiaryColor="lime"
      skills={[
        "Manual Testing", "Automated Testing", "Selenium", "Cypress", "Jest",
        "Test Planning", "Bug Tracking", "Performance Testing", "Security Testing",
        "API Testing", "Mobile Testing", "Cross-browser Testing", "Regression Testing"
      ]}
    />
  );
};

export default HireQaEngineers;