import React from "react";

const DiscountIcon = ({ width = 64, height = 64, ...props }) => {
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
        opacity="0.85"
        d="M18 14H44C46.6667 14 48 15.3333 48 18V36C48 37.3333 47.3333 38.6667 46 40L36 50C34.6667 51.3333 33.3333 51.3333 32 50L14 32C12.6667 30.6667 12.6667 29.3333 14 28V18C14 15.3333 15.3333 14 18 14Z"
        fill="#76B5AA"
      />

      <path
        opacity="0.5"
        d="M16 16H42C44.6667 16 46 17.3333 46 20V36C46 37.3333 45.3333 38.6667 44 40L36 48C35.3333 48.6667 34.6667 48.6667 34 48"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M26 29.5C27.933 29.5 29.5 27.933 29.5 26C29.5 24.067 27.933 22.5 26 22.5C24.067 22.5 22.5 24.067 22.5 26C22.5 27.933 24.067 29.5 26 29.5Z"
        fill="white"
      />

      <path
        d="M36 39.5C37.933 39.5 39.5 37.933 39.5 36C39.5 34.067 37.933 32.5 36 32.5C34.067 32.5 32.5 34.067 32.5 36C32.5 37.933 34.067 39.5 36 39.5Z"
        fill="white"
      />

      <path
        d="M24 38L38 24"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M22 22.5C23.3807 22.5 24.5 21.3807 24.5 20C24.5 18.6193 23.3807 17.5 22 17.5C20.6193 17.5 19.5 18.6193 19.5 20C19.5 21.3807 20.6193 22.5 22 22.5Z"
        fill="white"
      />

      <path
        d="M30 6.00002C35.3333 3.33336 40 4.00002 44 8.00002"
        stroke="#073F9E"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      <path
        d="M43 5L44 8L41 9"
        stroke="#073F9E"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DiscountIcon;