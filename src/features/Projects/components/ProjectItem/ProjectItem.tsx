/** @jsxImportSource @emotion/react */

"use client";

import { useEffect, useRef, useState, type FC } from "react";
import { ProjectItemStyled } from "./Styled";
import { ProjectType } from "../../uiFactory";
import { motion } from "framer-motion";
import ImgLoader from "@/shared/components/HOC/ImgLoader/ImgLoader";
import { css } from "@emotion/react";
import Txt from "@/shared/components/elements/Txt/Txt";

type PropsType = {
  el: ProjectType;
};

const ProjectItem: FC<PropsType> = ({ el }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [h, setHeight] = useState(0);

  useEffect(() => {
    const resize = () => setHeight((contentRef.current?.scrollWidth ?? 0) + 30);

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <ProjectItemStyled
      className="min-w-full border-2 border-[var(--neutral__700)] rounded-2xl  p-[15px]"
      css={css`
        height: ${h}px;
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
        ref={contentRef}
      >
        <div className="client">
          <div className="w-full h-full flex flex-col gap-3">
            <div className="w-full bg-black px-3 py-2">
              <Txt {...{ txt: el.title, size: "txt__md" }} />
            </div>
            <div
              css={css`
                width: 100%;
                aspect-ratio: 16/9;
              `}
            >
              <ImgLoader
                {...{
                  src: el.imgs[0],
                  alt: `Image of ${el.title} from ${el.host}`,
                }}
              />
            </div>

            <p className="text-white tb">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              incidunt odit itaque praesentium inventore quas saepe, possimus
              quo provident, iste a! Obcaecati expedita, voluptatem sit vero hic
              temporibus sint autem.
            </p>
          </div>
        </div>

        <div className="server flex justify-center items-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iure
          voluptatem molestiae corrupti facere inventore esse, nostrum
          blanditiis laboriosam quas minus molestias! Asperiores illum quam
          expedita hic natus similique provident?
        </div>
      </motion.div>
    </ProjectItemStyled>
  );
};

export default ProjectItem;
