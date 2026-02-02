import React from "react";

const LayersIcon = ({
  size = 20,
  color = "#7483A0",
  strokeWidth = 1.25,
  className = "",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 flex-grow-0 ${className}`}
      preserveAspectRatio="none"
      {...props}
    >
      <g clipPath="url(#layers-clip)">
        <path
          d="M9.99967 3.33331L3.33301 6.66665L9.99967 9.99998L16.6663 6.66665L9.99967 3.33331Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33301 10L9.99967 13.3333L16.6663 10"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33301 13.3333L9.99967 16.6666L16.6663 13.3333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <clipPath id="layers-clip">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LayersIcon;
