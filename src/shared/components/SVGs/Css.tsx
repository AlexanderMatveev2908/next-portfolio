import * as React from "react";
import type { SVGProps } from "react";
const SvgCss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    aria-hidden="true"
    {...props}
  >
    <path fill="#1172B8" d="M6 28 4 3h24l-2 25-10 3z" />
    <path fill="#3AD" d="M26 5H16v24.5l8-2.5z" />
    <path
      fill="currentColor"
      d="M19.5 17.5h-10L9 14l8-2.5H9l-.5-3H24l-.5 3.5-6.5 2.5h6L22 24l-6 2-6-2-.5-5h3l.5 2.5 3 1 3-1z"
    />
  </svg>
);
export default SvgCss;
