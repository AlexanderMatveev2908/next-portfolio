/** @jsxImportSource @emotion/react */

"use client";

import WrapSection from "@/shared/components/HOC/WrapSection/WrapSection";
import { Portfolio } from "@/shared/components/SVGs";
import { useMemo, useState, type FC } from "react";
import { projects } from "./uiFactory";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import { css } from "@emotion/react";
import { getNumCards, resp } from "@/core/lib/style";
import Filters from "./components/Filters/Filters";
import { useSelector } from "react-redux";
import { getProjectsState } from "./slice";
import PageCounter from "./components/PageCounter/PageCounter";

const Projects: FC = () => {
  const projState = useSelector(getProjectsState);
  const [limit, setLimit] = useState(getNumCards());

  const filtered = useMemo(() => {
    const list =
      projState.currFilter === "All"
        ? projects
        : projects.filter((el) => el.typeApp === projState.currFilter);

    const paginated = list.slice(
      projState.currPage * limit,
      projState.currPage * limit + limit
    );

    return paginated;
  }, [projState.currFilter, projState.currPage, limit]);

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

      <PageCounter
        {...{
          limit,
          setLimit,
        }}
      />
    </WrapSection>
  );
};

export default Projects;
