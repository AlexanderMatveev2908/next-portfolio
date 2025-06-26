import { store } from "@/core/store";
import type { FC } from "react";
import { Provider } from "react-redux";

type PropsType = {
  children: React.ReactNode;
};

const Providers: FC<PropsType> = ({ children }) => {
  return <Provider {...{ store }}>{children}</Provider>;
};

export default Providers;
