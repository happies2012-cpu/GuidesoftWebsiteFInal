import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireExpressJsDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Express.js Developers"
      subtitle="Hire skilled Express.js developers to build fast, minimalist backend applications. Our developers excel in Express.js, Node.js, and RESTful API development."
      badgeText="Hire Express.js Developers"
      primaryColor="gray"
      secondaryColor="slate"
      tertiaryColor="zinc"
      skills={[
        "Express.js", "Node.js", "MongoDB", "PostgreSQL", "REST APIs",
        "Middleware", "JWT", "Passport.js", "Mongoose", "Sequelize"
      ]}
    />
  );
};

export default HireExpressJsDevelopers;


