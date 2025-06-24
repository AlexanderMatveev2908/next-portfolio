"use client";

import { useEffect, useState, type FC } from "react";
import { getCountSpinner } from "@/core/lib/style";
import { SpinnerStyled } from "./Styled";

const Spinner: FC = () => {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    const listen = () => {
      setIds(getCountSpinner());
    };

    listen();
    window.addEventListener("resize", listen);

    return () => {
      window.removeEventListener("resize", listen);
    };
  }, []);

  return (
    <SpinnerStyled className="w-full h-full min-h-screen overflow-hidden flex justify-center items-center">
      <div className="__wrap relative w-full">
        {ids.map((id, i) => (
          <div
            key={id}
            className="__circle absolute inset-0"
            // ? ooo all same place => add rotation all after are now relatively around ooo => add translateY now are now relatively around ooo but also distanced from center
            style={{
              transform: `rotate(${
                (360 / ids.length) * i
              }deg) translateY(-50%)`,
            }}
          >
            <div
              style={
                {
                  "--dot_delay": `${(1.2 / ids.length) * i}s`,
                } as React.CSSProperties
              }
              className="__dot"
              // initial={{
              //   opacity: 0,
              //   scale: 0,
              // }}
              // animate={{
              //   scale: [1, 0],
              //   opacity: [1, 0],
              // }}
              // transition={{
              //   duration: 1.2,
              //   repeat: Infinity,
              //   ease: "linear",
              //   delay: -(1.2 / ids.length) * i,
              // }}
              // style={{
              //   transform: "scale(0)",
              //   opacity: 0,
              // }}
            ></div>
          </div>
        ))}
      </div>
    </SpinnerStyled>
  );
};

export default Spinner;
