import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../styles/globals.css";
import ClientShell from "@/core/layout/shells/ClientShell";

const fir_code = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex's Portfolio",
  description: "Alexander Matveev Full-Stack Developer Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fir_code.className} antialiased`}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
