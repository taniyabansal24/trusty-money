import React from "react";

const ProfileCardIcon = ({ className = "", ...props }) => (
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
        d="M39.9999 41.6663C46.4432 41.6663 51.6666 36.443 51.6666 29.9997C51.6666 23.5564 46.4432 18.333 39.9999 18.333C33.5566 18.333 28.3333 23.5564 28.3333 29.9997C28.3333 36.443 33.5566 41.6663 39.9999 41.6663Z"
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 37C43.866 37 47 33.866 47 30C47 26.134 43.866 23 40 23C36.134 23 33 26.134 33 30C33 33.866 36.134 37 40 37Z"
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.0001 32.3337C41.2887 32.3337 42.3334 31.289 42.3334 30.0003C42.3334 28.7117 41.2887 27.667 40.0001 27.667C38.7114 27.667 37.6667 28.7117 37.6667 30.0003C37.6667 31.289 38.7114 32.3337 40.0001 32.3337Z"
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
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend in2="BackgroundImageFix" />

        <feMorphology radius="3" operator="erode" />
        <feOffset dy="10" />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend in2="SourceGraphic" />
      </filter>
    </defs>
  </svg>
);

export default ProfileCardIcon;
