/** @jsxImportSource @emotion/react */

"use client";

import type { FC } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

const Popup: FC = () => {
  return (
    <div
      className={`fixed inset-0 bg-black/70`}
      css={css`
        z-index: 500;
      `}
    >
      <motion.div className="fixed inset-0 m-auto w-full max-w-[600px] h-full max-h-1/2 bg-neutral-950 p-5 rounded-2xl"></motion.div>
    </div>
  );
};

export default Popup;
