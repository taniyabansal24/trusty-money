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
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_850_2574)">
        <path
          d="M4.66797 1.17078L4.66909 3.50411"
          stroke="#90A1B9"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.33398 1.16883L9.3351 3.50216"
          stroke="#90A1B9"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.0853 2.33427L2.91862 2.33819C2.27429 2.3385 1.7522 2.86108 1.75251 3.50542L1.75643 11.6721C1.75674 12.3164 2.27933 12.8385 2.92366 12.8382L11.0903 12.8343C11.7347 12.834 12.2567 12.3114 12.2564 11.667L12.2525 3.50038C12.2522 2.85604 11.7296 2.33396 11.0853 2.33427Z"
          stroke="#90A1B9"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.75195 5.83875L12.252 5.83371"
          stroke="#90A1B9"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_850_2574">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0 0.00671754) rotate(-0.0274919)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CalendarArrowIcon;
