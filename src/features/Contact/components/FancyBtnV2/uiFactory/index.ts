import { genRandom } from "@/core/lib/etc";
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

export const optFancyV2 = Array.from({ length: 6 }, (_, i) => {
  const arg: string[] = [];

  if (i <= 2) {
    arg.push(`top: ${genRandom(-50, 25)}%;`);
    arg.push(`left: ${genRandom(-50, 25)}%;`);
  } else {
    arg.push(`bottom: ${genRandom(-50, 25)}%;`);
    arg.push(`right: ${genRandom(-50, 25)}%;`);
  }

  return {
    css: css`
      ${arg.join("\n")}
    `,
  };
});
