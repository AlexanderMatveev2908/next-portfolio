/** @jsxImportSource @emotion/react */

"use client";

import type { FC } from "react";
import { btnFancySVGs, optFancyV2 } from "../../uiFactory/index";
import { easeInOut, motion } from "framer-motion";
import { css } from "@emotion/react";
import { genRandom } from "@/core/lib/etc";

type PropsType = {
  isHover: boolean;
};

const SvgParty: FC<PropsType> = ({ isHover }) => {
  return btnFancySVGs.map((el, i) => (
    <motion.div
      key={el.id}
      css={css`
        position: absolute;
        pointer-events: none;
        ${optFancyV2[i].css}
        z-index: 50;
      `}
      transition={{
        duration: 0.4,
        delay: i * (!(i % 2) ? 0.025 : 0),
        ease: easeInOut,
      }}
      animate={{
        y: isHover ? genRandom(-75, 5) : 0,
        scale: isHover ? genRandom(0.9, 1.05) : 0,
        rotate: isHover ? genRandom(-45, 45) : 0,
        opacity: isHover ? 1 : 0,
      }}
    >
      <el.svg className="text-neutral-200 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
    </motion.div>
  ));
};

export default SvgParty;
