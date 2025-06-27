/** @jsxImportSource @emotion/react */
"use client";

import type { FC } from "react";
import { HeaderStyled } from "./Styled";
import HeaderLink from "@/core/layout/components/Header/components/HeaderLink/HeaderLink";
import { headerLinks } from "./uiFactory";
import { css } from "@emotion/react";

const Header: FC = ({}) => {
  return (
    <HeaderStyled className="w-full grid grid-cols-[1fr_2fr] sticky top-0 z-60 pt-[15px] sm:pt-[25px] pb-[20px] pad_app">
      <div className="w-full flex justify-start ">
        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="link cursor-pointer"
        >
          <span
            css={css`
              color: var(--gray__300);
            `}
            className="txt__lg font-semibold"
          >
            A.M — Full-Stack
          </span>
        </div>
      </div>

      <div className="w-full flex gap-5 sm:gap-10 justify-end items-start">
        {headerLinks.map((el) => (
          <HeaderLink key={el.id} {...{ $clr: "whitesmoke", ...el }} />
        ))}
      </div>
    </HeaderStyled>
  );
};

export default Header;
