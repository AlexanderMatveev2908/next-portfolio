"use client";

import About from "./components/About";
import Presentation from "./components/Presentation";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full flex flex-col gap-6 sm:gap-12 pt-[30px] sm:pt-[50px]"
    >
      <Presentation />

      <About />
    </div>
  );
};

export default Hero;
