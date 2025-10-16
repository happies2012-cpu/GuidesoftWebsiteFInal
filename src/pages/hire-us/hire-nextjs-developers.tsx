import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireNextJsDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire Next.js Developers"
      subtitle="Hire skilled Next.js developers to build high-performance, SEO-friendly web applications. Our experts specialize in Next.js, React, and server-side rendering."
      badgeText="Hire Next.js Developers"
      primaryColor="slate"
      secondaryColor="gray"
      tertiaryColor="zinc"
      skills={[
        "Next.js", "React", "TypeScript", "SSR", "SSG",
        "API Routes", "Vercel", "Tailwind CSS", "GraphQL", "Prisma"
      ]}
    />
  );
};

export default HireNextJsDevelopers;


