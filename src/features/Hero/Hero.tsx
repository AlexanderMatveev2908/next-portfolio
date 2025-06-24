"use client";

import { motion } from "framer-motion";
import { HeroStyled } from "./Styled";
import { optAnimation, piecesIntro } from "./uiFactory";
import About from "./components/About";

const Hero = () => {
  return (
    <HeroStyled className="w-full flex flex-col gap-8 sm:gap-12">
      <div className="w-full flex flex-col gap-3 sm:gap-5">
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
      </div>

      <About />
    </HeroStyled>
  );
};

export default Hero;
