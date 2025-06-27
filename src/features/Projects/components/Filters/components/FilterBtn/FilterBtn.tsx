"use client";

import type { FC } from "react";
import { FilterBtnStyled } from "./Styled";

type PropsType = {
  el: {
    label: string;
  };
};

const FilterBtn: FC<PropsType> = ({ el }) => {
  return (
    <FilterBtnStyled className="flex justify-center items-center">
      <span className="txt__md py-2 px-8">{el.label}</span>
    </FilterBtnStyled>
  );
};

export default FilterBtn;
