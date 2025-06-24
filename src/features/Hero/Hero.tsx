"use client";

import { HeroStyled } from "./Styled";
import About from "./components/About";
import Presentation from "./components/Presentation";

const Hero = () => {
  return (
    <HeroStyled id="#hero" className="w-full flex flex-col gap-6 sm:gap-12">
      <Presentation />

      <About />
    </HeroStyled>
  );
};

export default Hero;
