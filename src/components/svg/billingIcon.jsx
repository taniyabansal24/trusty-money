import React from "react";

const billingIcon = ({ width = 46, height = 46, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_dd_968_1211)">
        <mask id="path-1-inside-1_968_1211" fill="white">
          <path d="M3 22C3 10.9543 11.9543 2 23 2C34.0457 2 43 10.9543 43 22C43 33.0457 34.0457 42 23 42C11.9543 42 3 33.0457 3 22Z" />
        </mask>

        <path
          d="M3 22C3 10.9543 11.9543 2 23 2C34.0457 2 43 10.9543 43 22C43 33.0457 34.0457 42 23 42C11.9543 42 3 33.0457 3 22Z"
          fill="#073F9E"
          shapeRendering="crispEdges"
        />

        <path
          d="M3 22M43 22M43 22M3 22M23 2M43 22M23 42M3 22M23 42V40.4C12.838 40.4 4.6 32.162 4.6 22H3H1.4C1.4 33.9293 11.0707 43.6 23 43.6V42ZM43 22H41.4C41.4 32.162 33.162 40.4 23 40.4V42V43.6C34.9293 43.6 44.6 33.9293 44.6 22H43ZM23 2V3.6C33.162 3.6 41.4 11.838 41.4 22H43H44.6C44.6 10.0707 34.9293 0.4 23 0.4V2ZM23 2V0.4C11.0707 0.4 1.4 10.0707 1.4 22H3H4.6C4.6 11.838 12.838 3.6 23 3.6V2Z"
          fill="#073F9E"
          mask="url(#path-1-inside-1_968_1211)"
        />

        <path
          d="M25.4987 13.666H17.9987C17.5567 13.666 17.1327 13.8416 16.8202 14.1542C16.5076 14.4667 16.332 14.8907 16.332 15.3327V28.666C16.332 29.108 16.5076 29.532 16.8202 29.8445C17.1327 30.1571 17.5567 30.3327 17.9987 30.3327H27.9987C28.4407 30.3327 28.8646 30.1571 29.1772 29.8445C29.4898 29.532 29.6654 29.108 29.6654 28.666V17.8327L25.4987 13.666Z"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M24.668 13.666V16.9993C24.668 17.4414 24.8436 17.8653 25.1561 18.1779C25.4687 18.4904 25.8926 18.666 26.3346 18.666H29.668"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M21.3346 19.5H19.668"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M26.3346 22.834H19.668"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M26.3346 26.166H19.668"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <filter
          id="filter0_dd_968_1211"
          x="0"
          y="0"
          width="46"
          height="46"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="1" operator="erode" in="SourceAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend in2="BackgroundImageFix" />
          <feGaussianBlur stdDeviation="1.5" />
          <feBlend in="SourceGraphic" />
        </filter>
      </defs>
    </svg>
  );
};

export default billingIcon;
