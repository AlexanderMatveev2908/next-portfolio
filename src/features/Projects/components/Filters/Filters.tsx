/** @jsxImportSource @emotion/react */

"use client";

import { CircleCheckBig, ListFilter } from "lucide-react";
import { useEffect, useRef, useState, type FC } from "react";
import { btnFilters, optHover } from "./uiFactory";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FilterAppType, getProjectsState, projectsSlice } from "../../slice";
import { saveStorage } from "@/core/lib/storage";

const Filters: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const [minH, setMinH] = useState(0);

  const projectsState = useSelector(getProjectsState);

  useEffect(() => {
    const el = labelRef.current;
    if (!el) return;

    const resize = () => setMinH(labelRef?.current?.scrollHeight ?? 0);

    const observer = new ResizeObserver(resize);
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const listen = (e: MouseEvent) => {
      const el = filterRef.current;
      if (!el) return;

      if (!el.contains(e.target as Node)) setIsOpen(false);
    };

    document.addEventListener("mousedown", listen);

    return () => {
      document.removeEventListener("mousedown", listen);
    };
  }, []);

  const isIn = (label: FilterAppType) => projectsState.currFilter === label;

  const dispatch = useDispatch();
  const handleClick = (label: FilterAppType) => {
    saveStorage("apps", { currFilter: label });
    dispatch(projectsSlice.actions.setFilter(label));
    setIsOpen(false);
  };

  return (
    <div
      className="w-full flex justify-end text-[var(--whitesmoke)] relative"
      css={css`
        min-height: ${minH}px;
      `}
    >
      <motion.div
        className="flex flex-col border-2 border-[var(--whitesmoke)] rounded-xl overflow-hidden absolute"
        css={css`
          z-index: 100;
        `}
        ref={filterRef}
      >
        <div
          ref={labelRef}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-6 cursor-pointer py-2 px-4 min-w-[300px] border-b-2"
          css={css`
            transition: 0.3s;
            &:hover {
              opacity: 0.8;
            }

            border-color: ${isOpen ? "var(--whitesmoke)" : "transparent"};
          `}
        >
          <span className="txt__lg font-bold">Filter</span>
          <ListFilter className="w-[35px] h-[35px] sm:h-[40px] sm:w-[40px]" />
        </div>

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

              <span className="text-start txt__md font-semibold">
                {el.label}
              </span>
            </button>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Filters;
