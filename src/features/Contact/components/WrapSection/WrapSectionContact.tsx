"use client";

import type { FC } from "react";

type PropsType = {
  txt: string;
  children: React.ReactNode;
};

const WrapSectionContact: FC<PropsType> = ({ txt, children }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-5">
      <div className="w-full flex max-w-[75%] justify-self-center">
        <span className="txt__md font-semibold text-gray-300">{txt}</span>
      </div>

      {children}
    </div>
  );
};

export default WrapSectionContact;
