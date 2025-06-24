/** @jsxImportSource @emotion/react */

"use client";

import { useEffect, useRef, useState, type FC } from "react";
import { TechStackStyled } from "./Styled";
import Txt from "@/shared/components/elements/Txt/Txt";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { stack } from "./uiFactory";

const TechStack: FC = () => {
  const [width, setWidth] = useState(0);
  const stackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (stackRef.current) setWidth(stackRef.current.scrollWidth / 2);
  }, []);

  console.log(stack);
  return (
    <TechStackStyled className="w-full flex flex-col justify-center gap-10">
      <Txt {...{ txt: "Teck-Stack" }} />

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
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {Array.from({ length: 2 }).map(() =>
            stack.map((el) => (
              <div
                key={el.id}
                className="min-w-[50px] min-h-[50px] flex justify-center items-center "
                css={css`
                  color: ${el.clr??''};
                `}
              >
                <el.svg />
              </div>
            ))
          )}
        </motion.div>
      </div>
    </TechStackStyled>
  );
};

export default TechStack;
