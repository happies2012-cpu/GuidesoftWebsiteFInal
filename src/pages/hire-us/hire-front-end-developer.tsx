import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireFrontEndDeveloper: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Front End Developers"
      subtitle="Hire expert front end developers to create engaging user interfaces and exceptional digital experiences. Our specialists focus on responsive design, performance optimization, and modern web technologies."
      badgeText="Front End Development"
      primaryColor="blue"
      secondaryColor="cyan"
      tertiaryColor="sky"
      skills={[
        "HTML5/CSS3", "JavaScript/TypeScript", "React/Vue/Angular", "Responsive Design",
        "CSS Frameworks: Tailwind/Bootstrap", "State Management: Redux/MobX", "Performance Optimization",
        "Accessibility Standards", "Cross-browser Compatibility", "Modern Build Tools: Webpack/Vite"
      ]}
    />
  );
};

export default HireFrontEndDeveloper;