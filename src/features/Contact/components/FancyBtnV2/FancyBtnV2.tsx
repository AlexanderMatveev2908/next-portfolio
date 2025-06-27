/** @jsxImportSource @emotion/react */

"use client";

import { useState, type FC } from "react";
import Anchor from "../Anchor/Anchor";
import { css } from "@emotion/react";
import { btnFancySVGs } from "./uiFactory";
import { genSizeRandom } from "@/core/lib/etc";

type PropsType = {
  href: string;
};

const FancyBtnV2: FC<PropsType> = ({ href }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Anchor {...{ href, setIsHover }}>
      <div
        className="w-full flex justify-center max-w-fit h-full max-h-fit relative"
        css={css`
          border: 2px solid var(--whitesmoke);
          padding: 7.5px 50px;
          border-radius: 15px;
        `}
      >
        <div
          className="absolute min-w-full min-h-full top-[0.75rem] -left-[1rem] border-2"
          css={css`
            border-radius: 15px;
            border: 2px solid var(--whitesmoke);
          `}
        ></div>

        <div className="absolute inset-0 z-40 bg-neutral-950 rounded-[15px]"></div>

        <span className="txt__lg font-bold text-[whitesmoke] relative z-60">
          Contact
        </span>
      </div>

      {btnFancySVGs.map((el) => (
        <el.svg
          css={css`
            ${genSizeRandom()}
            color: var(--whitesmoke);
          `}
          key={el.id}
          className="absolute"
        />
      ))}
    </Anchor>
  );
};

export default FancyBtnV2;
