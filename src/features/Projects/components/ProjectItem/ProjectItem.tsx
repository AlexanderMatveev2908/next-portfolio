/** @jsxImportSource @emotion/react */

"use client";

import { useEffect, useRef, useState, type FC } from "react";
import { ProjectItemStyled } from "./Styled";
import { ProjectType } from "../../uiFactory";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import Front from "./components/Front/Front";
import Back from "./components/Back/Back";

type PropsType = {
  el: ProjectType;
};

const ProjectItem: FC<PropsType> = ({ el }) => {
  const contentRefImg = useRef<HTMLDivElement | null>(null);
  const [h, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const resize = () =>
      setHeight((contentRefImg.current?.scrollHeight ?? 0) + 30);

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <ProjectItemStyled
      className="min-w-full border-2 border-[var(--neutral__700)] rounded-2xl p-[15px]"
      css={css`
        height: ${h}px;
        max-height: ${h}px;
      `}
    >
      <motion.div
        className="flipper p-5 rounded-xl "
        whileHover={{
          rotateY: 180,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Front {...{ el }} ref={contentRefImg} />

        <Back {...{ el }} />
      </motion.div>
    </ProjectItemStyled>
  );
};

export default ProjectItem;
