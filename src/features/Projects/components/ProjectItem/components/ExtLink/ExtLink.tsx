/** @jsxImportSource @emotion/react */

"use client";

import { useMemo, type FC } from "react";
import { Github, Rocket } from "@/shared/components/SVGs";
import { HostType, TypeApp } from "@/features/Projects/uiFactory";

type PropsType = {
  href: string;
  type: "git" | "live";
  host: HostType;
  typeApp: TypeApp;
};

const ExtLink: FC<PropsType> = ({ href, type, host, typeApp }) => {
  const Icon = useMemo(() => (type === "git" ? Github : Rocket), [type]);
  const label = type === "git" ? "GitHub Repository" : `Live Demo on ${host}`;

  return (
    <div className="w-full grid grid-cols-1 gap-1">
      <a
        href={href}
        className="w-fit flex items-center gap-5 cursor-pointer link"
        aria-label={label}
      >
        <Icon className="w-[22.5px] h-[22.5px] sm:w-[30px] sm:h-[30px]" />

        <span className="txt__md font-bold">{label}</span>
      </a>
      {typeApp === "Full-Stack" && host === "Render.com" && type === "live" && (
        <span className="txt__xs font-normal text-neutral-400">
          ⚠️ There may be a delay to load the page due to free tier col start
        </span>
      )}
    </div>
  );
};

export default ExtLink;
