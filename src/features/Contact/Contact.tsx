"use client";

import WrapSection from "@/shared/components/HOC/WrapSection/WrapSection";
import { ContactPhone } from "@/shared/components/SVGs";
import type { FC } from "react";
import FancyBtn from "./components/FancyBtn/FancyBtn";
import WrapSectionContact from "./components/WrapSection/WrapSectionContact";
import FancyBtnV2 from "./components/FancyBtnV2/FancyBtnV2";

const msg = encodeURIComponent(
  "Hey Alex 👋🏼, I saw your portfolio and wanted to ..."
);

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
            <FancyBtn {...{ href: "ALEXANDER_MATVEEV_CV.pdf" }} />
          </div>
        </WrapSectionContact>

        <WrapSectionContact
          {...{
            txt: `If you enjoyed my work or have any questions, feel free to reach out! 👻`,
          }}
        >
          <div className="flex justify-center items-center">
            <FancyBtnV2
              {...{
                href: `mailto:matveevalexander470@gmail.com?subject=Work%20Inquiry%20🔨&body=${msg}`,
              }}
            />
          </div>
        </WrapSectionContact>
      </div>
    </WrapSection>
  );
};

export default Contact;
