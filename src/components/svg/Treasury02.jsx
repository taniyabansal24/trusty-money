import React from "react";

const Treasury02 = ({ width = 46, height = 46, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_dd_968_1204)">
        <mask id="path-1-inside-1_968_1204" fill="white">
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
          mask="url(#path-1-inside-1_968_1204)"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.5583 13.7927C22.6908 13.7099 22.8438 13.666 23 13.666C23.1562 13.666 23.3092 13.7099 23.4417 13.7927L29.195 17.3885L23 21.0327L16.805 17.3885L22.5583 13.7927ZM15.5067 18.5585C15.5021 18.5942 15.4999 18.6301 15.5 18.666V25.3327C15.5 25.474 15.536 25.613 15.6045 25.7367C15.673 25.8603 15.7718 25.9644 15.8917 26.0393L22.1667 29.961V22.476L15.5067 18.5585ZM23.8333 29.961L30.1083 26.0393C30.2282 25.9644 30.327 25.8603 30.3955 25.7367C30.4641 25.613 30.5 25.474 30.5 25.3327V18.666C30.5 18.6299 30.4978 18.5941 30.4933 18.5585L23.8333 22.4752V29.961Z"
          fill="white"
        />
      </g>

      <defs>
        <filter
          id="filter0_dd_968_1204"
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

export default Treasury02;
