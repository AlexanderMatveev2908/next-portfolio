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
  Postgres,
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
    clr: "whitesmoke",
  },
  {
    svg: Node,
  },
  {
    svg: Npm,
    clr: "#CB3837",
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
    clr: "whitesmoke",
  },
  {
    svg: Zod,
  },
  {
    svg: Mongodb,
  },
  {
    svg: Postgres,
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
    clr: "whitesmoke",
  },
  {
    svg: Fly,
  },
].map((el) => ({
  ...el,
  id: v4(),
}));
