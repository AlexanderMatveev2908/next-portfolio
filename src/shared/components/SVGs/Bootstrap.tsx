import * as React from "react";
import type { SVGProps } from "react";
const SvgBootstrap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    aria-hidden="true"
    fill="currentColor"
    {...props}
  >
    <defs>
      <linearGradient
        id="bootstrap_svg__a"
        x1={76.079}
        x2={523.48}
        y1={10.798}
        y2={365.95}
        gradientTransform="translate(1.11 14.613)scale(.24566)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#9013fe" />
        <stop offset={1} stopColor="#6610f2" />
      </linearGradient>
      <linearGradient
        id="bootstrap_svg__b"
        x1={193.51}
        x2={293.51}
        y1={109.74}
        y2={278.87}
        gradientTransform="translate(0 52)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="currentColor" />
        <stop offset={1} stopColor="#f1e5fc" />
      </linearGradient>
      <filter
        id="bootstrap_svg__c"
        width={197}
        height={249}
        x={161.9}
        y={135.46}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={8} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
    <path
      fill="url(#bootstrap_svg__a)"
      d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94"
    />
    <path
      fill="url(#bootstrap_svg__b)"
      d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z"
      filter="url(#bootstrap_svg__c)"
      transform="translate(1.494 2.203)scale(.24566)"
    />
  </svg>
);
export default SvgBootstrap;
