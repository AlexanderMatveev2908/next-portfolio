/** @jsxImportSource @emotion/react */

"use client";

import Header from "@/core/layout/components/Header/Header";
import type { FC } from "react";
import Footer from "../components/Footer/Footer";
import WrapClient from "./WrapClient";
import { css } from "@emotion/react";
import Providers from "./Providers";
import Popup from "../components/Popup/Popup";

type PropsType = {
  children: React.ReactNode;
};

const ClientShell: FC<PropsType> = ({ children }) => {
  return (
    <WrapClient>
      <Providers>
        <Header />

        <Popup />

        <div
          className="w-full h-full min-h-screen flex flex-col pad_app pb-[75px] sm:pb-[150px]"
          css={css`
            background: var(--neutral__950);
          `}
        >
          {children}
        </div>

        <Footer />
      </Providers>
    </WrapClient>
  );
};

export default ClientShell;
