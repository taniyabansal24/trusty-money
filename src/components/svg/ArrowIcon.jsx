import React from "react";

const ArrowIcon = ({ width = 24, height = 24, fill = "#1D1D20", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <path
          d="M7.93022 19.3138L7.07064 4.70096C7.04452 4.25685 7.56786 4.00234 7.90107 4.2971L19.0114 14.1255C19.3562 14.4305 19.1405 15 18.6802 15H13.2212C13.0803 15 12.946 15.0594 12.8512 15.1637L8.79933 19.6207C8.50149 19.9484 7.95622 19.7558 7.93022 19.3138Z"
          fill={fill}
        />
        <path
          d="M6.57151 4.73032L7.43108 19.3431C7.48308 20.2271 8.57363 20.6123 9.1693 19.9571L13.2212 15.5H18.6802C19.6008 15.5 20.0323 14.361 19.3427 13.751L8.23236 3.9226C7.56594 3.33308 6.51926 3.8421 6.57151 4.73032Z"
          stroke="white"
        />
      </g>

      <defs>
        <filter
          id="filter0_d"
          x="4.06934"
          y="2.16797"
          width="18.1138"
          height="21.6188"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default ArrowIcon;
