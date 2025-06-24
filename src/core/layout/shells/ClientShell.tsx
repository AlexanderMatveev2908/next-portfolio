import Header from "@/core/layout/components/Header/Header";
import WrapClient from "@/shared/components/HOC/WrapClient";
import type { FC } from "react";
import Footer from "../components/Footer/Footer";

type PropsType = {
  children: React.ReactNode;
};

const ClientShell: FC<PropsType> = ({ children }) => {
  return (
    <WrapClient>
      <div className="w-full flex flex-col px-[20px] sm:px-[100px] pt-[20px] pb-[75px] sm:pt-[35px] sm:pb-[150px]">
        <Header />
        {children}
        <Footer />
      </div>
    </WrapClient>
  );
};

export default ClientShell;
