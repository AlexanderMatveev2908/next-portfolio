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
import { saveStorage } from "@/core/lib/storage";
import { useHydrations } from "@/core/hooks/useHydrations";

type PropsType = {
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
  filtered: ProjectType[];
  paginated: ProjectType[];
};

const PageCounter: FC<PropsType> = ({ limit, setLimit, filtered }) => {
  const projState = useSelector(getProjectsState);
  const [maxBlockBtns, setMaxBlockBtns] = useState(genNumBlockBtns());

  const dispatch = useDispatch();
  const { isHydrated } = useHydrations();

  useEffect(() => {
    const resize = () => {
      const newLimit = getNumCards();
      const newMaxBlockBtns = genNumBlockBtns();

      setLimit(newLimit);
      setMaxBlockBtns(newMaxBlockBtns);

      const newTotPages = Math.ceil(filtered.length / newLimit);
      const newTotBlocks = Math.ceil(newTotPages / newMaxBlockBtns);

      const lastBlockI = Math.max(0, newTotBlocks - 1);
      const lastPageI = Math.max(0, newTotPages - 1);

      const shouldFixPage = projState.currPage > lastPageI;
      const shouldFixBlock = projState.currBlock > lastBlockI;

      if (shouldFixBlock) {
        saveStorage("apps", {
          ...projState,
          currBlock: lastBlockI,
        });

        dispatch(
          projectsSlice.actions.setPagination({
            field: "currBlock",
            val: lastBlockI,
          })
        );
      }

      if (shouldFixPage) {
        saveStorage("apps", {
          ...projState,
          currPage: lastPageI,
        });

        dispatch(
          projectsSlice.actions.setPagination({
            field: "currPage",
            val: lastPageI,
          })
        );
      }
    };

    if (!isHydrated) return;

    resize();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [filtered.length, isHydrated, setLimit, dispatch, projState]);

  const totPages = useMemo(
    () => Math.ceil(filtered.length / limit),
    [filtered, limit]
  );
  const totBlocks = useMemo(
    () => Math.ceil(totPages / maxBlockBtns),
    [totPages, maxBlockBtns]
  );

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
          disabled: projState.currBlock >= totBlocks - 2,
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
