import { v4 } from "uuid";

const B_URL = "/imgs/";

export type HostType = "Render.com" | "Vercel.com" | "Fly.io";
export type TypeApp = "Full-Stack" | "SPA";

export type ProjectType = {
  id: string;
  title: string;
  imgs: string[];
  repo: string;
  live: string;
  host: HostType;
  typeApp: TypeApp;
  description: string;
};

export const projects: ProjectType[] = [
  {
    title: "Bookstore App",
    imgs: ["pern_book.png"],
    repo: "https://github.com/AlexanderMatveev2908/pern__book",
    live: "https://pern-book.fly.dev/",
    host: "Fly.io",
    typeApp: "Full-Stack",
    description: `A full-stack e-commerce application built with the PERN stack, designed to support multiple independent bookstores under a single unified system. It includes a robust role-based authentication system that allows store owners to assign roles such as Manager and Employee, enabling fine-grained control over store operations.
    Each bookstore operates with its own isolated inventory, while customers can browse and purchase books from multiple stores within a single, unified cart. The checkout process is powered by Stripe, with full integration of webhooks to handle real-time payment confirmations and order updates.
    The platform also provides comprehensive account management features, including password resets, email changes, account recovery, and secure account deletion. Its security model is built on a layered token strategy: access tokens are implemented using signed JWTs for fast verification; refresh tokens are encrypted using JWE (RSA-OAEP + AES-GCM) to ensure confidentiality and prevent tampering; and one-time-use tokens, such as those used for password resets and email verification, are secured using HMAC with CBC-SHA for integrity.
    The application is Dockerized for deployment, with a single container serving both the API and frontend via Express. Development environments support HTTPS through the use of mkcert, ngrok, and an NGINX reverse proxy, ensuring security and reliability even during local testing.`,
  },
  {
    title: "Food Delivery App",
    imgs: ["mern_eat.png"],
    repo: "https://github.com/AlexanderMatveev2908/MERN__EAT",
    live: "https://food-app-aqkc.onrender.com/",
    host: "Render.com",
    typeApp: "Full-Stack",
    description: `A full-featured MERN stack application built for both customers and restaurant owners. It supports secure authentication, dynamic restaurant listings with dynamic open/close status, and detailed menus with image galleries.
    The platform includes product-level stock management to prevent out-of-stock orders, Stripe integration for secure online payments, and a discount engine supporting promo codes and coupons at checkout. A client-side cart with localStorage fallback ensures smooth browsing, even when users aren’t logged in.`,
  },
  {
    title: "Hotel Booking App",
    imgs: ["mern_book.png"],
    repo: "https://github.com/AlexanderMatveev2908/MERN__BOOKING",
    live: "https://mern-booking-app-0w8v.onrender.com/",
    host: "Render.com",
    typeApp: "Full-Stack",
    description: `A full-stack web application built with the MERN stack, designed to simulate a real-world booking experience. It features secure user authentication, dynamic hotel listings, and a custom booking system that prevents double-bookings by detecting date conflicts.
    Hotel owners can manage their listings independently, thanks to a multi-tenant-ready architecture. Each hotel includes detailed pages with image galleries, guest capacity, and dynamic availability filters based on check-in/check-out dates. The platform integrates Stripe for secure, instant payment processing.`,
  },
  {
    title: "Memory Game",
    imgs: ["memory.png"],
    repo: "https://github.com/AlexanderMatveev2908/next-memory-game",
    live: "https://next-memory-game-ten.vercel.app/",
    host: "Vercel.com",
    description: `Memory Game is a responsive matching game built with Next.js and TypeScript. It features customizable 4x4 and 6x6 grids, with options to play using either icons or numbers.
    The game state is synced to sessionStorage, ensuring progress is preserved across page refreshes. Built from scratch with fast a fully responsive UI, it offers smooth gameplay across desktop and mobile.`,
  },
  {
    title: "Tic Tac Toe",
    imgs: ["x_o.png"],
    repo: "https://github.com/AlexanderMatveev2908/REACT__X0",
    live: "https://react-x0.onrender.com/",
    host: "Render.com",
    description: `A classic 3x3 grid game built with React and Redux Toolkit. It uses a custom logic to detect win conditions and manage player turns, board state, and scores through a centralized Redux store.
    Game state is saved in sessionStorage, so progress isn't lost on refresh. The app was built from scratch with clean, reusable components and a focus on functional logic and smooth gameplay.`,
  },
  {
    title: "Calculator IOS",
    imgs: ["calc.png"],
    repo: "https://github.com/AlexanderMatveev2908/REACT_CALCULATOR",
    live: "https://react-calculator-imc7.onrender.com/",
    host: "Render.com",
    description:
      "Simulates an iOS-style calculator with safe chained operations, division-by-zero prevention, and smart input validation to handle edge cases like repeated operators or extra decimal points",
  },
].map((el) => ({
  ...el,
  imgs: el.imgs.flatMap((img) => [
    // B_URL + img.split(".")[0] + "_sm." + img.split(".")[1],
    B_URL + img + "?v=1",
  ]),
  id: v4(),
  typeApp: el.typeApp ?? "SPA",
})) as ProjectType[];
