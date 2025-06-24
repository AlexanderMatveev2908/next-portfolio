import * as React from "react";
import type { SVGProps } from "react";
const SvgNextjs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    aria-hidden="true"
    fill="currentColor"
    {...props}
  >
    <defs>
      <linearGradient
        id="nextjs_svg__c"
        x1="55.633%"
        x2="83.228%"
        y1="56.385%"
        y2="96.08%"
      >
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="100%" stopColor="#FFF" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="nextjs_svg__d"
        x1="50%"
        x2="49.953%"
        y1="0%"
        y2="73.438%"
      >
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="100%" stopColor="#FFF" stopOpacity={0} />
      </linearGradient>
      <circle id="nextjs_svg__a" cx={128} cy={128} r={128} />
    </defs>
    <mask id="nextjs_svg__b" fill="currentColor">
      <use href="#nextjs_svg__a" />
    </mask>
    <g mask="url(#nextjs_svg__b)">
      <circle cx={128} cy={128} r={128} />
      <path
        fill="url(#nextjs_svg__c)"
        d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"
      />
      <path
        fill="url(#nextjs_svg__d)"
        d="M163.556 76.8h17.067v102.4h-17.067z"
      />
    </g>
  </svg>
);
export default SvgNextjs;
