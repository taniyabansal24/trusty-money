import React from "react";

const UsersCardIcon = ({
  size = 88,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter_users_card)">
        <path
          d="M12 18C12 9.16344 19.1634 2 28 2H60C68.8366 2 76 9.16344 76 18V50C76 58.8366 68.8366 66 60 66H28C19.1634 66 12 58.8366 12 50V18Z"
          fill="#073F9E"
        />

        <path
          d="M49.3307 46V43.3333C49.3307 41.9188 48.7688 40.5623 47.7686 39.5621C46.7684 38.5619 45.4119 38 43.9974 38H35.9974C34.5829 38 33.2264 38.5619 32.2262 39.5621C31.226 40.5623 30.6641 41.9188 30.6641 43.3333V46"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M39.9974 32.6667C42.9429 32.6667 45.3307 30.2789 45.3307 27.3333C45.3307 24.3878 42.9429 22 39.9974 22C37.0519 22 34.6641 24.3878 34.6641 27.3333C34.6641 30.2789 37.0519 32.6667 39.9974 32.6667Z"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M57.3359 45.9995V43.3329C57.3351 42.1512 56.9417 41.0032 56.2178 40.0693C55.4938 39.1353 54.4801 38.4683 53.3359 38.1729"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M49.3359 22.1729C50.4832 22.4666 51.5 23.1338 52.2261 24.0693C52.9523 25.0047 53.3464 26.1553 53.3464 27.3395C53.3464 28.5237 52.9523 29.6743 52.2261 30.6098C51.5 31.5452 50.4832 32.2125 49.3359 32.5062"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <filter
          id="filter_users_card"
          x="0"
          y="0"
          width="88"
          height="88"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology radius="4" operator="erode" in="SourceAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" result="effect1_dropShadow" />

          <feMorphology radius="3" operator="erode" in="SourceAlpha" />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" />
        </filter>
      </defs>
    </svg>
  );
};

export default UsersCardIcon;