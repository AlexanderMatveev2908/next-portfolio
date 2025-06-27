/** @jsxImportSource @emotion/react */

"use client";

import { useState, type FC } from "react";
import { css } from "@emotion/react";
import InnerShadow from "./components/InnerShadow/InnerShadow";

type PropsType = {
  href: string;
};

const FancyBtn: FC<PropsType> = ({ href }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-fit h-full max-h-fit relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        css={css`
          padding: 7.5px 50px;
          border: 2px solid var(--whitesmoke);
          border-radius: 15px;
          transition: 0.4s;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: fit-content;
          max-height: 100%;
          pointer-events: none;

          box-shadow: ${isHover
            ? "0 0 10px var(--whitesmoke), 0 0 20px var(--whitesmoke), 0 0 30px var(--whitesmoke)"
            : "none"};
        `}
      >
        <InnerShadow {...{ isHover }} />

        <span className="txt__lg font-bold text-[whitesmoke] relative z-60">
          View CV
        </span>
      </div>

      {/* {btnFancySVGs.map((el) => (
        <div
          key={el.id}
          css={css`
            ${genSizeRandom()}
            color: var(--whitesmoke);

            position: absolute;
          `}
        >
          <el.svg />
        </div>
      ))} */}
    </a>
  );
};

export default FancyBtn;

/*
<a
  href="/files/CV-AlexanderMatveev.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 underline"
>
  📄 View My CV
</a>

*/
