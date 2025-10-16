import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireFullStackDeveloper: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Full Stack Developers"
      subtitle="Hire versatile full stack developers who can handle both frontend and backend development. Our experts work across the entire technology stack to deliver complete solutions."
      badgeText="Full Stack Development"
      primaryColor="indigo"
      secondaryColor="blue"
      tertiaryColor="cyan"
      skills={[
        "Frontend: React/Vue/Angular", "Backend: Node.js/Python/Java", "Databases: SQL/NoSQL",
        "APIs: REST/GraphQL", "Cloud: AWS/Azure/GCP", "DevOps: Docker/Kubernetes",
        "Version Control: Git", "Testing: Unit/Integration", "Deployment: CI/CD"
      ]}
    />
  );
};

export default HireFullStackDeveloper;