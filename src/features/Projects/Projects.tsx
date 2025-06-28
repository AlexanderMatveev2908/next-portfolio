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
import Sorter from "./components/Sorter/Sorter";

const Projects: FC = () => {
  const projState = useSelector(getProjectsState);
  const [limit, setLimit] = useState(getNumCards());

  console.log(projState);

  const filtered = useMemo(() => {
    const list =
      projState.currFilter === "All"
        ? projects
        : projects.filter((el) => el.typeApp === projState.currFilter);

    return list;
  }, [projState.currFilter]);

  const paginated = useMemo(
    () =>
      filtered.slice(
        projState.currPage * limit,
        projState.currPage * limit + limit
      ),

    [limit, projState.currPage, filtered]
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
      <div
        className="w-full justify-center gap-x-12 gap-y-8 grid"
        css={css`
          grid-template-columns: 1fr;

          ${resp(750)} {
            grid-template-columns: repeat(2, 1fr);
          }
        `}
      >
        <Sorter />
        <Filters />
      </div>

      <div
        className="w-full gap-x-20 gap-y-10"
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          place-content: center;
          place-items: center;

          ${resp(400)} {
            grid-template-columns: repeat(auto-fit, 400px);
          }
        `}
      >
        {paginated.map((el) => (
          <ProjectItem key={el.id} {...{ el }} />
        ))}
      </div>

      <PageCounter
        {...{
          limit,
          setLimit,
          filtered,
          paginated,
        }}
      />
    </WrapSection>
  );
};

export default Projects;
