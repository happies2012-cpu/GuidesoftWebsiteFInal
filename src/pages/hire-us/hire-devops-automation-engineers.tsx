import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireDevOpsAutomationEngineers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire DevOps Automation Engineers"
      subtitle="Hire expert DevOps automation engineers to automate your infrastructure and deployment processes. Our specialists implement robust automation solutions to increase efficiency and reduce manual errors."
      badgeText="DevOps Automation"
      primaryColor="orange"
      secondaryColor="amber"
      tertiaryColor="yellow"
      skills={[
        "CI/CD Automation", "Infrastructure as Code", "Scripting: Python/Bash", "Docker/Kubernetes",
        "Configuration Management: Ansible/Puppet", "Monitoring Automation", "Log Aggregation",
        "Security Automation", "Disaster Recovery Automation", "Performance Tuning", "Cloud Automation"
      ]}
    />
  );
};

export default HireDevOpsAutomationEngineers;