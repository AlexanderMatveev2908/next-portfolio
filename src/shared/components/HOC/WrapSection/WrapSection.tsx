"use client";

import type { FC, SVGProps } from "react";
import Txt from "../../elements/Txt/Txt";
import { motion } from "framer-motion";

type PropsType = {
  el: {
    id?: string;
    txt: string;
    svg: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
  };
  children: React.ReactNode;
  id?: string;
};

const WrapSection: FC<PropsType> = ({ el, children, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      style={{ willChange: "opacity" }}
      animate={{ opacity: 1 }}
      id={id ?? undefined}
      className="w-full flex flex-col justify-center gap-10"
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
