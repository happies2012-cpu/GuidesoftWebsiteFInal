import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireGolangDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Golang Developers"
      subtitle="Hire expert Golang developers to build efficient, concurrent backend systems. Our developers specialize in Go programming and building scalable microservices."
      badgeText="Hire Golang Developers"
      primaryColor="cyan"
      secondaryColor="sky"
      tertiaryColor="blue"
      skills={[
        "Golang", "Goroutines", "Channels", "Microservices", "gRPC",
        "REST APIs", "Docker", "Kubernetes", "PostgreSQL", "Redis"
      ]}
    />
  );
};

export default HireGolangDevelopers;


