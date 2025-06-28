/** @jsxImportSource @emotion/react */

"use client";

import { isStr } from "@/core/lib/dataStructure";
import { css, SerializedStyles } from "@emotion/react";
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

  $custom?: {
    css: SerializedStyles;
  };
  $scaleUp: number;

  handleClick?: () => void;
  disabled?: boolean;
};

const BtnBase: FC<PropsType> = ({
  el,
  $custom,
  handleClick,
  $scaleUp,
  disabled,
}) => {
  return (
    <button
      className="btn_app py-2 px-4 w-full h-full flex items-center gap-6 appearance-none justify-center disabled:opacity-50"
      onClick={handleClick}
      disabled={disabled}
      style={
        {
          "--scale_up": $scaleUp,
        } as React.CSSProperties
      }
      css={css`
        ${$custom?.css}
      `}
    >
      {el.svg && (
        <el.svg className="min-w-[40px] sm:min-w-[50px] min-h-[40px] sm:min-h-[50px]" />
      )}

      {isStr(el.txt) && <span className="txt__lg font-bold">{el.txt}</span>}
    </button>
  );
};

export default BtnBase;
