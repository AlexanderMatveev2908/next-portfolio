import {
  BtnApi,
  BtnBrackets,
  BtnDb,
  BtnGit,
  BtnHtml,
  BtnKey,
} from "@/shared/components/SVGs";
import { v4 } from "uuid";

export const btnFancySVGs = [
  BtnHtml,
  BtnApi,
  BtnBrackets,
  BtnGit,
  BtnKey,
  BtnDb,
]
  .sort(() => Math.random() - 0.5)
  .map((el) => ({
    svg: el,
    id: v4(),
  }));
