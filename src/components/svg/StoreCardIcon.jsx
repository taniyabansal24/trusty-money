import React from "react";

const StoreCardIcon = ({
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
      <g filter="url(#filter_store_card)">
        <path
          d="M12 18C12 9.16344 19.1634 2 28 2H60C68.8366 2 76 9.16344 76 18V50C76 58.8366 68.8366 66 60 66H28C19.1634 66 12 58.8366 12 50V18Z"
          fill="#073F9E"
        />

        <path
          d="M30.6641 27.3337L36.5441 21.4537C36.7921 21.2041 37.0872 21.0061 37.4121 20.8711C37.7371 20.7361 38.0855 20.6667 38.4374 20.667H49.5574C49.9093 20.6667 50.2577 20.7361 50.5827 20.8711C50.9076 21.0061 51.2027 21.2041 51.4507 21.4537L57.3307 27.3337"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M33.3359 34V44.6667C33.3359 45.3739 33.6169 46.0522 34.117 46.5523C34.6171 47.0524 35.2954 47.3333 36.0026 47.3333H52.0026C52.7098 47.3333 53.3881 47.0524 53.8882 46.5523C54.3883 46.0522 54.6693 45.3739 54.6693 44.6667V34"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M48 47.333V41.9997C48 41.2924 47.719 40.6142 47.219 40.1141C46.7189 39.614 46.0406 39.333 45.3333 39.333H42.6667C41.9594 39.333 41.2811 39.614 40.781 40.1141C40.281 40.6142 40 41.2924 40 41.9997V47.333"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M30.6641 27.333H57.3307"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <filter
          id="filter_store_card"
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
            result="hardAlpha"
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
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="7.5" />
          <feBlend mode="normal" in="SourceGraphic" />
        </filter>
      </defs>
    </svg>
  );
};

export default StoreCardIcon;