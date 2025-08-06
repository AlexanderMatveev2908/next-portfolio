import { SqlAlchemy } from "@/shared/components/SVGs";
import SvgAws from "@/shared/components/SVGs/Aws";
import SvgBootstrap from "@/shared/components/SVGs/Bootstrap";
import SvgCloudinary from "@/shared/components/SVGs/Cloudinary";
import SvgCss from "@/shared/components/SVGs/Css";
import SvgDocker from "@/shared/components/SVGs/Docker";
import SvgFastApi from "@/shared/components/SVGs/FastApi";
import SvgFastify from "@/shared/components/SVGs/Fastify";
import SvgFigma from "@/shared/components/SVGs/Figma";
import SvgFly from "@/shared/components/SVGs/Fly";
import SvgFramer from "@/shared/components/SVGs/Framer";
import SvgGit from "@/shared/components/SVGs/Git";
import SvgGithub from "@/shared/components/SVGs/Github";
import SvgGunicorn from "@/shared/components/SVGs/Gunicorn";
import SvgHtml from "@/shared/components/SVGs/Html";
import SvgJavascript from "@/shared/components/SVGs/Javascript";
import SvgJest from "@/shared/components/SVGs/Jest";
import SvgJwt from "@/shared/components/SVGs/Jwt";
import SvgLinux from "@/shared/components/SVGs/Linux";
import SvgMongodb from "@/shared/components/SVGs/Mongodb";
import SvgNextjs from "@/shared/components/SVGs/Nextjs";
import SvgNginx from "@/shared/components/SVGs/Nginx";
import SvgNgrok from "@/shared/components/SVGs/Ngrok";
import SvgNode from "@/shared/components/SVGs/Node";
import SvgNpm from "@/shared/components/SVGs/Npm";
import SvgPlaywright from "@/shared/components/SVGs/Playwright";
import SvgPoetry from "@/shared/components/SVGs/Poetry";
import SvgPostgres from "@/shared/components/SVGs/Postgres";
import SvgPostman from "@/shared/components/SVGs/Postman";
import SvgPrisma from "@/shared/components/SVGs/Prisma";
import SvgPydantic from "@/shared/components/SVGs/Pydantic";
import SvgPython from "@/shared/components/SVGs/Python";
import SvgReact from "@/shared/components/SVGs/React";
import SvgReactRouter from "@/shared/components/SVGs/ReactRouter";
import SvgRedux from "@/shared/components/SVGs/Redux";
import SvgSass from "@/shared/components/SVGs/Sass";
import SvgSequelize from "@/shared/components/SVGs/Sequelize";
import SvgStripe from "@/shared/components/SVGs/Stripe";
import SvgTailwind from "@/shared/components/SVGs/Tailwind";
import SvgTypescript from "@/shared/components/SVGs/Typescript";
import SvgUseQuery from "@/shared/components/SVGs/UseQuery";
import SvgVite from "@/shared/components/SVGs/Vite";
import SvgVitest from "@/shared/components/SVGs/Vitest";
import SvgVsc from "@/shared/components/SVGs/Vsc";
import SvgYarn from "@/shared/components/SVGs/Yarn";
import SvgZod from "@/shared/components/SVGs/Zod";
import SvgZsh from "@/shared/components/SVGs/Zsh";
import { v4 } from "uuid";

export const stack = [
  {
    svg: SvgHtml,
  },
  {
    svg: SvgCss,
  },
  {
    svg: SvgSass,
  },
  {
    svg: SvgJavascript,
  },
  {
    svg: SvgTypescript,
  },
  {
    svg: SvgPython,
  },
  {
    svg: SvgLinux,
  },
  {
    svg: SvgGit,
  },
  {
    svg: SvgGithub,
    clr: "whitesmoke",
  },
  {
    svg: SvgZsh,
    clr: "whitesmoke",
  },
  {
    svg: SvgNode,
  },
  {
    svg: SvgNpm,
    clr: "#CB3837",
  },
  {
    svg: SvgYarn,
  },
  {
    svg: SvgPoetry,
  },
  {
    svg: SvgGunicorn,
  },
  {
    svg: SvgFigma,
  },
  {
    svg: SvgBootstrap,
  },
  {
    svg: SvgTailwind,
  },
  {
    svg: SvgFramer,
  },
  {
    svg: SvgVite,
  },
  {
    svg: SvgReact,
  },
  {
    svg: SvgReactRouter,
    clr: "whitesmoke",
  },
  {
    svg: SvgUseQuery,
  },
  {
    svg: SvgRedux,
  },
  {
    svg: SvgNextjs,
    clr: "whitesmoke",
  },
  {
    svg: SvgZod,
  },
  {
    svg: SvgPydantic,
    clr: "whitesmoke",
  },
  {
    svg: SvgFastify,
    clr: "whitesmoke",
  },
  {
    svg: SvgFastApi,
  },
  {
    svg: SvgMongodb,
  },
  {
    svg: SvgPostgres,
  },
  {
    svg: SqlAlchemy,
    clr: "whitesmoke",
  },
  {
    svg: SvgSequelize,
  },
  {
    svg: SvgPrisma,
    clr: "#0C344B",
  },
  {
    svg: SvgCloudinary,
  },
  {
    svg: SvgAws,
    clr: "whitesmoke",
  },
  {
    svg: SvgStripe,
  },
  {
    svg: SvgJwt,
  },
  {
    svg: SvgVsc,
  },
  {
    svg: SvgPostman,
  },
  {
    svg: SvgJest,
  },
  {
    svg: SvgPlaywright,
  },
  {
    svg: SvgVitest,
  },
  {
    svg: SvgDocker,
  },
  {
    svg: SvgNginx,
  },
  {
    svg: SvgNgrok,
    clr: "whitesmoke",
  },
  {
    svg: SvgFly,
  },
].map((el) => ({
  ...el,
  id: v4(),
}));
