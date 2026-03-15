import React from "react";

const ProfileCardIcon = ({ className = "", ...props }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_dd_1559_682)">
      <path
        d="M12 18C12 9.16344 19.1634 2 28 2H36C44.8366 2 52 9.16344 52 18V26C52 34.8366 44.8366 42 36 42H28C19.1634 42 12 34.8366 12 26V18Z"
        fill="#073F9E"
        shape-rendering="crispEdges"
      />
      <path
        d="M35 28.375V26.9583C35 26.2069 34.6839 25.4862 34.1213 24.9549C33.5587 24.4235 32.7957 24.125 32 24.125H27.5C26.7044 24.125 25.9413 24.4235 25.3787 24.9549C24.8161 25.4862 24.5 26.2069 24.5 26.9583V28.375"
        stroke="white"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35 15.7156C35.6433 15.8731 36.213 16.2279 36.6198 16.7243C37.0265 17.2207 37.2471 17.8306 37.2471 18.4582C37.2471 19.0859 37.0265 19.6958 36.6198 20.1922C36.213 20.6886 35.6433 21.0434 35 21.2009"
        stroke="white"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.5 28.375V26.9583C39.4995 26.3305 39.2783 25.7207 38.871 25.2245C38.4638 24.7284 37.8936 24.374 37.25 24.217"
        stroke="white"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.75 21.2917C31.4069 21.2917 32.75 20.0231 32.75 18.4583C32.75 16.8935 31.4069 15.625 29.75 15.625C28.0931 15.625 26.75 16.8935 26.75 18.4583C26.75 20.0231 28.0931 21.2917 29.75 21.2917Z"
        stroke="white"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_1559_682"
        x="0"
        y="0"
        width="64"
        height="64"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_1559_682"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1559_682"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="3"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_1559_682"
        />
        <feOffset dy="10" />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_1559_682"
          result="effect2_dropShadow_1559_682"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_1559_682"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default ProfileCardIcon;
