import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireIosDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire iOS Developers"
      subtitle="Hire expert iOS developers to build stunning mobile applications for iPhone and iPad. Our developers specialize in Swift, Objective-C, and Apple's latest frameworks."
      badgeText="Hire iOS Developers"
      primaryColor="blue"
      secondaryColor="cyan"
      tertiaryColor="sky"
      skills={[
        "Swift", "Objective-C", "iOS SDK", "UIKit", "SwiftUI",
        "Core Data", "REST APIs", "Firebase", "ARKit", "CoreML",
        "App Store Deployment", "Performance Optimization", "Testing"
      ]}
    />
  );
};

export default HireIosDevelopers;