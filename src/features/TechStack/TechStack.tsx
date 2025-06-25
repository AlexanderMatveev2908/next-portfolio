/** @jsxImportSource @emotion/react */

"use client";

import { useEffect, useRef, useState, type FC } from "react";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { stack } from "./uiFactory";
import WrapSection from "@/shared/components/HOC/WrapSection/WrapSection";
import { Tools } from "@/shared/components/SVGs";

const TechStack: FC = () => {
  const [width, setWidth] = useState(0);
  const stackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (stackRef.current) setWidth(stackRef.current.scrollWidth / 2);
  }, []);

  return (
    <WrapSection
      {...{
        el: {
          txt: "Tech Stack",
          svg: Tools,
        },
      }}
    >
      <div
        className="flex overflow-hidden rounded-2xl p-5"
        css={css`
          border: 2px solid var(--whitesmoke);
          box-shadow: 0 0 5px var(--whitesmoke), 0 0 10px var(--whitesmoke),
            0 0 20px var(--whitesmoke);
        `}
      >
        <motion.div
          ref={stackRef}
          className="w-full flex gap-10"
          animate={{ x: ["0%", -width] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {Array.from({ length: 2 }).map(() =>
            stack.map((el) => (
              <div
                key={el.id}
                className="min-w-[35px] sm:min-w-[50px] min-h-[35px] sm:min-h-[50px] flex justify-center items-center "
                css={css`
                  color: ${el.clr ?? ""};
                `}
              >
                <el.svg />
              </div>
            ))
          )}
        </motion.div>
      </div>
    </WrapSection>
  );
};

export default TechStack;
