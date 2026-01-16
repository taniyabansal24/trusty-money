import React from "react";

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 196 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="35"
        height="32"
        style={{ maskType: "luminance" }}
      >
        <path d="M34.386 0H0V32H34.386V0Z" fill="white" />
      </mask>

      <g mask="url(#mask0)">
        <path d="M11.8442 32.0005L19.1882 16.9387C19.8394 15.603 21.1562 14.7614 22.5949 14.7614H24.0704L28.6557 11.3137H21.6631C18.9962 11.3137 17.1932 11.7115 15.7486 14.2359L6.87744 32.0005H11.8442Z" fill="#7BB6B3" />
        <path d="M0.000392601 32C1.89333 32.3494 8.5066 32.7329 4.4963 31.2317C-0.191359 29.4768 4.05382 30.9602 4.46659 29.5219L8.9758 21.0186L13.4852 12.5152C14.8714 10.4403 17.7071 9.15598 20.7716 9.21493L20.9351 9.21811L34.3862 9.34861V6.14138H20.2758C15.8869 6.12263 12.9905 6.53923 10.3344 10.8594L0.0335251 30.8088C-0.0701313 31.0093 -0.275435 31.9491 0.000392601 32Z" fill="#073F9E" />
        <path d="M30.5618 14.7609C29.0005 14.7609 27.582 15.6693 26.9287 17.0873L20.0589 32H15.2832L23.813 14.2354C24.6529 12.4861 26.1347 11.3132 28.6992 11.3132H34.3865V14.6875V32H23.813L31.5857 14.7609H30.5618Z" fill="#7BB6B3" />
      </g>
    </g>

    <defs>
      <clipPath id="clip0">
        <rect width="196" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Logo;
