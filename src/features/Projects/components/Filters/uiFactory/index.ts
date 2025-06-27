import { FilterAppType } from "@/features/Projects/slice";
import { css } from "@emotion/react";
import { v4 } from "uuid";

export const btnFilters = ["All", "Full-Stack", "Front-Only"].map((el) => ({
  label: el,
  id: v4(),
})) as { label: FilterAppType; id: string }[];

export const optHover = css`
  background-color: var(--whitesmoke);
  color: var(--neutral__950);
`;
