import * as React from "react";
import type { SVGProps } from "react";
const SvgHtml = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    aria-hidden="true"
    {...props}
  >
    <path fill="#E44D26" d="M6 28 4 3h24l-2 25-10 3z" />
    <path fill="#F16529" d="M26 5H16v24.5l8-2.5z" />
    <path
      fill="currentColor"
      d="M9.5 17.5 8.5 8H24l-.5 3h-12l.5 3.5h11L22 24l-6 2-6-2-.5-5h3l.5 2.5 3 1 3-1 .5-4z"
    />
  </svg>
);
export default SvgHtml;
