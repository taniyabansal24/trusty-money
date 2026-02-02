import React from "react";

const CalendarArrowIcon = ({
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
      className={`relative ${className}`}
      preserveAspectRatio="none"
      {...props}
    >
      <g clipPath="url(#calendar-arrow-clip)">
        <path
          d="M10.4163 17.5H4.99967C4.55765 17.5 4.13372 17.3244 3.82116 17.0119C3.5086 16.6993 3.33301 16.2754 3.33301 15.8334V5.83335C3.33301 5.39133 3.5086 4.9674 3.82116 4.65484C4.13372 4.34228 4.55765 4.16669 4.99967 4.16669H14.9997C15.4417 4.16669 15.8656 4.34228 16.1782 4.65484C16.4907 4.9674 16.6663 5.39133 16.6663 5.83335V10"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M13.333 2.5V5.83333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M6.66699 2.5V5.83333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M3.33301 9.16669H16.6663"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M13.333 15.8333L18.333 15.8333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M15.833 18.3333L18.333 15.8333L15.833 13.3333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <clipPath id="calendar-arrow-clip">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CalendarArrowIcon;
