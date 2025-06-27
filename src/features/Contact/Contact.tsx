"use client";

import WrapSection from "@/shared/components/HOC/WrapSection/WrapSection";
import { ContactPhone } from "@/shared/components/SVGs";
import type { FC } from "react";
import FancyBtn from "./components/FancyBtn/FancyBtn";

const Contact: FC = () => {
  return (
    <WrapSection
      {...{
        el: {
          txt: "Contact",
          id: "contact",
          svg: ContactPhone,
        },
      }}
    >
      <div className="w-full grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="w-full grid grid-cols-1 gap-5">
          <div className="w-full flex max-w-[75%] justify-self-center">
            <span className="txt__md font-semibold text-gray-300">
              For additional information about my background, feel free to
              checkout my CV below ✌🏼
            </span>
          </div>

          <div className="flex justify-center items-center">
            <FancyBtn {...{ href: "ALEXANDER_MTAVEEV_CV.pdf" }} />
          </div>
        </div>
      </div>
    </WrapSection>
  );
};

export default Contact;
