import React from "react";

const DuplicateIcon = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <g filter="url(#filter0_ddd)">
      <path
        d="M3 12C3 6.47715 7.47715 2 13 2H25C30.5228 2 35 6.47715 35 12V24C35 29.5228 30.5228 34 25 34H13C7.47715 34 3 29.5228 3 24V12Z"
        fill="white"
        shapeRendering="crispEdges"
      />
      <g clipPath="url(#clip0)">
        <path
          d="M24.334 15.3335H17.6673C16.9309 15.3335 16.334 15.9304 16.334 16.6668V23.3335C16.334 24.0699 16.9309 24.6668 17.6673 24.6668H24.334C25.0704 24.6668 25.6673 24.0699 25.6673 23.3335V16.6668C25.6673 15.9304 25.0704 15.3335 24.334 15.3335Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.6673 20.6668C12.934 20.6668 12.334 20.0668 12.334 19.3335V12.6668C12.334 11.9335 12.934 11.3335 13.6673 11.3335H20.334C21.0673 11.3335 21.6673 11.9335 21.6673 12.6668"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>

    <defs>
      <filter
        id="filter0_ddd"
        x="0"
        y="0"
        width="38"
        height="38"
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
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1" />

        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="effect1" result="effect2" />

        <feMorphology radius="1" operator="dilate" in="SourceAlpha" />
        <feComposite operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.885954 0 0 0 0 0.910196 0 0 0 0 0.942516 0 0 0 1 0"
        />
        <feBlend in2="effect2" result="effect3" />

        <feBlend in="SourceGraphic" in2="effect3" result="shape" />
      </filter>

      <clipPath id="clip0">
        <rect width="16" height="16" fill="white" transform="translate(11 10)" />
      </clipPath>
    </defs>
  </svg>
);

export default DuplicateIcon;
