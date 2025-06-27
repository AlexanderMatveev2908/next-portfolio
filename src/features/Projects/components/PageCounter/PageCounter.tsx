"use client";

import { useEffect, useState, type FC } from "react";
import { useSelector } from "react-redux";
import { getProjectsState } from "../../slice";
import { projects } from "../../uiFactory";
import { getNumCards } from "@/core/lib/style";
import BtnBase from "@/shared/components/elements/BtnBase/BtnBase";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const PageCounter: FC = () => {
  const projState = useSelector(getProjectsState);
  const [maxCards, setMaxCards] = useState(getNumCards());

  useEffect(() => {
    const listen = () => setMaxCards(getNumCards());

    window.addEventListener("resize", listen);
    return () => {
      window.removeEventListener("resize", listen);
    };
  }, []);

  return (
    <div className="w-full grid grid-cols-[60px_1fr_60px] items-center">
      <BtnBase
        {...{
          el: {
            svg: ArrowBigLeft,
          },
        }}
      />

      <div className=""></div>

      <BtnBase
        {...{
          el: {
            svg: ArrowBigRight,
          },
        }}
      />
    </div>
  );
};

export default PageCounter;
