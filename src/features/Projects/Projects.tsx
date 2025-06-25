/** @jsxImportSource @emotion/react */

"use client";

import WrapSection from "@/shared/components/HOC/WrapSection/WrapSection";
import { Portfolio } from "@/shared/components/SVGs";
import type { FC } from "react";
import { projects } from "./uiFactory";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import { css } from "@emotion/react";

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
      <div
        className="w-full gap-6"
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          /* grid-template-columns: repeat(auto-fit, 300px); */
          place-content: center;
        `}
      >
        {projects.map((el) => (
          <ProjectItem key={el.id} {...{ el }} />
        ))}
      </div>
    </WrapSection>
  );
};

export default Projects;
