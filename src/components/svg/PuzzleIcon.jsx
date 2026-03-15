import React from "react";

const PuzzleIcon = ({ width = 64, height = 64, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 10H34V20C34 22.6667 35.3333 24 38 24C40.6667 24 42 25.3333 42 28V44H28V34C28 31.3333 26.6667 30 24 30C21.3333 30 20 28.6667 20 26H10V10Z"
        fill="#C8D9F7"
        stroke="#073F9E"
        strokeWidth="1.2"
      />

      <path
        opacity="0.8"
        d="M42 20H54V44H42V34C42 31.3333 40.6667 30 38 30C35.3333 30 34 28.6667 34 26V20H42Z"
        fill="#073F9E"
      />

      <path
        d="M36 6.00002C41.3333 3.33336 46 4.00002 50 8.00002"
        stroke="#555555"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      <path
        d="M49 5L50 8L47 9"
        stroke="#555555"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PuzzleIcon;