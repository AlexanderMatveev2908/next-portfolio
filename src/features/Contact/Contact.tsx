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
      <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div className="w-[300px] h-[60px] flex justify-center items-center">
          <FancyBtn />
        </div>
      </div>
    </WrapSection>
  );
};

export default Contact;
