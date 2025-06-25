/** @jsxImportSource @emotion/react */

"use client";

import WrapSection from "@/shared/components/HOC/WrapSection/WrapSection";
import { Portfolio } from "@/shared/components/SVGs";
import type { FC } from "react";
import { projects } from "./uiFactory";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import { css } from "@emotion/react";
import { resp } from "@/core/lib/style";

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
          grid-template-columns: repeat(auto-fit, 300px);
          justify-content: center;

          ${resp("sm")} {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          }
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
