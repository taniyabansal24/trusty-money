import React from "react";

const DatabaseIcon = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect width="70" height="70" rx="16" fill="#073F9E" />
    <path
      d="M49 24.5C49 20.706 42.5897 17.5 35 17.5C27.4103 17.5 21 20.706 21 24.5V28C21 31.794 27.4103 35 35 35C42.5897 35 49 31.794 49 28V24.5ZM35 47.25C27.4103 47.25 21 44.044 21 40.25V45.5C21 49.294 27.4103 52.5 35 52.5C42.5897 52.5 49 49.294 49 45.5V40.25C49 44.044 42.5897 47.25 35 47.25Z"
      fill="white"
    />
    <path
      d="M49 31.5C49 35.294 42.5897 38.5 35 38.5C27.4103 38.5 21 35.294 21 31.5V36.75C21 40.544 27.4103 43.75 35 43.75C42.5897 43.75 49 40.544 49 36.75V31.5Z"
      fill="white"
    />
  </svg>
);

export default DatabaseIcon;
