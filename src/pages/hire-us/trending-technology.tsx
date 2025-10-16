import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const TrendingTechnology: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Trending Technology Developers"
      subtitle="Hire developers skilled in the latest trending technologies. Our experts stay ahead of the curve with cutting-edge skills in AI, blockchain, IoT, and emerging frameworks."
      badgeText="Trending Technology"
      primaryColor="purple"
      secondaryColor="violet"
      tertiaryColor="fuchsia"
      skills={[
        "AI/ML", "Blockchain", "IoT", "AR/VR", "Quantum Computing",
        "Edge Computing", "5G", "Cybersecurity", "DevOps", "Cloud Native"
      ]}
    />
  );
};

export default TrendingTechnology;