/** @jsxImportSource @emotion/react */

"use client";

import { useEffect, useMemo, useState, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsState, projectsSlice } from "../../slice";
import { projects } from "../../uiFactory";
import { genNumBlockBtns, getNumCards } from "@/core/lib/style";
import BtnBase from "@/shared/components/elements/BtnBase/BtnBase";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useGenIDs } from "@/core/hooks/useGenIDs";
import { css } from "@emotion/react";

const PageCounter: FC = () => {
  const projState = useSelector(getProjectsState);
  const [maxCards, setMaxCards] = useState(getNumCards());
  const [maxBlockBtns, setMaxBlockBtns] = useState(genNumBlockBtns());

  console.log(projState);

  useEffect(() => {
    const listen = () => {
      setMaxCards(getNumCards());
      setMaxBlockBtns(genNumBlockBtns());
    };

    window.addEventListener("resize", listen);
    return () => {
      window.removeEventListener("resize", listen);
    };
  }, []);

  const totPages = useMemo(
    () => Math.ceil(projects.length / maxCards),
    [maxCards]
  );
  const totBlocks = useMemo(
    () => Math.ceil(totPages / maxBlockBtns),
    [totPages, maxBlockBtns]
  );

  const { ids } = useGenIDs({
    lengths: [maxBlockBtns],
  });

  const currPages = useMemo(() => {
    const start = projState.currBlock * maxBlockBtns;
    const end = Math.min(start + maxBlockBtns, totPages);

    return Array.from({ length: end - start }, (_, i) => start + i);
  }, [projState.currBlock, maxBlockBtns, totPages]);

  const dispatch = useDispatch();

  return (
    <div className="w-full grid grid-cols-[60px_1fr_60px] items-center gap-10">
      <BtnBase
        {...{
          el: {
            svg: ArrowBigLeft,
          },
          disabled: !projState.currBlock,
          handleClick: () => {
            dispatch(
              projectsSlice.actions.setPagination({
                field: "currBlock",
                val: projState.currBlock - 1,
              })
            );
          },
        }}
      />

      <div
        className="w-full items-center flex gap-5"
        css={css`
          justify-content: ${currPages.length === 1 ? "center" : "flex-start"};
        `}
      >
        {currPages.map((val, i) => (
          <div key={ids[0][i]} className="w-[60px]">
            <BtnBase
              {...{
                el: { txt: `${val + 1}` },
                $custom: {
                  css: css`
                    border: 2px solid var(--whitesmoke);
                    border-radius: 15px;
                  `,
                },
              }}
            />
          </div>
        ))}
      </div>

      <BtnBase
        {...{
          el: {
            svg: ArrowBigRight,
          },
          disabled: projState.currBlock === totBlocks - 1,
          handleClick: () => {
            dispatch(
              projectsSlice.actions.setPagination({
                field: "currBlock",
                val: projState.currBlock + 1,
              })
            );
          },
        }}
      />
    </div>
  );
};

export default PageCounter;
