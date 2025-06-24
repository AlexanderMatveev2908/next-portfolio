"use client";

import type { FC } from "react";
import { HeaderLinkStyled } from "./Styled";
import Link from "next/link";

type PropsType = {
  txt: string;
  to: string;
  $clr: string;
};

const HeaderLink: FC<PropsType> = ({ $clr, txt, to }) => {
  return (
    <Link href={`#${to}`} className="link ">
      <HeaderLinkStyled {...{ $clr }} className="txt__lg font-semibold">
        {txt}
      </HeaderLinkStyled>
    </Link>
  );
};

export default HeaderLink;
