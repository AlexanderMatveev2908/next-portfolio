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
      <Header />

      <div
        className="w-full h-full min-h-screen flex flex-col pad_app pb-[75px] sm:pb-[150px]"
        css={css`
          background: var(--black__0);
        `}
      >
        {children}
      </div>

      <Footer />
    </WrapClient>
  );
};

export default ClientShell;
