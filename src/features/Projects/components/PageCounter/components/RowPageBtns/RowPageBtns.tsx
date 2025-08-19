/** @jsxImportSource @emotion/react */

"use client";

import { useGenIDs } from "@/core/hooks/useGenIDs";
import { saveStorage } from "@/core/lib/storage";
import { projectsSlice, ProjectsStateType } from "@/features/Projects/slice";
import BtnBase from "@/shared/components/elements/BtnBase/BtnBase";
import { css } from "@emotion/react";
import { useMemo, type FC } from "react";
import { useDispatch } from "react-redux";

type PropsType = {
  maxBlockBtns: number;
  totPages: number;
  projState: ProjectsStateType;
};

const RowPageBtns: FC<PropsType> = ({ maxBlockBtns, totPages, projState }) => {
  const dispatch = useDispatch();
  const handlePageClick = (page: number) => {
    saveStorage("apps", {
      ...projState,
      currPage: page,
    });

    dispatch(
      projectsSlice.actions.setPagination({
        field: "currPage",
        val: page,
      })
    );
  };

  const currPages = useMemo(() => {
    const start = projState.currBlock * maxBlockBtns;
    const end = Math.min(start + maxBlockBtns, totPages);

    return Array.from({ length: end - start }, (_, i) => start + i);
  }, [projState.currBlock, maxBlockBtns, totPages]);

  const { ids } = useGenIDs({
    lengths: [currPages.length],
  });

  return ids[0].length !== currPages.length ? null : (
    <div
      className="w-full items-center flex gap-5"
      css={css`
        justify-content: ${currPages.length === 1 ? "center" : "space-around"};
      `}
    >
      {currPages.map((val, i) => (
        <div key={ids[0][i]} className="w-[60px]">
          <BtnBase
            {...{
              el: { txt: `${val + 1}` },
              $custom: {
                css: css`
                  border: ${`2px solid var(--${
                    projState.currPage === val ? "whitesmoke" : "neutral__700"
                  })`};
                  border-radius: 15px;

                  transform: scale(${projState.currPage === val ? 0.85 : 1});
                  background: var(
                    --${projState.currPage === val ? "whitesmoke" : "neutral__950"}
                  );
                  color: var(
                    --${projState.currPage === val ? "neutral__950" : "whitesmoke"}
                  );
                `,
              },
              $scaleUp: 1.15,
              handleClick: handlePageClick.bind(null, val),
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default RowPageBtns;
