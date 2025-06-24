"use client";

import { motion } from "framer-motion";
import { HeroStyled } from "./Styled";

const Hero = () => {
  return (
    <HeroStyled>
      <motion.div className="w-full flex justify-center">
        <span className="name txt__2xl font-bold">Alexander Matveev</span>
      </motion.div>
    </HeroStyled>
  );
};

export default Hero;
