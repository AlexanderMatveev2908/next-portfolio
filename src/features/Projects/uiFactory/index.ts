import { v4 } from "uuid";

const B_URL = "/imgs/";

export type HostType = "Render.com" | "Vercel.com" | "Fly.io";
export type TypeApp = "Full-Stack" | "Static";

export type ProjectType = {
  id: string;
  title: string;
  imgs: string[];
  repo: string;
  live: string;
  host: HostType;
  typeApp: TypeApp;
};

export const projects = [
  {
    title: "Bookstores App",
    imgs: ["pern_book.png"],
    repo: "https://github.com/AlexanderMatveev2908/pern__book",
    live: "https://pern-book.fly.dev/",
    host: "Fly.io",
    typeApp: "Full-Stack",
  },
  {
    title: "Food Delivery App",
    imgs: ["mern_eat.png"],
    repo: "https://github.com/AlexanderMatveev2908/MERN__EAT",
    live: "https://food-app-aqkc.onrender.com/",
    host: "Render.com",
    typeApp: "Full-Stack",
  },
  {
    title: "Hotels Booking App",
    imgs: ["mern_book.png"],
    repo: "https://github.com/AlexanderMatveev2908/MERN__BOOKING",
    live: "https://mern-booking-app-0w8v.onrender.com/",
    host: "Render.com",
    typeApp: "Full-Stack",
  },
  {
    title: "Memory Game",
    imgs: ["memory.png"],
    repo: "https://github.com/AlexanderMatveev2908/next-memory-game",
    live: "https://next-memory-game-ten.vercel.app/",
    host: "Vercel.com",
  },
  {
    title: "Tic Tac Toe",
    imgs: ["x_o.png"],
    repo: "https://github.com/AlexanderMatveev2908/REACT__X0",
    live: "https://react-x0.onrender.com/",
    host: "Render.com",
  },
  {
    title: "Calculator IOS",
    imgs: ["calc.png"],
    repo: "https://github.com/AlexanderMatveev2908/REACT_CALCULATOR",
    live: "https://react-calculator-imc7.onrender.com/",
    host: "Render.com",
  },
].map((el) => ({
  ...el,
  imgs: el.imgs.flatMap((img) => [
    // B_URL + img.split(".")[0] + "_sm." + img.split(".")[1],
    B_URL + img + "?v=1",
  ]),
  id: v4(),
  typeApp: el.typeApp ?? "Static",
}));
