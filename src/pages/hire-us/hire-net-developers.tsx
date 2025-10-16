import React from 'react';
import GenericDeveloperPage from '@/components/ui/GenericDeveloperPage';

const HireNetDevelopers: React.FC = () => {
  return (
    <GenericDeveloperPage
      title="Hire .NET Developers"
      subtitle="Hire expert .NET developers to build robust enterprise applications. Our developers specialize in .NET Core, C#, ASP.NET, and Microsoft technologies."
      badgeText="Hire .NET Developers"
      primaryColor="purple"
      secondaryColor="violet"
      tertiaryColor="indigo"
      skills={[
        ".NET Core", "C#", "ASP.NET", "Entity Framework", "Azure",
        "SQL Server", "Web API", "Blazor", "SignalR", "MVC"
      ]}
    />
  );
};

export default HireNetDevelopers;


