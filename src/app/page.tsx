import Hero from "@/features/Hero/Hero";
import TechStack from "@/features/TechStack/TechStack";
import type { FC } from "react";

const Home: FC = () => {
  return (
    <div className="w-full pt-[30px] sm:pt-[50px] flex flex-col gap-30">
      <Hero />

      <TechStack />
    </div>
  );
};

export default Home;
