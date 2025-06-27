import * as React from "react";
import type { SVGProps } from "react";
const SvgBtnHtml = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1025"
    aria-hidden="true"
    fill="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1006 555 808 815q-18 17-43.5 17T721 814.5t-18-43 18-43.5l165-216-165-216q-18-18-18-43t18-43 43.5-18 43.5 18l198 259q18 18 18 43t-18 43M512 961q-1 3-3 11.5t-3 11.5l-3.5 10.5-5 10.5-7.5 8-10.5 7-13.5 3.5-18 1.5q-24 0-46-25t-16-48L512 64q17-64 96-64 22 0 29.5 23.5T638 73zM303 814.5Q285 832 259.5 832T216 815L18 555Q0 537 0 512t18-43l198-259q18-18 43.5-18t43.5 18 18 43-18 43L138 512l165 216q18 18 18 43.5t-18 43"
    />
  </svg>
);
export default SvgBtnHtml;
