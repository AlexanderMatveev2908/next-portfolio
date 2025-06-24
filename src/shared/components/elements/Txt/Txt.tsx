"use client";

import type { FC } from "react";
import { TxtStyled } from "./Styled";

type PropsType = {
  txt: string;
  $clr?: string;
  size?: string;
};

const Txt: FC<PropsType> = ({ txt, $clr, size }) => {
  return (
    <TxtStyled
      {...{ $clr }}
      className={`w-fit flex font-bold ${size ?? "txt__xl"}`}
    >
      <span>{txt}</span>
    </TxtStyled>
  );
};

export default Txt;
