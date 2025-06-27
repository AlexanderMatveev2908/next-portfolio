"use client";

import WrapSection from "@/shared/components/HOC/WrapSection/WrapSection";
import { ContactPhone } from "@/shared/components/SVGs";
import type { FC } from "react";
import FancyBtn from "./components/FancyBtn/FancyBtn";
import WrapSectionContact from "./components/WrapSection/WrapSectionContact";

const Contact: FC = () => {
  return (
    <WrapSection
      {...{
        el: {
          txt: "Contact",
          svg: ContactPhone,
        },
        id: "contact",
      }}
    >
      <div className="w-full grid grid-cols-1 gap-10 lg:grid-cols-2">
        <WrapSectionContact
          {...{
            txt: `For additional information about my background, feel free to
              check out my CV below ✌🏼`,
          }}
        >
          <div className="flex justify-center items-center">
            <FancyBtn {...{ href: "ALEXANDER_MTAVEEV_CV.pdf" }} />
          </div>
        </WrapSectionContact>
      </div>
    </WrapSection>
  );
};

export default Contact;
