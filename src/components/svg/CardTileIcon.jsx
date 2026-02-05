import React from "react";

const CardTileIcon = ({
  size = 32,
  bgColor = "#DBEAFE",
  strokeColor = "#073F9E",
  strokeWidth = 1.33333,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z"
        fill={bgColor}
      />

      <g clipPath="url(#cardTileClip)">
        <path
          d="M21.334 11.334H10.6673C9.93094 11.334 9.33398 11.9309 9.33398 12.6673V19.334C9.33398 20.0704 9.93094 20.6673 10.6673 20.6673H21.334C22.0704 20.6673 22.6673 20.0704 22.6673 19.334V12.6673C22.6673 11.9309 22.0704 11.334 21.334 11.334Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33398 14.666H22.6673"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <clipPath id="cardTileClip">
          <rect width="16" height="16" fill="white" transform="translate(8 8)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CardTileIcon;
