import React from "react";

const LayersIconAboutUs = ({ width = 64, height = 64, ...props }) => {
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
        d="M27 32H11C9.34315 32 8 33.3431 8 35C8 36.6569 9.34315 38 11 38H27C28.6569 38 30 36.6569 30 35C30 33.3431 28.6569 32 27 32Z"
        fill="#C8D9F7"
      />

      <path
        d="M27 42H17C15.3431 42 14 43.3431 14 45C14 46.6569 15.3431 48 17 48H27C28.6569 48 30 46.6569 30 45C30 43.3431 28.6569 42 27 42Z"
        fill="#073F9E"
      />

      <path
        d="M39 52H23C21.3431 52 20 53.3431 20 55C20 56.6569 21.3431 58 23 58H39C40.6569 58 42 56.6569 42 55C42 53.3431 40.6569 52 39 52Z"
        fill="#76B5AA"
      />

      <path
        d="M12 24C17.3333 17.3333 23.3333 16 30 20"
        stroke="#555555"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      <path
        d="M29 17L30 20L27 21"
        stroke="#555555"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M40 18C46.6667 14 52 14.6667 56 20"
        stroke="#555555"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      <path
        d="M55 17L56 20L53 21"
        stroke="#555555"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LayersIconAboutUs;