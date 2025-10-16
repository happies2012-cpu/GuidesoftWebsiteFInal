import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireGatsbyJsDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Gatsby.js Developers"
      subtitle="Hire skilled Gatsby.js developers to build blazing-fast static websites. Our developers excel in Gatsby, React, GraphQL, and modern JAMstack architecture."
      badgeText="Hire Gatsby.js Developers"
      primaryColor="purple"
      secondaryColor="violet"
      tertiaryColor="fuchsia"
      skills={[
        "Gatsby.js", "React", "GraphQL", "JAMstack", "Contentful",
        "Netlify", "WordPress Integration", "SEO", "Performance", "PWA"
      ]}
    />
  );
};

export default HireGatsbyJsDevelopers;


