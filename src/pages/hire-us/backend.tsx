import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const Backend: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Backend Developers"
      subtitle="Develop robust, scalable server-side applications and APIs with our experienced backend engineers. Experts in database design, cloud infrastructure, and system architecture."
      badgeText="Backend Development"
      primaryColor="green"
      secondaryColor="emerald"
      tertiaryColor="teal"
      skills={[
        "Node.js", "Python", "Java", "Go", "C#", "PHP",
        "Express.js", "Django", "Spring Boot", "Laravel", "ASP.NET",
        "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch",
        "REST APIs", "GraphQL", "Microservices", "Docker", "Kubernetes",
        "AWS", "Azure", "GCP", "CI/CD", "Security Best Practices"
      ]}
    />
  );
};

export default Backend;