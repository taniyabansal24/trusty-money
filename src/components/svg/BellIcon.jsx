import React from "react";

const BellIcon = ({ width = 14, height = 16, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path d="M5.25 14.25H8.25C8.25 15.075 7.575 15.75 6.75 15.75C5.925 15.75 5.25 15.075 5.25 14.25ZM13.5 12.75V13.5H0V12.75L1.5 11.25V6.75C1.5 4.425 3 2.4 5.25 1.725V1.5C5.25 0.675 5.925 0 6.75 0C7.575 0 8.25 0.675 8.25 1.5V1.725C10.5 2.4 12 4.425 12 6.75V11.25L13.5 12.75ZM10.5 6.75C10.5 4.65 8.85 3 6.75 3C4.65 3 3 4.65 3 6.75V12H10.5V6.75Z" />
    </svg>
  );
};

export default BellIcon;