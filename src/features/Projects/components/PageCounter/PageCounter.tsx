/** @jsxImportSource @emotion/react */

"use client";

import { useEffect, useMemo, useState, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsState, projectsSlice } from "../../slice";
import { projects } from "../../uiFactory";
import { genNumBlockBtns, getNumCards } from "@/core/lib/style";
import BtnBase from "@/shared/components/elements/BtnBase/BtnBase";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { css } from "@emotion/react";
import RowPageBtns from "./components/RowPageBtns/RowPageBtns";

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

  const dispatch = useDispatch();

  const handleBlockClick = (type: "inc" | "dec") => {
    dispatch(
      projectsSlice.actions.setPagination({
        field: "currBlock",
        val: projState.currBlock + (type === "inc" ? 1 : -1),
      })
    );
  };

  return (
    <div className="w-full grid grid-cols-[60px_1fr_60px] items-center gap-10">
      <BtnBase
        {...{
          el: {
            svg: ArrowBigLeft,
          },
          disabled: !projState.currBlock,
          handleClick: handleBlockClick.bind(null, "dec"),
          $scaleUp: 1.25,
          $custom: {
            css: css`
              color: var(--whitesmoke);
            `,
          },
        }}
      />

      <RowPageBtns {...{ maxBlockBtns, totPages, projState }} />

      <BtnBase
        {...{
          el: {
            svg: ArrowBigRight,
          },
          disabled: projState.currBlock === totBlocks - 1,
          handleClick: handleBlockClick.bind(null, "inc"),
          $scaleUp: 1.25,
          $custom: {
            css: css`
              color: var(--whitesmoke);
            `,
          },
        }}
      />
    </div>
  );
};

export default PageCounter;
