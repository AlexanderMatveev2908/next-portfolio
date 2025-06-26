/** @jsxImportSource @emotion/react */

"use client";

import type { FC } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const Popup: FC = () => {
  return (
    <div
      className={`fixed inset-0 bg-black/70`}
      css={css`
        z-index: 500;
      `}
    >
      <motion.div className="fixed inset-0 m-auto w-full max-w-[600px] h-full max-h-1/2 bg-neutral-950 p-5 rounded-2xl border-[whitesmoke] border-[2px]">
        <div className="grid grid-cols-1 relative">
          <div className="btn_app absolute -top-3 -right-1">
            <X className="text-red-600 h-[50px] w-[50px]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Popup;
