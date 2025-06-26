import { useMemo } from "react";
import { v4 } from "uuid";

type Params = {
  lengths: number[];
};

export const useGenIDs = ({ lengths }: Params) => {
  const ids = useMemo(
    () =>
      Array.from({ length: lengths.length }, (_, i) =>
        Array.from({ length: lengths[i] }, () => v4())
      ),
    [lengths]
  );

  return {
    ids,
  };
};
