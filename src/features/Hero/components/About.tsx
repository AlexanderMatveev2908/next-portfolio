/** @jsxImportSource @emotion/react */

"use client";

import { easeInOut, motion } from "framer-motion";
import { type FC } from "react";
import { css } from "@emotion/react";

const About: FC = () => {
  return (
    <motion.div
      className="w-full max-w-[600px]  mx-auto"
      style={{ willChange: "transform, opacity" }}
      initial={{
        scaleX: 0,
        scaleY: 1.5,
      }}
      transition={{
        duration: 1,
        delay: 0.6,
        ease: easeInOut,
      }}
      animate={{
        scaleX: [0, 1.3, 0.8, 1.2, 0.9, 1],
        scaleY: [1.5, 0.7, 1.2, 0.8, 1.1, 1],
      }}
    >
      <div
        className="rounded-3xl p-5 "
        css={css`
          border: 2px solid var(--whitesmoke);
          transition: 0.3s;

          span {
            color: var(--gray__300);
          }

          &:hover {
            box-shadow: 0 0 10px var(--whitesmoke), 0 0 20px var(--whitesmoke),
              0 0 30px var(--whitesmoke);
          }
        `}
      >
        <span className="txt__md">
          I&apos;m always exploring new tools and frameworks and applying them
          in&nbsp;
          <strong>real-world projects.</strong> I care about building&nbsp;
          <strong>scalable, maintainable apps</strong>&nbsp;with clean code
          and&nbsp;
          <strong>solid architecture.</strong>
        </span>
      </div>
    </motion.div>
  );
};

export default About;
