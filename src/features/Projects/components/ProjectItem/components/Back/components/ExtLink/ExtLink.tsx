/** @jsxImportSource @emotion/react */

"use client";

import { useMemo, type FC } from "react";
import { Github, Rocket } from "@/shared/components/SVGs";
import { HostType, TypeApp } from "@/features/Projects/uiFactory";
import { css } from "@emotion/react";

type PropsType = {
  href: string;
  typeLink: "git" | "live";
  host: HostType;
  typeApp: TypeApp;
  isDown?: boolean;
};

const ExtLink: FC<PropsType> = ({ href, typeLink, host, isDown }) => {
  const Icon = useMemo(
    () => (typeLink === "git" ? Github : Rocket),
    [typeLink]
  );
  const label = typeLink === "git" ? "GitHub Repo" : `Live on ${host}`;

  return (
    <div className="w-full grid grid-cols-1 justify-items-center gap-4">
      {typeLink === "live" && isDown ? (
        <div className="w-full flex items-center flex-col gap-1 justify-center">
          <span className="txt__md">Live not available</span>
          <span className="txt__md">Machine currently down</span>
        </div>
      ) : (
        <a
          href={href}
          target="_blank"
          className="w-fit flex items-center gap-5 cursor-pointer border-2 border-gray-300 rounded-xl py-2 px-3"
          css={css`
            transition: 0.3s box-shadow, 0.15s transform;
            &:hover {
              box-shadow: 0 0 10px var(--whitesmoke), 0 0 20px var(--whitesmoke),
                0 0 30px var(--whitesmoke);
              transform: translateY(-3.5px);
            }
          `}
          aria-label={label}
        >
          <Icon className="w-[22.5px] h-[22.5px] sm:w-[30px] sm:h-[30px]" />

          <span className="txt__md font-bold">{label}</span>
        </a>
      )}
    </div>
  );
};

export default ExtLink;
