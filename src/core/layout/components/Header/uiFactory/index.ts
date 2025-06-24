import { v4 } from "uuid";

export const headerLinks = [
  {
    txt: "Projects",
    to: "/#projects",
  },
  {
    txt: "Contact",
    to: "/#contact",
  },
].map((el) => ({
  ...el,
  id: v4(),
}));
