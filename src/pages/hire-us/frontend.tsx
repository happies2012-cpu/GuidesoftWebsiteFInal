import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const Frontend: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Frontend Developers"
      subtitle="Build stunning user interfaces and exceptional digital experiences with our expert frontend developers. Specializing in modern frameworks and responsive design."
      badgeText="Frontend Development"
      primaryColor="blue"
      secondaryColor="cyan"
      tertiaryColor="sky"
      skills={[
        "React", "Vue.js", "Angular", "Next.js", "Nuxt.js",
        "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass",
        "Tailwind CSS", "Bootstrap", "Redux", "RxJS", "Webpack",
        "Responsive Design", "UI/UX Integration", "Performance Optimization"
      ]}
    />
  );
};

export default Frontend;