"use client";

import type { FC } from "react";

type PropsType = {
  href: string;
  children: React.ReactNode;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
};

const Anchor: FC<PropsType> = ({ href, children, setIsHover }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-fit h-full max-h-fit relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </a>
  );
};

export default Anchor;
