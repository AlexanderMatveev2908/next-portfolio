import { isEven } from "@/core/lib/math";
import { easeInOut } from "framer-motion";
import { v4 } from "uuid";

export const piecesIntro = [
  {
    txt: "Hi I'm",
    fnt: "txt__lg font-regular",
  },
  {
    txt: "Alexander Matveev",
    fnt: "txt__xl font-semibold",
  },
  {
    txt: "Full-Stack Developer",
    fnt: "txt__2xl font-bold",
  },
].map((el) => ({ ...el, id: v4() }));

export const optAnimation = {
  hidden: (i: number) => ({
    x: window.innerWidth * isEven(i),
    opacity: 0,
  }),
  visible: (i: number) => ({
    x: [window.innerWidth, -200, 150, -100, 75, -50, 0].map(
      (x) => x * isEven(i)
    ),
    opacity: [0, 0.4, 0.4, 0.6, 0.8, 1, 1],
    transition: {
      duration: 1.2,
      delay: 0.35 * i,
      ease: easeInOut,
    },
  }),
};
