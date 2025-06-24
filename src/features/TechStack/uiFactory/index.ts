import {
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
  Mongodb,
  Nextjs,
  Nginx,
  Ngrok,
  Node,
  Npm,
  Playwright,
  Postgresql,
  React,
  ReactRouter,
  Redux,
  Sass,
  Sequelize,
  Stripe,
  Tailwind,
  Typescript,
  Vite,
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
}));
