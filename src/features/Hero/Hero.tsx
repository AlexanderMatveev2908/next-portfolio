"use client";

import { motion } from "framer-motion";
import { HeroStyled } from "./Styled";
import { optAnimation, piecesIntro } from "./uiFactory";

const Hero = () => {
  return (
    <HeroStyled className="w-full flex flex-col gap-3 sm:gap-6">
      {piecesIntro.map((el, i) => (
        <motion.div
          key={el.id}
          custom={i}
          variants={optAnimation}
          initial="hidden"
          animate="visible"
          // {...(i % 2 === 0 ? anmRight : anmLeft)}

          className="w-full flex justify-center"
        >
          <span className={`grad_txt ${el.fnt}`}>{el.txt}</span>
        </motion.div>
      ))}
    </HeroStyled>
  );
};

export default Hero;
