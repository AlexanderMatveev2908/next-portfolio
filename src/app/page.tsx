import Hero from "@/features/Hero/Hero";
import Projects from "@/features/Projects/Projects";
import TechStack from "@/features/TechStack/TechStack";
import type { FC } from "react";

const Home: FC = () => {
  return (
    <div className="w-full flex flex-col gap-20">
      <Hero />

      <TechStack />

      <Projects />
    </div>
  );
};

export default Home;
