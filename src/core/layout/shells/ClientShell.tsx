/** @jsxImportSource @emotion/react */

"use client";

import Header from "@/core/layout/components/Header/Header";
import type { FC } from "react";
import Footer from "../components/Footer/Footer";
import WrapClient from "./WrapClient";
import { css } from "@emotion/react";

type PropsType = {
  children: React.ReactNode;
};

const ClientShell: FC<PropsType> = ({ children }) => {
  return (
    <WrapClient>
      <div
        className="w-full h-full min-h-screen flex flex-col px-[20px] sm:px-[100px] pt-[20px] pb-[75px] sm:pt-[35px] sm:pb-[150px]"
        css={css`
          background: var(--black__0);
        `}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </WrapClient>
  );
};

export default ClientShell;
