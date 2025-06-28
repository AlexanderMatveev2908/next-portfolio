import { useEffect, useRef, useState } from "react";

type Params = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useHandleDrop = ({ setIsOpen }: Params) => {
  const labelRef = useRef<HTMLDivElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const [minH, setMinH] = useState(0);

  useEffect(() => {
    const el = labelRef.current;
    if (!el) return;

    const resize = () => setMinH(labelRef?.current?.scrollHeight ?? 0);

    const observer = new ResizeObserver(resize);
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const listen = (e: MouseEvent) => {
      const el = filterRef.current;
      if (!el) return;

      if (!el.contains(e.target as Node)) setIsOpen(false);
    };

    document.addEventListener("mousedown", listen);

    return () => {
      document.removeEventListener("mousedown", listen);
    };
  }, [setIsOpen]);

  return {
    labelRef,
    filterRef,
    minH,
  };
};
