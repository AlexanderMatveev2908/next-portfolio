/** @jsxImportSource @emotion/react */

"use client";

import { useState, type FC } from "react";
import Anchor from "../Anchor/Anchor";
import { css } from "@emotion/react";
import { btnFancySVGs } from "./uiFactory";
import { genRandom } from "@/core/lib/etc";
import { easeInOut, motion } from "framer-motion";

type PropsType = {
  href: string;
};

const FancyBtnV2: FC<PropsType> = ({ href }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Anchor {...{ href, setIsHover }}>
      <motion.div
        className="w-full flex justify-center max-w-fit h-full max-h-fit relative "
        css={css`
          border: 2px solid var(--whitesmoke);
          padding: 7.5px 50px;
          border-radius: 15px;
        `}
        transition={{
          duration: 0.4,
          ease: easeInOut,
        }}
        animate={{
          transform: isHover
            ? "scale(1.2) rotate(-10deg)"
            : "scale(1) rotate(0deg)",
        }}
      >
        <motion.div
          className="absolute min-w-full min-h-full top-0 left-0 border-2"
          css={css`
            border-radius: 15px;
            border: 2px solid var(--whitesmoke);
          `}
          transition={{
            duration: 0.4,
            ease: easeInOut,
          }}
          animate={{
            transform: isHover
              ? "translateY(0.75rem) translateX(-1rem)"
              : "scale(1) rotate(0deg)",
          }}
        ></motion.div>

        <div className="absolute inset-0 z-40 bg-neutral-950 rounded-[15px]"></div>

        <span className="txt__lg font-bold text-[whitesmoke] relative z-60">
          Contact
        </span>
      </motion.div>

      {btnFancySVGs.map((el) => (
        <motion.div
          key={el.id}
          css={css`
            position: absolute;
            pointer-events: none;
            top: ${genRandom(25, 75)}%;
            left: ${genRandom(25, 75)}%;
          `}
          transition={{
            duration: 0.4,
            ease: easeInOut,
          }}
          animate={{
            y: isHover ? genRandom(-100, 100) : 0,
            x: isHover ? genRandom(-100, 100) : 0,
            scale: isHover ? genRandom(0.9, 1.05) : 0,
            rotate: isHover ? genRandom(-10, 10) : 0,
            opacity: isHover ? 1 : 0,
          }}
        >
          <el.svg
            css={css`
              width: 35px;
              height: 35px;
              color: var(--gray__300);
            `}
          />
        </motion.div>
      ))}
    </Anchor>
  );
};

export default FancyBtnV2;
