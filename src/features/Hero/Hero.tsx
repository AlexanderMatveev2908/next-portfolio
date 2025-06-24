"use client";

import { motion } from "framer-motion";
import { HeroStyled } from "./Styled";
import { useSlideBounce } from "@/core/hooks/useSlideBounce";

const Hero = () => {
  const anmRight = useSlideBounce({ direction: "right" });
  const anmLeft = useSlideBounce({ direction: "left" });

  return (
    <HeroStyled className="w-full flex flex-col gap-3 sm:gap-6">
      <motion.div {...anmRight} className="w-full flex justify-center">
        <span className="grad_txt txt__2xl font-semibold">
          Alexander Matveev
        </span>
      </motion.div>

      <motion.div {...anmLeft} className="w-full flex justify-center">
        <span className="grad_txt txt__2xl font-bold">
          Full-Stack Developer
        </span>
      </motion.div>
    </HeroStyled>
  );
};

export default Hero;
