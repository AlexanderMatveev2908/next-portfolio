"use client";

import type { FC, SVGProps } from "react";
import { WrapSectionStyled } from "./Styled";
import Txt from "../../elements/Txt/Txt";

type PropsType = {
  el: {
    id?: string;
    txt: string;
    svg: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
  };
  children: React.ReactNode;
};

const WrapSection: FC<PropsType> = ({ el, children }) => {
  return (
    <WrapSectionStyled className="w-full flex flex-col justify-center gap-10">
      <div className="w-full flex justify-start gap-6 items-center">
        <el.svg className="w-[40px] h-[40px] text-[var(--whitesmoke)]" />
        <Txt {...{ txt: el.txt }} />
      </div>

      {children}
    </WrapSectionStyled>
  );
};

export default WrapSection;
