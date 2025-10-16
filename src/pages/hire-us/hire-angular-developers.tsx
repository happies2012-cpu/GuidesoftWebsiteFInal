import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireAngularDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Angular Developers"
      subtitle="Build dynamic, scalable web applications with our expert Angular developers. Specializing in enterprise-grade solutions with robust architecture and performance optimization."
      badgeText="Angular Development"
      primaryColor="red"
      secondaryColor="orange"
      tertiaryColor="amber"
      skills={[
        "Angular", "TypeScript", "RxJS", "NgRx", "Angular Material",
        "SCSS", "Jest", "Karma", "Protractor", "Angular CLI",
        "RESTful APIs", "Progressive Web Apps", "Angular Universal",
        "Performance Optimization", "Testing & Debugging", "Component Architecture"
      ]}
    />
  );
};

export default HireAngularDevelopers;