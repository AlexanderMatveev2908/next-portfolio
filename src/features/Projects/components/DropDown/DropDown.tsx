/** @jsxImportSource @emotion/react */

"use client";

import { LucideProps } from "lucide-react";
import type { FC, ForwardRefExoticComponent, RefAttributes } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type PropsType = {
  el: {
    label: string;
    svg:
      | ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
        >
      | IconType;
  };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  minH: number;

  refs: {
    labelRef: React.RefObject<HTMLDivElement | null>;
    filterRef: React.RefObject<HTMLDivElement | null>;
  };

  children: React.ReactNode;
};

const DropDown: FC<PropsType> = ({
  el,
  isOpen,
  setIsOpen,
  refs,
  minH,
  children,
}) => {
  return (
    <div
      className="flex justify-center text-[var(--whitesmoke)] relative"
      css={css`
        min-height: ${minH}px;
      `}
    >
      <motion.div
        className="flex flex-col border-2 border-[var(--whitesmoke)] rounded-xl overflow-hidden absolute"
        css={css`
          z-index: 100;
        `}
        ref={refs.filterRef}
      >
        <div
          ref={refs.labelRef}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-6 cursor-pointer py-2 px-4 min-w-[300px] border-b-2"
          css={css`
            transition: 0.3s;
            &:hover {
              text-shadow: 0 0 5px var(--whitesmoke), 0 0 10px var(--whitesmoke);
            }

            border-color: ${isOpen ? "var(--whitesmoke)" : "transparent"};
          `}
        >
          <span className="txt__lg font-bold">{el.label}</span>
          <el.svg className="w-[35px] h-[35px] sm:h-[40px] sm:w-[40px]" />
        </div>

        {children}
      </motion.div>
    </div>
  );
};

export default DropDown;
