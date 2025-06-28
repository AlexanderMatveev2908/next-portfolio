import { FilterAppType } from "@/features/Projects/slice";
import { v4 } from "uuid";

export const btnFilters = ["All", "Full-Stack", "Frontend-Only"].map((el) => ({
  label: el,
  id: v4(),
})) as { label: FilterAppType; id: string }[];
