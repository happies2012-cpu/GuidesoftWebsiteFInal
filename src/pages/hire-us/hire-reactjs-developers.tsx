import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireReactJsDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire ReactJS Developers"
      subtitle="Hire expert ReactJS developers to build dynamic, responsive web applications. Our developers specialize in React, modern JavaScript, and cutting-edge front-end technologies."
      badgeText="Hire ReactJS Developers"
      primaryColor="blue"
      secondaryColor="cyan"
      tertiaryColor="sky"
      skills={[
        "React", "JavaScript", "TypeScript", "Redux", "React Router",
        "Next.js", "REST APIs", "GraphQL", "Jest", "React Testing Library"
      ]}
    />
  );
};

export default HireReactJsDevelopers;


