"use client";

import type { FC } from "react";
import { HeaderStyled } from "./Styled";
import HeaderLink from "@/shared/components/elements/HeaderLink/HeaderLink";

const Header: FC = ({}) => {
  return (
    <HeaderStyled className="w-full grid grid-cols-2">
      <HeaderLink {...{ $clr: "gray__0", txt: "A.M", to: "" }} />
    </HeaderStyled>
  );
};

export default Header;
