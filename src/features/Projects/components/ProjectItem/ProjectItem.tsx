/** @jsxImportSource @emotion/react */

"use client";

import { useEffect, useRef, useState, type FC } from "react";
import { ProjectItemStyled } from "./Styled";
import { ProjectType } from "../../uiFactory";
import { motion } from "framer-motion";
import ImgLoader from "@/shared/components/HOC/ImgLoader/ImgLoader";
import { css } from "@emotion/react";
import Txt from "@/shared/components/elements/Txt/Txt";
import ExtLink from "./components/ExtLink/ExtLink";
import { useGenIDs } from "@/core/hooks/useGenIDs";

type PropsType = {
  el: ProjectType;
};

const ProjectItem: FC<PropsType> = ({ el }) => {
  const contentRefImg = useRef<HTMLDivElement | null>(null);
  const [h, setHeight] = useState(0);

  useEffect(() => {
    const resize = () =>
      setHeight((contentRefImg.current?.scrollHeight ?? 0) + 30);

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const { ids } = useGenIDs({
    lengths: [2],
  });

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
        <div className="client rounded-xl" ref={contentRefImg}>
          <div className="w-full h-full flex flex-col gap-3">
            <div className="w-full bg-black px-3 py-2">
              <Txt {...{ txt: el.title, size: "txt__lg" }} />
            </div>

            <hr className="min-h-[2px] bg-gray-300" />
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
          </div>
        </div>

        <div className="server rounded-xl">
          <div className="w-full flex flex-col gap-4 sm:gap-6 max-h-full ">
            <div className="w-full grid grid-cols-1 gap-y-5 px-3 py-2">
              {[el.repo, el.live].map((subEl, i) => (
                <ExtLink
                  key={ids[0][i]}
                  {...{
                    href: subEl,
                    typeLink: !i ? "git" : "live",
                    host: el.host,
                    typeApp: el.typeApp,
                  }}
                />
              ))}
            </div>

            <div className="overflow-y-auto max-h-full scroll_app pr-2">
              <span className="txt__sm">{el.description}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </ProjectItemStyled>
  );
};

export default ProjectItem;
