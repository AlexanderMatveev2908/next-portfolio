import { v4 } from "uuid";
import { uiBreaks } from "../constants/uiBreaks";

export const getCountSpinner = () => {
  const w = window.innerWidth;

  const count =
    w > uiBreaks.xl
      ? 18
      : w > uiBreaks.lg
      ? 15
      : w > uiBreaks.md
      ? 12
      : w > uiBreaks.sm
      ? 10
      : 8;

  return Array.from({ length: count }, () => v4());
};

export const resp = (str: keyof typeof uiBreaks) =>
  `@media screen and (min-width: ${uiBreaks[str]}px)`;
