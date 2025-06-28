/** @jsxImportSource @emotion/react */

"use client";

import { CircleCheckBig, ListFilter } from "lucide-react";
import { useState, type FC } from "react";
import { btnFilters, optHover } from "./uiFactory";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { FilterAppType, getProjectsState, projectsSlice } from "../../slice";
import { saveStorage } from "@/core/lib/storage";
import { useHandleDrop } from "@/core/hooks/useHandleDrop";
import DropDown from "../DropDown/DropDown";

const Filters: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { labelRef, filterRef, minH } = useHandleDrop({
    setIsOpen,
  });
  const projectsState = useSelector(getProjectsState);

  const isIn = (label: FilterAppType) => projectsState.currFilter === label;

  const dispatch = useDispatch();
  const handleClick = (label: FilterAppType) => {
    saveStorage("apps", { ...projectsState, currFilter: label });
    dispatch(projectsSlice.actions.setFilter(label));
    setIsOpen(false);
  };

  return (
    <DropDown
      {...{
        el: {
          label: "Filter By",
          svg: ListFilter,
        },
        isOpen,
        setIsOpen,
        refs: {
          labelRef,
          filterRef,
        },
        minH,
      }}
    >
      <ul
        className="w-full flex flex-col justify-start overflow-hidden"
        css={css`
          z-index: 100;
          transition: 0.4s;
          max-height: ${isOpen ? `500px` : "0"};
          pointer-events: ${isOpen ? "all" : "none"};
          background-color: var(--neutral__950);
        `}
      >
        {btnFilters.map((el) => (
          <button
            key={el.id}
            className="w-full appearance-none flex justify-start px-4 py-3 cursor-pointer items-center gap-6"
            onClick={handleClick.bind(null, el.label)}
            css={css`
              transition: 0.3s;
              &:hover {
                ${optHover}
              }

              background: ${isIn(el.label)
                ? "var(--whitesmoke)"
                : "transparent"};
              color: ${isIn(el.label)
                ? "var(--neutral__950)"
                : "var(--whitesmoke)"};
            `}
          >
            {projectsState.currFilter === el.label && (
              <CircleCheckBig className="w-[25px] h-[25px] text-neutral-950" />
            )}

            <span className="text-start txt__md font-semibold">{el.label}</span>
          </button>
        ))}
      </ul>
    </DropDown>
  );
};

export default Filters;
