import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const Mobile: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Mobile App Developers"
      subtitle="Create powerful, engaging mobile applications for iOS and Android with our expert mobile developers. Specializing in cross-platform solutions and native performance."
      badgeText="Mobile Development"
      primaryColor="purple"
      secondaryColor="fuchsia"
      tertiaryColor="pink"
      skills={[
        "React Native", "Flutter", "Swift", "Kotlin", "Java", "Objective-C",
        "Xamarin", "Ionic", "Cordova", "Firebase", "Push Notifications",
        "App Store Optimization", "Google Play Integration", "Mobile UI/UX",
        "Offline Storage", "Geolocation", "Camera Integration", "Payment Processing"
      ]}
    />
  );
};

export default Mobile;