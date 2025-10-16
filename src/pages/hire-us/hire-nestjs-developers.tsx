import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireNestJsDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire NestJS Developers"
      subtitle="Hire expert NestJS developers to build enterprise-grade backend applications. Our developers specialize in NestJS, TypeScript, and scalable architecture."
      badgeText="Hire NestJS Developers"
      primaryColor="red"
      secondaryColor="rose"
      tertiaryColor="pink"
      skills={[
        "NestJS", "TypeScript", "Node.js", "Microservices", "TypeORM",
        "Prisma", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"
      ]}
    />
  );
};

export default HireNestJsDevelopers;


