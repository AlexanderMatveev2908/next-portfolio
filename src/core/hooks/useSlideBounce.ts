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
    initial: { x: startX },
    animate: {
      x: [startX, ...vals],
      willChange: ["transform"],
    },
    transition: {
      duration: 1,
      ease: easeInOut,
      delay: 0.5,
    },
  };
};
