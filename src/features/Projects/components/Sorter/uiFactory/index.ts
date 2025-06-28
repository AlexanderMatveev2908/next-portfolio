import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { v4 } from "uuid";

export const sortersApp = [
  {
    label: "Created At",
    svg: FaSortAmountDown,
    val: "DEC",
  },

  { label: "Created At", svg: FaSortAmountUp, val: "INC" },
].map((el) => ({ ...el, id: v4() }));
