/** @jsxImportSource @emotion/react */

"use client";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
  type FC,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsState, projectsSlice } from "../../slice";
import { ProjectType } from "../../uiFactory";
import { genNumBlockBtns, getNumCards } from "@/core/lib/style";
import BtnBase from "@/shared/components/elements/BtnBase/BtnBase";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { css } from "@emotion/react";
import RowPageBtns from "./components/RowPageBtns/RowPageBtns";

type PropsType = {
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
  filtered: ProjectType[];
  paginated: ProjectType[];
};

const PageCounter: FC<PropsType> = ({ limit, setLimit, filtered }) => {
  const projState = useSelector(getProjectsState);
  const [maxBlockBtns, setMaxBlockBtns] = useState(genNumBlockBtns());

  useEffect(() => {
    const listen = () => {
      setLimit(getNumCards());
      setMaxBlockBtns(genNumBlockBtns());
    };

    window.addEventListener("resize", listen);
    return () => {
      window.removeEventListener("resize", listen);
    };
  }, [setLimit]);

  const totPages = useMemo(
    () => Math.ceil(filtered.length / limit),
    [filtered, limit]
  );
  const totBlocks = useMemo(
    () => Math.ceil(filtered.length / maxBlockBtns),
    [filtered, maxBlockBtns]
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

  useEffect(() => {
    const resize = () => {
      const numPages = Math.ceil(filtered.length / getNumCards());
      const maxBlocks = Math.ceil(numPages / maxBlockBtns);

      if (projState.currPage >= numPages || projState.currBlock >= maxBlocks) {
        const newBlock = Math.max(0, maxBlocks - 1);

        dispatch(
          projectsSlice.actions.setPagination({
            field: "currBlock",
            val: newBlock,
          })
        );
        dispatch(
          projectsSlice.actions.setPagination({
            field: "currPage",
            val: 0,
          })
        );
      }
    };

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [
    filtered,
    limit,
    maxBlockBtns,
    projState.currBlock,
    projState.currPage,
    dispatch,
  ]);

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
          disabled: projState.currBlock >= totBlocks - 1,
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
