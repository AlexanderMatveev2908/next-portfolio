"use client";

import type { FC } from "react";
import { HeaderStyled } from "./Styled";
import HeaderLink from "@/core/layout/components/Header/components/HeaderLink/HeaderLink";
import { headerLinks } from "./uiFactory";

const Header: FC = ({}) => {
  return (
    <HeaderStyled className="w-full grid grid-cols-[1fr_2fr]">
      <div className="w-full flex justify-start">
        <HeaderLink {...{ $clr: "gray__0", txt: "A.M", to: "" }} />
      </div>

      <div className="w-full grid grid-cols-2 justify-items-center">
        {headerLinks.map((el) => (
          <HeaderLink key={el.id} {...{ $clr: "white__0", ...el }} />
        ))}
      </div>
    </HeaderStyled>
  );
};

export default Header;
