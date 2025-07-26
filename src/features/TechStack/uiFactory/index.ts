import SvgBootstrap from "@/shared/components/SVGs/Bootstrap";
import SvgCloudinary from "@/shared/components/SVGs/Cloudinary";
import SvgCss from "@/shared/components/SVGs/Css";
import SvgDocker from "@/shared/components/SVGs/Docker";
import SvgFastify from "@/shared/components/SVGs/Fastify";
import SvgFigma from "@/shared/components/SVGs/Figma";
import SvgFly from "@/shared/components/SVGs/Fly";
import SvgFramer from "@/shared/components/SVGs/Framer";
import SvgGit from "@/shared/components/SVGs/Git";
import SvgGithub from "@/shared/components/SVGs/Github";
import SvgHtml from "@/shared/components/SVGs/Html";
import SvgJavascript from "@/shared/components/SVGs/Javascript";
import SvgJest from "@/shared/components/SVGs/Jest";
import SvgJwt from "@/shared/components/SVGs/Jwt";
import SvgMongodb from "@/shared/components/SVGs/Mongodb";
import SvgNextjs from "@/shared/components/SVGs/Nextjs";
import SvgNginx from "@/shared/components/SVGs/Nginx";
import SvgNgrok from "@/shared/components/SVGs/Ngrok";
import SvgNode from "@/shared/components/SVGs/Node";
import SvgNpm from "@/shared/components/SVGs/Npm";
import SvgPlaywright from "@/shared/components/SVGs/Playwright";
import SvgPostgres from "@/shared/components/SVGs/Postgres";
import SvgPostman from "@/shared/components/SVGs/Postman";
import SvgPrisma from "@/shared/components/SVGs/Prisma";
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
import SvgVsc from "@/shared/components/SVGs/Vsc";
import SvgYarn from "@/shared/components/SVGs/Yarn";
import SvgZod from "@/shared/components/SVGs/Zod";
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
    svg: SvgGit,
  },
  {
    svg: SvgGithub,
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
    svg: SvgFastify,
    clr: "whitesmoke",
  },
  {
    svg: SvgMongodb,
  },
  {
    svg: SvgPostgres,
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
