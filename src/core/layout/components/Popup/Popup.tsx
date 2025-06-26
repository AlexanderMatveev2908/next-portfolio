/** @jsxImportSource @emotion/react */

"use client";

import type { FC } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import { getPopState } from "@/features/Popup/slice";

const Popup: FC = () => {
  const popState = useSelector(getPopState);

  return (
    <div
      className={`${
        popState.isPop ? "opacity-100" : "opacity-0 pointer-events-none"
      } fixed inset-0 bg-black/70`}
      css={css`
        z-index: 500;
      `}
    >
      <motion.div className="fixed inset-0 m-auto w-full max-w-[600px] h-full max-h-1/2 bg-neutral-950 p-5 rounded-2xl border-[whitesmoke] border-[2px]">
        <div className="grid grid-cols-1 relative">
          <div
            className="btn_app absolute -top-3 -right-1"
            style={
              {
                "--scale_up": "1.3",
              } as React.CSSProperties
            }
          >
            <X className="text-red-600 h-[50px] w-[50px]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Popup;
