"use client";

import WrapSection from "@/shared/components/HOC/WrapSection/WrapSection";
import { Portfolio } from "@/shared/components/SVGs";
import type { FC } from "react";
import { projects } from "./uiFactory";
import ProjectItem from "./components/ProjectItem/ProjectItem";

const Projects: FC = () => {
  return (
    <WrapSection
      {...{
        el: {
          txt: "Projects",
          svg: Portfolio,
        },
        id: "projects",
      }}
    >
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((el) => (
          <ProjectItem key={el.id} {...{ el }} />
        ))}
      </div>
    </WrapSection>
  );
};

export default Projects;
