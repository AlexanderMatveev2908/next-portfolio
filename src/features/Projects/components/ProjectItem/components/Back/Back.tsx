/** @jsxImportSource @emotion/react */

"use client";

import { ProjectType } from "@/features/Projects/uiFactory";
import { css } from "@emotion/react";
import { FC } from "react";
import ExtLink from "./components/ExtLink/ExtLink";
import { useGenIDs } from "@/core/hooks/useGenIDs";
import { useDispatch } from "react-redux";
import { popSlice } from "@/features/Popup/slice";
import { saveStorage } from "@/core/lib/storage";

type PropsType = {
  el: ProjectType;
};

const Back: FC<PropsType> = ({ el }) => {
  const { ids } = useGenIDs({
    lengths: [2],
  });

  const dispatch = useDispatch();
  const handlePop = () => {
    const content = {
      title: el.title,
      fileMD: el.fileMD,
    };
    saveStorage("popup", {
      isPop: true,
      content,
    });

    dispatch(popSlice.actions.openPop(content));
  };

  return (
    <div className="server rounded-xl">
      <div className="w-full flex flex-col gap-4 h-full pb-4">
        <div className="w-full grid grid-cols-1 gap-y-5 px-3 py-2 justify-items-center">
          {[el.repo, el.live].map((subEl, i) => (
            <ExtLink
              key={ids[0][i]}
              {...{
                href: subEl,
                typeLink: !i ? "git" : "live",
                host: el.host,
                typeApp: el.typeApp,
              }}
            />
          ))}
        </div>

        {/* <div className="overflow-y-auto max-h-full scroll_app pr-2">
              <span className="txt__sm">{el.description}</span>
            </div> */}

        <div className="w-full flex flex-col items-center justify-center overflow-y-auto scroll_app h-full">
          <button
            onClick={handlePop}
            className="opener_pop btn_app border-[var(--whitesmoke)] border-2 rounded-xl py-2 px-10"
            css={css`
              &:hover {
                background: var(--whitesmoke);
                color: var(--neutral__950);
              }
            `}
            style={
              {
                "--scale_up": "1.2",
              } as React.CSSProperties
            }
          >
            <span className="txt__sm font-semibold">About</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Back;
