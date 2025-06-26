/** @jsxImportSource @emotion/react */

"use client";

import { useEffect, useRef, type FC } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getPopState, popSlice } from "@/features/Popup/slice";
import { delStorage } from "@/core/lib/storage";
import { varPop } from "./uiFactory";
import Txt from "@/shared/components/elements/Txt/Txt";
import { clearTimerID } from "@/core/lib/etc";
import ContentMD from "./components/ContentMD/ContentMD";

const Popup: FC = () => {
  const popRef = useRef<HTMLDivElement>(null);
  const timerID = useRef<NodeJS.Timeout | null>(null);

  const popState = useSelector(getPopState);

  const dispatch = useDispatch();
  const handleClose = () => {
    delStorage("popup");
    dispatch(popSlice.actions.closePop());
  };

  useEffect(() => {
    const listen = (e: MouseEvent) => {
      if (!popRef.current || popRef.current.contains(e.target as Node)) return;

      const openers = document.querySelectorAll(".opener_pop");
      for (const op of openers) if (op.contains(e.target as Node)) return;

      dispatch(popSlice.actions.closePop());
    };

    document.addEventListener("mousedown", listen);
    return () => {
      document.removeEventListener("mousedown", listen);
    };
  }, [dispatch]);

  useEffect(() => {
    const handleReset = () => {
      if (typeof popState.isPop !== "boolean" || popState.isPop) return;

      timerID.current = setTimeout(() => {
        dispatch(popSlice.actions.resetPop());
        clearTimerID(timerID);
      }, 1000);
    };

    handleReset();
  }, [dispatch, popState.isPop]);

  return (
    <>
      <div
        className={`${
          popState.isPop ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed inset-0 bg-black/70`}
        css={css`
          z-index: 500;
        `}
      ></div>

      <motion.div
        ref={popRef}
        className="fixed inset-0 m-auto w-full max-w-[600px] h-full max-h-1/2 bg-neutral-950 p-5 rounded-2xl border-[whitesmoke] border-[2px]"
        variants={varPop}
        initial={{
          scaleX: 0,
          scaleY: 0,
        }}
        animate={
          typeof popState.isPop === "boolean"
            ? popState.isPop
              ? "open"
              : "close"
            : undefined
        }
        css={css`
          z-index: 1000;
        `}
      >
        <div className="flex flex-col relative gap-10 min-h-0 max-h-full pb-5">
          <div
            onClick={handleClose}
            className="btn_app absolute -top-3 -right-1"
            style={
              {
                "--scale_up": "1.3",
              } as React.CSSProperties
            }
          >
            <X className="text-red-600 h-[50px] w-[50px]" />
          </div>

          <div className="w-full flex justify-center">
            <Txt {...{ txt: popState.content?.title ?? "" }} />
          </div>

          <ContentMD {...{ popState }} />
        </div>
      </motion.div>
    </>
  );
};

export default Popup;
