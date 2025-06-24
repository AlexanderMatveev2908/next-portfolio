import Hero from "@/features/Hero/Hero";
import type { FC } from "react";

const Home: FC = () => {
  return (
    <div className="w-full pt-[30px] sm:pt-[50px]">
      <Hero />
    </div>
  );
};

export default Home;
