import { SqlAlchemy } from "@/shared/components/SVGs";
import SvgAngular from "@/shared/components/SVGs/Angular";
import SvgAws from "@/shared/components/SVGs/Aws";
import SvgAxios from "@/shared/components/SVGs/Axios";
import SvgBootstrap from "@/shared/components/SVGs/Bootstrap";
import SvgBrevo from "@/shared/components/SVGs/Brevo";
import SvgCanva from "@/shared/components/SVGs/Canva";
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
import SvgGradle from "@/shared/components/SVGs/Gradle";
import SvgGunicorn from "@/shared/components/SVGs/Gunicorn";
import SvgHtml from "@/shared/components/SVGs/Html";
import SvgJava from "@/shared/components/SVGs/Java";
import SvgJavascript from "@/shared/components/SVGs/Javascript";
import SvgJayunit from "@/shared/components/SVGs/Jayunit";
import SvgJest from "@/shared/components/SVGs/Jest";
import SvgJwt from "@/shared/components/SVGs/Jwt";
import SvgKubernetes from "@/shared/components/SVGs/Kubernetes";
import SvgLinux from "@/shared/components/SVGs/Linux";
import SvgMarkdown from "@/shared/components/SVGs/Markdown";
import SvgMongodb from "@/shared/components/SVGs/Mongodb";
import SvgNameCheap from "@/shared/components/SVGs/NameCheap";
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
import SvgPytest from "@/shared/components/SVGs/Pytest";
import SvgPython from "@/shared/components/SVGs/Python";
import SvgReact from "@/shared/components/SVGs/React";
import SvgReactRouter from "@/shared/components/SVGs/ReactRouter";
import SvgRedis from "@/shared/components/SVGs/Redis";
import SvgRedux from "@/shared/components/SVGs/Redux";
import SvgSass from "@/shared/components/SVGs/Sass";
import SvgSequelize from "@/shared/components/SVGs/Sequelize";
import SvgSpring from "@/shared/components/SVGs/Spring";
import SvgStripe from "@/shared/components/SVGs/Stripe";
import SvgSupabase from "@/shared/components/SVGs/Supabase";
import SvgTailwind from "@/shared/components/SVGs/Tailwind";
import SvgTypescript from "@/shared/components/SVGs/Typescript";
import SvgUpstash from "@/shared/components/SVGs/Upstash";
import SvgUseQuery from "@/shared/components/SVGs/UseQuery";
import SvgVercel from "@/shared/components/SVGs/Vercel";
import SvgVite from "@/shared/components/SVGs/Vite";
import SvgVitest from "@/shared/components/SVGs/Vitest";
import SvgVsc from "@/shared/components/SVGs/Vsc";
import SvgYarn from "@/shared/components/SVGs/Yarn";
import SvgZod from "@/shared/components/SVGs/Zod";
import SvgZsh from "@/shared/components/SVGs/Zsh";
import { v4 } from "uuid";

export const stack = [
  // __ CORE
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
    svg: SvgJava,
  },
  {
    svg: SvgLinux,
  },
  {
    svg: SvgZsh,
    clr: "whitesmoke",
  },
  {
    svg: SvgMarkdown,
    clr: "whitesmoke",
  },

  // __ VERSION CONTROL & PACKAGE MANAGERS
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
    svg: SvgPoetry,
  },
  {
    svg: SvgGradle,
    clr: "whitesmoke",
  },

  // __ SERVER
  {
    svg: SvgGunicorn,
  },
  {
    svg: SvgFastify,
    clr: "whitesmoke",
  },
  {
    svg: SvgFastApi,
  },
  {
    svg: SvgSpring,
  },

  // __ DATABASES
  {
    svg: SvgRedis,
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

  // __ CLIENT

  {
    svg: SvgReact,
  },
  {
    svg: SvgNextjs,
    clr: "whitesmoke",
  },
  {
    svg: SvgAngular,
  },
  {
    svg: SvgVite,
  },
  {
    svg: SvgReactRouter,
    clr: "whitesmoke",
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

  // __ STATE && VALIDATION
  {
    svg: SvgRedux,
  },
  {
    svg: SvgZod,
  },
  {
    svg: SvgPydantic,
    clr: "whitesmoke",
  },

  // __ STORAGE && API
  {
    svg: SvgCloudinary,
  },
  {
    svg: SvgAws,
    clr: "whitesmoke",
  },
  {
    svg: SvgAxios,
    clr: "whitesmoke",
  },
  {
    svg: SvgUseQuery,
  },
  {
    svg: SvgJwt,
  },
  {
    svg: SvgStripe,
  },

  // __ TOOLS
  {
    svg: SvgVsc,
  },
  {
    svg: SvgPostman,
  },
  {
    svg: SvgDocker,
  },
  {
    svg: SvgKubernetes,
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
  {
    svg: SvgVercel,
    clr: "whitesmoke",
  },
  {
    svg: SvgUpstash,
  },
  {
    svg: SvgSupabase,
  },
  {
    svg: SvgBrevo,
    clr: "whitesmoke",
  },
  {
    svg: SvgNameCheap,
  },
  {
    svg: SvgFigma,
  },
  {
    svg: SvgCanva,
  },

  // __ TEST
  {
    svg: SvgJest,
  },
  {
    svg: SvgVitest,
  },
  {
    svg: SvgPlaywright,
  },
  {
    svg: SvgPytest,
  },
  {
    svg: SvgJayunit,
  },
].map((el) => ({
  ...el,
  id: v4(),
}));
