import React from "react";

const CardIconAboutUs = ({ width = 64, height = 64, ...props }) => {
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
        d="M48 20H14C11.7909 20 10 21.7909 10 24V44C10 46.2091 11.7909 48 14 48H48C50.2091 48 52 46.2091 52 44V24C52 21.7909 50.2091 20 48 20Z"
        fill="#C8D9F7"
        stroke="#073F9E"
      />

      <path
        d="M52 16H18C15.7909 16 14 17.7909 14 20V40C14 42.2091 15.7909 44 18 44H52C54.2091 44 56 42.2091 56 40V20C56 17.7909 54.2091 16 52 16Z"
        fill="white"
        stroke="#073F9E"
        strokeWidth="1.5"
      />

      <path d="M56 22H14V30H56V22Z" fill="#073F9E" />

      <path
        d="M28.5 34H21.5C20.6716 34 20 34.6716 20 35.5V39.5C20 40.3284 20.6716 41 21.5 41H28.5C29.3284 41 30 40.3284 30 39.5V35.5C30 34.6716 29.3284 34 28.5 34Z"
        fill="#76B5AA"
      />

      <path
        d="M38 39C39.1046 39 40 38.1046 40 37C40 35.8954 39.1046 35 38 35C36.8954 35 36 35.8954 36 37C36 38.1046 36.8954 39 38 39Z"
        fill="#C8D9F7"
      />

      <path
        d="M44 39C45.1046 39 46 38.1046 46 37C46 35.8954 45.1046 35 44 35C42.8954 35 42 35.8954 42 37C42 38.1046 42.8954 39 44 39Z"
        fill="#C8D9F7"
      />

      <path
        d="M48 7.9999C52 5.33324 55.3333 5.9999 58 9.9999"
        stroke="#073F9E"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      <path
        d="M57 7L58 10L55 11"
        stroke="#073F9E"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CardIconAboutUs;