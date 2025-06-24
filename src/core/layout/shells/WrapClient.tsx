"use client";

import Spinner from "@/shared/components/Spinners/Spinner/Spinner";
import { useEffect, useState, type FC } from "react";

type PropsType = {
  children: React.ReactNode;
};

const WrapClient: FC<PropsType> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated ? children : <Spinner />;
};

export default WrapClient;
