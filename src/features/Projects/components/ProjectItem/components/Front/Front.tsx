/** @jsxImportSource @emotion/react */

"use client";

import { ProjectType } from "@/features/Projects/uiFactory";
import Txt from "@/shared/components/elements/Txt/Txt";
import ImgLoader from "@/shared/components/HOC/ImgLoader/ImgLoader";
import { css } from "@emotion/react";
import { forwardRef } from "react";

type PropsType = {
  el: ProjectType;
};

const Front = forwardRef<HTMLDivElement, PropsType>(({ el }, ref) => {
  return (
    <div className="client rounded-xl" ref={ref}>
      <div className="w-full h-full flex flex-col gap-3">
        <div className="w-full bg-black px-3 py-2">
          <Txt {...{ txt: el.title, size: "txt__lg" }} />
        </div>

        <hr className="min-h-[2px] bg-gray-300" />
        <div
          css={css`
            width: 100%;
            aspect-ratio: 16/9;
          `}
        >
          <ImgLoader
            {...{
              src: el.imgs[0],
              alt: `Image of ${el.title} from ${el.host}`,
            }}
          />
        </div>
      </div>
    </div>
  );
});

Front.displayName = "Front";

export default Front;
