/** @jsxImportSource @emotion/react */

"use client";

import WrapSection from "@/shared/components/HOC/WrapSection/WrapSection";
import { Portfolio } from "@/shared/components/SVGs";
import { useMemo, type FC } from "react";
import { projects } from "./uiFactory";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import { css } from "@emotion/react";
import { resp } from "@/core/lib/style";
import Filters from "./components/Filters/Filters";
import { useSelector } from "react-redux";
import { getProjectsState } from "./slice";
import PageCounter from "./components/PageCounter/PageCounter";

const Projects: FC = () => {
  const projState = useSelector(getProjectsState);

  const filtered = useMemo(
    () =>
      projState.currFilter === "All"
        ? projects
        : projects.filter((el) => el.typeApp === projState.currFilter),
    [projState.currFilter]
  );

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
      <Filters />

      <div
        className="w-full gap-6"
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          justify-content: center;

          ${resp(400)} {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          }
        `}
      >
        {filtered.map((el) => (
          <ProjectItem key={el.id} {...{ el }} />
        ))}
      </div>

      <PageCounter />
    </WrapSection>
  );
};

export default Projects;
