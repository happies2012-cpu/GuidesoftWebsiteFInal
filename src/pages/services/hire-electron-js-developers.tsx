import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireElectronJsDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Electron.js Developers"
      subtitle="Hire expert Electron.js developers to build cross-platform desktop applications. Our developers specialize in Electron, Node.js, and desktop app development."
      badgeText="Hire Electron.js Developers"
      primaryColor="blue"
      secondaryColor="indigo"
      tertiaryColor="purple"
      skills={[
        "Electron.js", "Node.js", "JavaScript", "TypeScript", "React",
        "Cross-platform", "Native Modules", "IPC", "Auto-updates", "Distribution"
      ]}
    />
  );
};

export default HireElectronJsDevelopers;