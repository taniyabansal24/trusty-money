import React from "react";

const CheckIcon = ({
  size = 16,
  opacity = 1,
  delay = 0.3,
  className = "",
  strokeColor = "#05454A",
  bgColor = "white",
  ...props
}) => {
  const dash = 9.95127;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-opacity duration-300 ${className}`}
      style={{
        opacity,
        transitionDelay: opacity === 1 ? `${delay}s` : "0s",
      }}
      {...props}
    >
      <g clipPath="url(#check-clip)">
        <circle cx="8" cy="8" r="8" fill={bgColor} />

        <path
          d="M5.11719 8.34012L7.08519 10.8095C8.26599 7.72278 10.6276 5.04761 10.6276 5.04761"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: dash,
            strokeDashoffset: opacity === 1 ? 0 : dash,
            transition: "stroke-dashoffset 0.3s ease-out",
          }}
        />
      </g>

      <defs>
        <clipPath id="check-clip">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckIcon;
