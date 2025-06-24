import {
  Bootstrap,
  Cloudinary,
  Css,
  Docker,
  Figma,
  Fly,
  Framer,
  Git,
  Github,
  Html,
  Javascript,
  Jest,
  Jwt,
  Mongodb,
  Nextjs,
  Nginx,
  Ngrok,
  Node,
  Npm,
  Playwright,
  Postgresql,
  Postman,
  React,
  ReactRouter,
  Redux,
  Sass,
  Sequelize,
  Stripe,
  Tailwind,
  Typescript,
  UseQuery,
  Vite,
  Vsc,
  Yarn,
  Zod,
} from "@/shared/components/SVGs";
import { v4 } from "uuid";

export const stack = [
  {
    svg: Html,
  },
  {
    svg: Css,
  },
  {
    svg: Sass,
  },
  {
    svg: Javascript,
  },
  {
    svg: Typescript,
  },
  {
    svg: Git,
  },
  {
    svg: Github,
  },
  {
    svg: Node,
  },
  {
    svg: Npm,
  },
  {
    svg: Yarn,
  },
  {
    svg: Figma,
  },
  {
    svg: Bootstrap,
  },
  {
    svg: Tailwind,
  },
  {
    svg: Framer,
  },
  {
    svg: Vite,
  },
  {
    svg: React,
  },
  {
    svg: ReactRouter,
  },
  {
    svg: UseQuery,
  },
  {
    svg: Redux,
  },
  {
    svg: Nextjs,
  },
  {
    svg: Zod,
  },
  {
    svg: Mongodb,
  },
  {
    svg: Postgresql,
  },
  {
    svg: Sequelize,
  },
  {
    svg: Cloudinary,
  },
  {
    svg: Stripe,
  },
  {
    svg: Jwt,
  },
  {
    svg: Vsc,
  },
  {
    svg: Postman,
  },
  {
    svg: Jest,
  },
  {
    svg: Playwright,
  },
  {
    svg: Docker,
  },
  {
    svg: Nginx,
  },
  {
    svg: Ngrok,
  },
  {
    svg: Fly,
  },
].map((el) => ({
  ...el,
  id: v4(),
  clr: ["svggithub", "svgngrok", "svgnpm", "svgnextjs"].includes(
    el.svg.name.toLowerCase()
  )
    ? "whitesmoke"
    : null,
}));
