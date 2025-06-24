import { easeInOut } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Params = {
  direction: "left" | "right";
};

export const useSlideBounce = ({ direction }: Params) => {
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined")
      setStartX(window.innerWidth * (direction === "left" ? -1 : 1));
  }, [direction]);

  const vals = useMemo(
    () =>
      [-150, 100, -75, 50, -25, 0].map(
        (x) => x * (direction === "left" ? -1 : 1)
      ),
    [direction]
  );

  return {
    initial: { x: startX, opacity: 0 },
    animate: {
      x: [startX, ...vals],
      opacity: [0, 0.4, 0.6, 0.8, 1, 1, 1],

      willChange: ["transform", "opacity"],
    },
    transition: {
      duration: 1,
      ease: easeInOut,
      delay: 0.3,
    },
  };
};
