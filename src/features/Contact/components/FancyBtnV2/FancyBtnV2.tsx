/** @jsxImportSource @emotion/react */

"use client";

import { useState, type FC } from "react";
import Anchor from "../Anchor/Anchor";
import { css } from "@emotion/react";

type PropsType = {
  href: string;
};

const FancyBtnV2: FC<PropsType> = ({ href }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Anchor {...{ href, setIsHover }}>
      <div
        className="w-full flex justify-center max-w-fit h-full max-h-fit"
        css={css`
          border: 2px solid var(--whitesmoke);
          padding: 7.5px 50px;
          border-radius: 15px;
        `}
      >
        <span className="txt__lg font-bold text-[whitesmoke] relative z-60">
          Contact
        </span>
      </div>
    </Anchor>
  );
};

export default FancyBtnV2;
