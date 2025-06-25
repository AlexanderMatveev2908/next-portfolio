"use client";

import type { FC } from "react";
import { ProjectItemStyled } from "./Styled";
import { ProjectType } from "../../uiFactory";
import { motion } from "framer-motion";
import Image from "next/image";
import ImgLoader from "@/shared/components/HOC/ImgLoader/ImgLoader";

type PropsType = {
  el: ProjectType;
};

const ProjectItem: FC<PropsType> = ({ el }) => {
  return (
    <ProjectItemStyled className="w-full border-2 border-[var(--neutral__700)] p-5 rounded-2xl min-h-[300px]">
      <motion.div
        className="flipper p-5 rounded-3xl"
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
        <div className="client">
          <div className="relative w-full h-[250px]">
            <ImgLoader {...{ src: el.imgs[0] }} />
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
