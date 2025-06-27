import { RefObject } from "react";

export const clearTimerID = (ref: RefObject<NodeJS.Timeout | null>) => {
  if (!ref.current) return;

  clearTimeout(ref.current);
  ref.current = null;
};

export const genRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const genSizeRandom = () => {
  const size = genRandom(25, 40);

  return `
    width: ${size}px;
    height: ${size}px;
  `;
};
