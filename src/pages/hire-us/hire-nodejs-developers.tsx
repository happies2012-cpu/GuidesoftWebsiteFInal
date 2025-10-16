import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireNodeJsDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Node.js Developers"
      subtitle="Build scalable, high-performance server-side applications and APIs with our expert Node.js developers. Specializing in real-time applications, microservices, and cloud-native solutions."
      badgeText="Node.js Development"
      primaryColor="green"
      secondaryColor="emerald"
      tertiaryColor="teal"
      skills={[
        "Node.js", "Express.js", "Koa.js", "Fastify", "NestJS",
        "MongoDB", "PostgreSQL", "Redis", "RabbitMQ", "Socket.IO",
        "REST APIs", "GraphQL", "JWT", "OAuth", "Docker", "Kubernetes",
        "AWS Lambda", "Microservices", "Performance Tuning", "Security Best Practices"
      ]}
    />
  );
};

export default HireNodeJsDevelopers;