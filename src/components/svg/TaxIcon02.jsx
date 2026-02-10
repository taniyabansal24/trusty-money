import React from "react";

const TaxIcon02 = ({ width = 46, height = 46, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_dd_968_1201)">
        <mask id="path-1-inside-1_968_1201" fill="white">
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
          mask="url(#path-1-inside-1_968_1201)"
        />

        <path
          d="M20.0715 29.5H25.9265C26.4516 29.5 26.9693 29.3759 27.4374 29.1379C27.9055 28.8998 28.3107 28.5545 28.62 28.1302C28.9294 27.7058 29.1341 27.2144 29.2175 26.6959C29.3008 26.1774 29.2605 25.6466 29.0998 25.1467L27.6782 20.725C27.4082 19.8852 26.8787 19.1527 26.1659 18.633C25.453 18.1134 24.5937 17.8334 23.7115 17.8333H22.2865C21.4044 17.8334 20.545 18.1134 19.8321 18.633C19.1193 19.1527 18.5898 19.8852 18.3198 20.725L16.8982 25.1467C16.7375 25.6466 16.6972 26.1774 16.7806 26.6959C16.8639 27.2144 17.0686 27.7058 17.378 28.1302C17.6873 28.5545 18.0925 28.8998 18.5606 29.1379C19.0287 29.3759 19.5464 29.5 20.0715 29.5ZM25.499 14.5C24.9435 16.7222 24.1101 17.8333 22.999 17.8333C21.8879 17.8333 21.0546 16.7222 20.499 14.5H25.499Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M24.6654 21.1673H22.582C22.2505 21.1673 21.9326 21.299 21.6981 21.5334C21.4637 21.7679 21.332 22.0858 21.332 22.4173C21.332 22.7488 21.4637 23.0668 21.6981 23.3012C21.9326 23.5356 22.2505 23.6673 22.582 23.6673H23.4154C23.7469 23.6673 24.0648 23.799 24.2992 24.0334C24.5337 24.2679 24.6654 24.5858 24.6654 24.9173C24.6654 25.2488 24.5337 25.5668 24.2992 25.8012C24.0648 26.0356 23.7469 26.1673 23.4154 26.1673H21.332M22.9987 20.334V21.1673M22.9987 26.1673V27.0007"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <filter
          id="filter0_dd_968_1201"
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

export default TaxIcon02;
