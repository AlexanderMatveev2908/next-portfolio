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

export const optFancyV2 = Array.from({ length: 6 }, (_, i) => ({
  css: css`
    top: ${i <= 2 ? genRandom(-50, 75) : undefined}%;
    bottom: ${i > 2 ? genRandom(-50, 75) : undefined}%;

    left: ${i <= 2 ? genRandom(-50, 0) : undefined}%;
    right: ${i > 2 ? genRandom(-50, 0) : undefined}%;
  `,
}));
