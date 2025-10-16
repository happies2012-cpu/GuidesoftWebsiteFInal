import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireDedicatedDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Dedicated Developers"
      subtitle="Hire dedicated developers who work exclusively on your projects. Our dedicated teams provide full commitment, seamless integration, and consistent delivery for your long-term success."
      badgeText="Dedicated Developers"
      primaryColor="green"
      secondaryColor="emerald"
      tertiaryColor="teal"
      skills={[
        "Full-time Commitment", "Direct Communication", "Code Ownership", "Flexible Scaling",
        "Technology Expertise", "Project Management", "Quality Assurance", "Continuous Integration"
      ]}
    />
  );
};

export default HireDedicatedDevelopers;