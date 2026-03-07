import React from "react";

const BankCardIcon = ({
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
      <g filter="url(#filter_bank_card)">
        <path
          d="M12 18C12 9.16344 19.1634 2 28 2H60C68.8366 2 76 9.16344 76 18V50C76 58.8366 68.8366 66 60 66H28C19.1634 66 12 58.8366 12 50V18Z"
          fill="#073F9E"
        />

        <path
          d="M53.888 41.6045H33.9505C33.2832 41.6045 32.7422 42.1455 32.7422 42.8128V44.0212C32.7422 44.6885 33.2832 45.2295 33.9505 45.2295H53.888C54.5554 45.2295 55.0964 44.6885 55.0964 44.0212V42.8128C55.0964 42.1455 54.5554 41.6045 53.888 41.6045Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M35.763 31.3316V41.6145M52.0755 31.3316V41.6145M46.9401 31.3316V41.6145M40.8984 31.3316V41.6145M42.7593 23.2068L33.3705 28.3422C33.1804 28.4462 33.0217 28.5995 32.9112 28.7859C32.8006 28.9724 32.7422 29.1851 32.7422 29.4019V30.6066C32.7422 30.7989 32.8186 30.9833 32.9545 31.1192C33.0905 31.2552 33.2749 31.3316 33.4672 31.3316H54.3714C54.5636 31.3316 54.748 31.2552 54.884 31.1192C55.02 30.9833 55.0964 30.7989 55.0964 30.6066V29.4019C55.0963 29.1851 55.0379 28.9724 54.9274 28.7859C54.8168 28.5995 54.6582 28.4462 54.468 28.3422L45.0793 23.2068C44.7236 23.0122 44.3247 22.9102 43.9193 22.9102C43.5138 22.9102 43.1149 23.0122 42.7593 23.2068Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <filter
          id="filter_bank_card"
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

export default BankCardIcon;