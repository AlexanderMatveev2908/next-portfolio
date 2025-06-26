export const isStr = (str?: string | null) =>
  typeof str === "string" && !!str.trim().length;
