import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireReactNativeDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire React Native Developers"
      subtitle="Create high-performance cross-platform mobile applications with our expert React Native developers. Delivering native-like experiences for iOS and Android from a single codebase."
      badgeText="React Native Development"
      primaryColor="blue"
      secondaryColor="indigo"
      tertiaryColor="purple"
      skills={[
        "React Native", "JavaScript", "TypeScript", "Redux", "React Navigation",
        "Expo", "Native Modules", "Push Notifications", "Firebase", "GraphQL",
        "REST APIs", "Styled Components", "Jest", "Detox", "Appium",
        "Performance Optimization", "Offline Storage", "Geolocation Services"
      ]}
    />
  );
};

export default HireReactNativeDevelopers;
