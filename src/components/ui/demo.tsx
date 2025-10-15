import { ShuffleHero } from "@/components/ui/shuffle-grid";
import IntegrationHero from "@/components/ui/integration-hero";
import Navbar from "@/components/ui/navbar";

const ShuffleHeroDemo = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <ShuffleHero />
    </div>
  );
};

const IntegrationHeroDemo = () => {
  return <IntegrationHero />;
};

const NavbarDemo = () => {
  return <Navbar />;
};

export { ShuffleHeroDemo, IntegrationHeroDemo, NavbarDemo };