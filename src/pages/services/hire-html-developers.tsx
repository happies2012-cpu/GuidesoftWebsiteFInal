import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireHtmlDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire HTML Developers"
      subtitle="Hire skilled HTML/CSS developers to build responsive, accessible web interfaces. Our developers specialize in semantic HTML, modern CSS, and web standards."
      badgeText="Hire HTML Developers"
      primaryColor="orange"
      secondaryColor="red"
      tertiaryColor="rose"
      skills={[
        "HTML5", "CSS3", "SASS", "Responsive Design", "Bootstrap",
        "Tailwind CSS", "Accessibility", "SEO", "Cross-browser", "Performance"
      ]}
    />
  );
};

export default HireHtmlDevelopers;