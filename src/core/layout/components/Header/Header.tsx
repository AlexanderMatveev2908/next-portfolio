"use client";

import type { FC } from "react";
import { HeaderStyled } from "./Styled";
import HeaderLink from "@/core/layout/components/Header/components/HeaderLink/HeaderLink";
import { headerLinks } from "./uiFactory";

const Header: FC = ({}) => {
  return (
    <HeaderStyled className="w-full grid grid-cols-[1fr_2fr] sticky top-0 z-60 pt-[15px] sm:pt-[25px] pb-[10px] pad_app">
      <div className="w-full flex justify-start">
        <HeaderLink {...{ $clr: "gray__300", txt: "A.M", to: "" }} />
      </div>

      <div className="w-full flex gap-5 sm:gap-10 justify-end">
        {headerLinks.map((el) => (
          <HeaderLink key={el.id} {...{ $clr: "whitesmoke", ...el }} />
        ))}
      </div>
    </HeaderStyled>
  );
};

export default Header;
