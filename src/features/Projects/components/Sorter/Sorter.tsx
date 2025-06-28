/** @jsxImportSource @emotion/react */

"use client";

import { useState, type FC } from "react";
import DropDown from "../DropDown/DropDown";
import { useHandleDrop } from "@/core/hooks/useHandleDrop";
import { FaSort } from "react-icons/fa";
import { sortersApp } from "./uiFactory";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsState, projectsSlice } from "../../slice";
import { CircleCheckBig } from "lucide-react";
import { optHoverDrop } from "../../uiFactory";
import { saveStorage } from "@/core/lib/storage";

const Sorter: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { labelRef, filterRef, minH } = useHandleDrop({
    setIsOpen,
  });

  const projState = useSelector(getProjectsState);
  const isIn = (val: string) => projState.currSorter === val;

  const dispatch = useDispatch();
  const handleSortClick = (val: string) => {
    const newVal = projState.currSorter === val ? "" : val;

    saveStorage("apps", {
      ...projState,
      currSorter: newVal,
    });
    dispatch(projectsSlice.actions.setSorter(newVal));

    setIsOpen(false);
  };

  return (
    <DropDown
      {...{
        el: {
          label: "Sort By",
          svg: FaSort,
        },
        isOpen,
        setIsOpen,
        refs: {
          labelRef,
          filterRef,
        },
        minH,
        zIndex: 200,
      }}
    >
      {sortersApp.map((el) => (
        <button
          key={el.id}
          onClick={handleSortClick.bind(null, el.val)}
          className="w-full appearance-none flex justify-start px-4 py-3 cursor-pointer items-center gap-6"
          css={css`
            transition: 0.3s;
            &:hover {
              ${optHoverDrop}
            }
            background: ${isIn(el.val) ? "var(--whitesmoke)" : "transparent"};
            color: ${isIn(el.val)
              ? "var(--neutral__950)"
              : "var(--whitesmoke)"};
          `}
        >
          {projState.currSorter === el.val && (
            <CircleCheckBig className="min-w-[25px] min-h-[25px] text-neutral-950" />
          )}

          <div className="w-full flex items-center gap-6">
            <span className="text-start txt__md font-semibold">{el.label}</span>

            <el.svg className="min-w-[25px] min-h-[25px]" />
          </div>
        </button>
      ))}
    </DropDown>
  );
};

export default Sorter;
