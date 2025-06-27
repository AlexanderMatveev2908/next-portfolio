import {
  BtnApi,
  BtnBrackets,
  BtnDb,
  BtnGit,
  BtnHtml,
  BtnKey,
} from "@/shared/components/SVGs";
import { css } from "@emotion/react";
import { v4 } from "uuid";

export const btnFancySVGs = [
  BtnHtml,
  BtnApi,
  BtnBrackets,
  BtnGit,
  BtnKey,
  BtnDb,
].map((el) => ({
  svg: el,
  id: v4(),
}));

export const optFancyV2 = [
  {
    css: css`
      top: -25%;
      left: -25%;
    `,
  },
  {
    css: css`
      top: -25%;
      right: -25%;
    `,
  },
  {
    css: css`
      bottom: -25%;
      left: -25%;
    `,
  },
  {
    css: css`
      bottom: -25%;
      right: -25%;
    `,
  },
  {
    css: css`
      bottom: -75%;
      right: 25%;
    `,
  },
  {
    css: css`
      top: -75%;
      left: 25%;
    `,
  },
];
