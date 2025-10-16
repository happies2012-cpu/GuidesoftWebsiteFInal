import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireDevOpsEngineers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire DevOps Engineers"
      subtitle="Hire expert DevOps engineers to streamline your development and deployment processes. Our specialists optimize infrastructure, automate workflows, and ensure reliable, scalable systems."
      badgeText="DevOps Engineering"
      primaryColor="gray"
      secondaryColor="slate"
      tertiaryColor="zinc"
      skills={[
        "CI/CD Pipelines", "Docker", "Kubernetes", "AWS/Azure/GCP", "Terraform",
        "Monitoring: Prometheus/Grafana", "Logging: ELK Stack", "Infrastructure as Code",
        "Security: DevSecOps", "Performance Optimization", "Disaster Recovery"
      ]}
    />
  );
};

export default HireDevOpsEngineers;