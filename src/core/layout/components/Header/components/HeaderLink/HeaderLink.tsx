"use client";

import type { FC } from "react";
import { HeaderLinkStyled } from "./Styled";

type PropsType = {
  txt: string;
  to: string;
  $clr: string;
};

const HeaderLink: FC<PropsType> = ({ $clr, txt, to }) => {
  return (
    <a href={`#${to}`} className="link">
      <HeaderLinkStyled {...{ $clr }} className="txt__lg font-semibold">
        {txt}
      </HeaderLinkStyled>
    </a>
  );
};

export default HeaderLink;
