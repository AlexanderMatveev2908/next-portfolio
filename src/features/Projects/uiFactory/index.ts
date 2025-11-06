import { css } from "@emotion/react";
import { v4 } from "uuid";

// const B_URL = "/imgs/";

export type HostType = "Render.com" | "Vercel.com" | "Fly.io";
export type TypeApp = "Full-Stack" | "Frontend-Only";

export type ProjectType = {
  id: string;
  title: string;
  imgs: string[];
  repo: string;
  live: string;
  host: HostType;
  typeApp: TypeApp;
  defName: string;
  fileMD: string;
  order: number;
  down: boolean;
};

export const projects: ProjectType[] = [
  {
    title: "ASP Weather App",
    repo: "https://github.com/AlexanderMatveev2908/asp-weather-app",
    live: "https://asp-weather-app-client.fly.dev/",
    host: "Fly.io",
    typeApp: "Full-Stack",
    defName: "weather",
    order: 11,
  },
  {
    title: "ASP Job Application Tracker",
    repo: "https://github.com/AlexanderMatveev2908/asp-job-application-tracker",
    live: "https://asp-job-application-tracker-client.fly.dev/",
    host: "Fly.io",
    typeApp: "Full-Stack",
    defName: "jobs_ng_java",
    order: 10,
  },
  {
    title: "PSN Job Application Tracker",
    repo: "https://github.com/AlexanderMatveev2908/psn-job-application-tracker",
    live: "https://psn-job-application-tracker-client.fly.dev/",
    host: "Fly.io",
    typeApp: "Full-Stack",
    defName: "jobs_java",
    order: 9,
    down: true,
  },
  {
    title: "PFN Job Application Tracker",
    repo: "https://github.com/AlexanderMatveev2908/PFN-job-application-tracker",
    live: "https://pfn-job-application-tracker-client.fly.dev/",
    host: "Fly.io",
    typeApp: "Full-Stack",
    defName: "jobs",
    order: 8,
    down: true,
  },
  {
    title: "Bookstore App",
    repo: "https://github.com/AlexanderMatveev2908/pern__book",
    live: "https://pern-book.fly.dev/",
    host: "Fly.io",
    typeApp: "Full-Stack",
    defName: "pern_book",
    order: 4,
  },
  {
    title: "Food Delivery App",
    repo: "https://github.com/AlexanderMatveev2908/MERN__EAT",
    live: "https://food-app-aqkc.onrender.com/",
    host: "Render.com",
    typeApp: "Full-Stack",
    defName: "mern_eat",
    order: 3,
  },
  {
    title: "Courses App",
    repo: "https://github.com/AlexanderMatveev2908/next-pern-courses",
    live: "https://next-pern-courses-client.fly.dev/",
    host: "Fly.io",
    typeApp: "Full-Stack",
    defName: "courses",
    order: 6,
    down: true,
  },
  {
    title: "Hotel Booking App",
    repo: "https://github.com/AlexanderMatveev2908/MERN__BOOKING",
    live: "https://mern-booking-app-0w8v.onrender.com/",
    host: "Render.com",
    typeApp: "Full-Stack",
    defName: "mern_book",
    order: 1,
  },
  {
    title: "Qr-Code generator",
    repo: "https://github.com/AlexanderMatveev2908/next-qr-code-generator",
    live: "https://next-qr-code-generator-client.fly.dev/",
    host: "Fly.io",
    typeApp: "Full-Stack",
    defName: "qr_code",
    order: 7,
  },
  {
    title: "Memory Game",
    repo: "https://github.com/AlexanderMatveev2908/next-memory-game",
    live: "https://next-memory-game-ten.vercel.app/",
    host: "Vercel.com",
    defName: "memory",
    order: 5,
  },
  {
    title: "Tic Tac Toe",
    repo: "https://github.com/AlexanderMatveev2908/REACT__X0",
    live: "https://react-x0.onrender.com/",
    host: "Render.com",
    defName: "x_o",
    order: 2,
  },
  {
    title: "Calculator IOS",
    repo: "https://github.com/AlexanderMatveev2908/REACT_CALCULATOR",
    live: "https://react-calculator-imc7.onrender.com/",
    host: "Render.com",
    defName: "calc",
    order: 0,
  },
].map(
  (el): ProjectType => ({
    ...el,
    // imgs: el.imgs.flatMap((img) => [
    //   // B_URL + img.split(".")[0] + "_sm." + img.split(".")[1],
    //   B_URL + img + "?v=1",
    // ]),
    imgs: [`/imgs/${el.defName}.png`],
    id: v4(),
    fileMD: `${el.defName}.md`,
    typeApp: (el.typeApp ?? "Frontend-Only") as TypeApp,
    host: el.host as HostType,
    down: el.down ?? false,
  })
);

export const optHoverDrop = css`
  background-color: var(--whitesmoke);
  color: var(--neutral__950);
`;
