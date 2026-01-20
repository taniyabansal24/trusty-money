import React from "react";

const SecureCardIcon = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <g filter="url(#filter0_dd)">
      <path
        d="M12 18C12 9.16344 19.1634 2 28 2H52C60.8366 2 68 9.16344 68 18V42C68 50.8366 60.8366 58 52 58H28C19.1634 58 12 50.8366 12 42V18Z"
        fill="#073F9E"
        shapeRendering="crispEdges"
      />
      <path
        d="M37.6667 30H42.3334"
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.6667 25.334H42.3334"
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.3334 40.4993V36.9993C42.3334 36.3805 42.0876 35.787 41.65 35.3494C41.2124 34.9118 40.6189 34.666 40.0001 34.666C39.3812 34.666 38.7878 34.9118 38.3502 35.3494C37.9126 35.787 37.6667 36.3805 37.6667 36.9993V40.4993"
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.9999 27.666H30.6666C30.0477 27.666 29.4543 27.9118 29.0167 28.3494C28.5791 28.787 28.3333 29.3805 28.3333 29.9993V38.166C28.3333 38.7849 28.5791 39.3783 29.0167 39.8159C29.4543 40.2535 30.0477 40.4994 30.6666 40.4994H49.3333C49.9521 40.4994 50.5456 40.2535 50.9832 39.8159C51.4208 39.3783 51.6666 38.7849 51.6666 38.166V26.4993C51.6666 25.8805 51.4208 25.287 50.9832 24.8494C50.5456 24.4118 49.9521 24.166 49.3333 24.166H46.9999"
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 40.5V21.8333C33 21.2145 33.2458 20.621 33.6834 20.1834C34.121 19.7458 34.7145 19.5 35.3333 19.5H44.6667C45.2855 19.5 45.879 19.7458 46.3166 20.1834C46.7542 20.621 47 21.2145 47 21.8333V40.5"
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <filter
        id="filter0_dd"
        x="0"
        y="0"
        width="80"
        height="80"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology radius="4" operator="erode" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="BackgroundImageFix" />

        <feMorphology radius="3" operator="erode" />
        <feOffset dy="10" />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="SourceGraphic" />
      </filter>
    </defs>
  </svg>
);

export default SecureCardIcon;
