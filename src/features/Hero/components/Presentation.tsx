"use client";

import type { FC } from "react";
import { optAnimation, piecesIntro } from "../uiFactory";
import { motion } from "framer-motion";

const Presentation: FC = () => {
  return (
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
  );
};

export default Presentation;
