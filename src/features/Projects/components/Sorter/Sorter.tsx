"use client";

import { useState, type FC } from "react";
import DropDown from "../DropDown/DropDown";
import { useHandleDrop } from "@/core/hooks/useHandleDrop";
import { FaSort } from "react-icons/fa";

const Sorter: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { labelRef, filterRef, minH } = useHandleDrop({
    setIsOpen,
  });

  return (
    <DropDown
      {...{
        el: {
          label: "Sort By",
          svg: FaSort,
        },
        isOpen,
        setIsOpen,
        refs: {
          labelRef,
          filterRef,
        },
        minH,
      }}
    >
      <div className=""></div>
    </DropDown>
  );
};

export default Sorter;
