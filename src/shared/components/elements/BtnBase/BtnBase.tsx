"use client";

import { isStr } from "@/core/lib/dataStructure";
import { LucideProps } from "lucide-react";
import type {
  FC,
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from "react";

type PropsType = {
  el: {
    txt?: string;
    svg?:
      | ((props: SVGProps<SVGSVGElement>) => React.JSX.Element)
      | ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
        >;
  };
};

const BtnBase: FC<PropsType> = ({ el }) => {
  return (
    <button
      className="btn_app py-2 px-4 w-full h-full flex items-center gap-6  text-gray-300 appearance-none justify-center"
      style={
        {
          "--scale_up": "1.25",
        } as React.CSSProperties
      }
    >
      {el.svg && <el.svg className="min-w-[40px] min-h-[40px]" />}

      {isStr(el.txt) && <span className="txt__lg">{el.txt}</span>}
    </button>
  );
};

export default BtnBase;
