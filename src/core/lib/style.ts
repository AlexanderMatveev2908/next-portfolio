import { v4 } from "uuid";
import { uiBreaks } from "../constants/uiBreaks";

export const getCountSpinner = () => {
  const w = window.innerWidth;

  const count = w > uiBreaks.lg ? 18 : w > 500 ? 15 : 12;

  return Array.from({ length: count }, () => v4());
};

export const resp = (str: keyof typeof uiBreaks | number) =>
  str in uiBreaks
    ? `@media screen and (min-width: ${
        uiBreaks[str as keyof typeof uiBreaks]
      }px)`
    : `@media screen and (min-width: ${str}px)`;

export const calcRatioH = (w: number, type: "16/9" | "9/16"): number =>
  w * (type === "16/9" ? 9 / 16 : 16 / 9);

export const getNumCards = () =>
  window.innerWidth > uiBreaks.lg ? 6 : window.innerWidth > uiBreaks.md ? 4 : 2;

export const genNumBlockBtns = () =>
  window.innerWidth > uiBreaks.xl
    ? 10
    : window.innerWidth > uiBreaks.lg
    ? 8
    : window.innerWidth > uiBreaks.md
    ? 6
    : window.innerWidth > uiBreaks.sm
    ? 4
    : window.innerWidth > 400
    ? 2
    : 1;
