/** @jsxImportSource @emotion/react */

"use client";

import { useState, type FC } from "react";
import { css } from "@emotion/react";
import { genSizeRandom } from "@/core/lib/etc";
import { btnFancySVGs } from "./uiFactory";
import { easeInOut, motion } from "framer-motion";

const FancyBtn: FC = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-fit h-full max-h-fit relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        css={css`
          padding: 7.5px 50px;
          border: 2px solid var(--whitesmoke);
          border-radius: 15px;
          transition: 0.4s;
          position: relative;
          /* overflow: hidden; */
          width: 100%;
          max-width: fit-content;
          max-height: 100%;
          pointer-events: none;
        `}
      >
        <span className="txt__lg font-bold text-[whitesmoke]">View CV</span>

        <motion.div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            pointer-events: none;

            .shadow_lucide_0,
            .shadow_lucide_1 {
              position: absolute;
              width: 30px;
              height: 100%;
              top: 0;
              transform: skew(25deg);

              background: linear-gradient(
                to right,
                var(--neutral__800),
                var(--neutral__700),
                var(--neutral__800)
              );
            }

            .shadow_lucide_0 {
              left: 20%;
            }
            .shadow_lucide_1 {
              left: 70%;
            }

            .shadow_lucide_2 {
            }
          `}
          style={{
            willChange: "transform",
          }}
          transition={{
            duration: 0.3,
            ease: easeInOut,
          }}
          animate={{
            transform: isHover ? "translateX(120%)" : `translateX(-120%)`,
          }}
        >
          <div className="shadow_lucide_0"></div>
          <div className="shadow_lucide_1"></div>
        </motion.div>
      </div>

      {/* {btnFancySVGs.map((el) => (
        <div
          key={el.id}
          css={css`
            ${genSizeRandom()}
            color: var(--whitesmoke);

            position: absolute;
          `}
        >
          <el.svg />
        </div>
      ))} */}
    </a>
  );
};

export default FancyBtn;

/*
<a
  href="/files/CV-AlexanderMatveev.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 underline"
>
  📄 View My CV
</a>

*/
