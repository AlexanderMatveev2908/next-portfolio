import { v4 } from "uuid";
import { uiBreaks } from "../constants/uiBreaks";
import { isWindow } from "./etc";

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
  window.innerWidth > uiBreaks._2xl
    ? 3
    : window.innerWidth > uiBreaks.sm
    ? 2
    : 1;
// window.innerWidth > uiBreaks.lg ? 6 : window.innerWidth > uiBreaks.md ? 4 : 2;

export const genNumBlockBtns = () => {
  if (!isWindow()) return 1;

  const w = window.visualViewport?.width ?? window.innerWidth;

  return w > uiBreaks.xl
    ? 10
    : w > uiBreaks.lg
    ? 8
    : w > uiBreaks.md
    ? 6
    : w > uiBreaks.sm
    ? 4
    : w > 400
    ? 2
    : 1;
};
