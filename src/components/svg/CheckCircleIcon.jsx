import React from "react";

const CheckCircleIcon = ({
  size = 14,                 // default same as original
  color = "#00732D",         // default same as original
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <circle
        cx="7"
        cy="7"
        r="6.5"
        stroke={color}
      />
      <path
        d="M4.375 7.375L6.125 9.125L9.625 5.375"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckCircleIcon;