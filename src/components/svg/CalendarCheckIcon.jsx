import React from "react";

const CalendarCheckIcon = ({ width = 64, height = 64, ...props }) => {
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
        d="M44 14H14C11.7909 14 10 15.7909 10 18V48C10 50.2091 11.7909 52 14 52H44C46.2091 52 48 50.2091 48 48V18C48 15.7909 46.2091 14 44 14Z"
        fill="white"
        stroke="#073F9E"
        strokeWidth="1.5"
      />

      <path
        d="M44 14H14C11.7909 14 10 15.7909 10 18V22C10 24.2091 11.7909 26 14 26H44C46.2091 26 48 24.2091 48 22V18C48 15.7909 46.2091 14 44 14Z"
        fill="#073F9E"
      />

      <path d="M48 20H10V26H48V20Z" fill="#073F9E" />

      <path
        d="M22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12V16C18 17.1046 18.8954 18 20 18C21.1046 18 22 17.1046 22 16V12Z"
        fill="#073F9E"
      />

      <path
        d="M40 12C40 10.8954 39.1046 10 38 10C36.8954 10 36 10.8954 36 12V16C36 17.1046 36.8954 18 38 18C39.1046 18 40 17.1046 40 16V12Z"
        fill="#073F9E"
      />

      <path
        d="M29 48C34.5228 48 39 43.5228 39 38C39 32.4772 34.5228 28 29 28C23.4772 28 19 32.4772 19 38C19 43.5228 23.4772 48 29 48Z"
        fill="#E8F0FE"
      />

      <path
        d="M29 48C34.5228 48 39 43.5228 39 38C39 32.4772 34.5228 28 29 28C23.4772 28 19 32.4772 19 38C19 43.5228 23.4772 48 29 48Z"
        stroke="#073F9E"
        strokeWidth="1.5"
      />

      <path
        d="M24 38L27 41L34 34"
        stroke="#073F9E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        opacity="0.8"
        d="M52 16L53 20L57 21L53 22L52 26L51 22L47 21L51 20L52 16Z"
        fill="#76B5AA"
      />
    </svg>
  );
};

export default CalendarCheckIcon;