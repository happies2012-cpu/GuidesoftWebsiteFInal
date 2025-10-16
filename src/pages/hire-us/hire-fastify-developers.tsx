import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireFastifyDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Fastify Developers"
      subtitle="Hire skilled Fastify developers to build high-performance backend applications. Our developers excel in Fastify framework and building fast web services."
      badgeText="Hire Fastify Developers"
      primaryColor="slate"
      secondaryColor="gray"
      tertiaryColor="stone"
      skills={[
        "Fastify", "Node.js", "TypeScript", "Plugins", "Schema Validation",
        "REST APIs", "WebSockets", "MongoDB", "PostgreSQL", "Performance Optimization"
      ]}
    />
  );
};

export default HireFastifyDevelopers;


