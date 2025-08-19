/** @jsxImportSource @emotion/react */

"use client";

import type { FC, SVGProps } from "react";
import Txt from "../../elements/Txt/Txt";
import { motion } from "framer-motion";
import { css, SerializedStyles } from "@emotion/react";

type PropsType = {
  el: {
    id?: string;
    txt: string;
    svg: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
  };
  children: React.ReactNode;
  id?: string;
  $CSS?: SerializedStyles;
};

const WrapSection: FC<PropsType> = ({ el, children, id, $CSS }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      style={{ willChange: "opacity" }}
      animate={{ opacity: 1 }}
      id={id ?? undefined}
      className="w-full flex flex-col justify-center gap-10"
      css={css`
        ${$CSS}
      `}
    >
      <div className="w-full flex justify-start gap-6 items-center">
        <el.svg className="w-[30px] sm:w-[45px] h-[30px] sm:h-[45px] text-[var(--whitesmoke)]" />
        <Txt {...{ txt: el.txt }} />
      </div>

      {children}
    </motion.div>
  );
};

export default WrapSection;
