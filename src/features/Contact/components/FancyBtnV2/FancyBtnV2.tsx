"use client";

import { useState, type FC } from "react";

type PropsType = {
  href: string;
};

const FancyBtnV2: FC<PropsType> = ({ href }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-fit h-full max-h-fit relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    ></a>
  );
};

export default FancyBtnV2;
