import React from "react";

const PaymentsAndCollectionIcon = ({
  width = 46,
  height = 46,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_dd_968_1227)">
        <mask id="path-1-inside-1_968_1227" fill="white">
          <path d="M3 22C3 10.9543 11.9543 2 23 2C34.0457 2 43 10.9543 43 22C43 33.0457 34.0457 42 23 42C11.9543 42 3 33.0457 3 22Z" />
        </mask>

        <path
          d="M3 22C3 10.9543 11.9543 2 23 2C34.0457 2 43 10.9543 43 22C43 33.0457 34.0457 42 23 42C11.9543 42 3 33.0457 3 22Z"
          fill="#073F9E"
          shapeRendering="crispEdges"
        />

        <path
          d="M3 22M43 22M43 22M3 22M23 2M43 22M23 42M3 22M23 42V40.4C12.838 40.4 4.6 32.162 4.6 22H3H1.4C1.4 33.9293 11.0707 43.6 23 43.6V42ZM43 22H41.4C41.4 32.162 33.162 40.4 23 40.4V42V43.6C34.9293 43.6 44.6 33.9293 44.6 22H43ZM23 2V3.6C33.162 3.6 41.4 11.838 41.4 22H43H44.6C44.6 10.0707 34.9293 0.4 23 0.4V2ZM23 2V0.4C11.0707 0.4 1.4 10.0707 1.4 22H3H4.6C4.6 11.838 12.838 3.6 23 3.6V2Z"
          fill="#073F9E"
          mask="url(#path-1-inside-1_968_1227)"
        />

        <path
          d="M22.3333 19.5294C22.3333 21.0894 21.14 22.3529 19.6667 22.3529C18.1933 22.3529 17 21.0894 17 19.5294C17 17.9694 18.1933 16.7059 19.6667 16.7059C21.14 16.7059 22.3333 17.9694 22.3333 19.5294ZM22.3333 24.2729V28H15V26.5882C15 25.0282 17.0867 23.7647 19.6667 23.7647C20.6667 23.7647 21.58 23.9553 22.3333 24.2729ZM31 28H23.6667V16H31V28ZM25.6667 22C25.6667 21.532 25.8423 21.0831 26.1548 20.7522C26.4674 20.4212 26.8913 20.2353 27.3333 20.2353C27.7754 20.2353 28.1993 20.4212 28.5118 20.7522C28.8244 21.0831 29 21.532 29 22C29 22.468 28.8244 22.9169 28.5118 23.2478C28.1993 23.5788 27.7754 23.7647 27.3333 23.7647C26.8913 23.7647 26.4674 23.5788 26.1548 23.2478C25.8423 22.9169 25.6667 22.468 25.6667 22ZM29.6667 18.8235C29.313 18.8235 28.9739 18.6748 28.7239 18.41C28.4738 18.1453 28.3333 17.7862 28.3333 17.4118H26.3333C26.3333 18.1953 25.74 18.8235 25 18.8235V25.1765C25.3536 25.1765 25.6928 25.3252 25.9428 25.59C26.1929 25.8547 26.3333 26.2138 26.3333 26.5882H28.3333C28.3333 25.8118 28.9333 25.1765 29.6667 25.1765V18.8235Z"
          fill="white"
        />
      </g>

      <defs>
        <filter
          id="filter0_dd_968_1227"
          x="0"
          y="0"
          width="46"
          height="46"
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
          <feMorphology radius="1" operator="erode" in="SourceAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend in2="BackgroundImageFix" />
          <feGaussianBlur stdDeviation="1.5" />
          <feBlend in="SourceGraphic" />
        </filter>
      </defs>
    </svg>
  );
};

export default PaymentsAndCollectionIcon;
