import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireSwiftDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Swift Developers"
      subtitle="Hire expert Swift developers to build high-performance iOS applications. Our developers specialize in Swift programming, iOS SDK, and Apple ecosystem development."
      badgeText="Hire Swift Developers"
      primaryColor="blue"
      secondaryColor="indigo"
      tertiaryColor="purple"
      skills={[
        "Swift", "iOS SDK", "UIKit", "SwiftUI", "Core Data",
        "REST APIs", "Firebase", "ARKit", "CoreML", "Testing"
      ]}
    />
  );
};

export default HireSwiftDevelopers;