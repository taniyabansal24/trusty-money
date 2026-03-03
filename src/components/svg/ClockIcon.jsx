import React from "react";

const ClockIcon = ({
  size = 14,              // default same as original
  color = "#90A1B9",       // default same as original
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <path
        d="M6.99729 3.00079L6.99921 7.00079L10.0007 9.99935M13.4992 6.99767C13.5 8.72157 12.816 10.3752 11.5976 11.5948C10.3792 12.8143 8.72624 13.5 7.00233 13.5008C5.27842 13.5016 3.62479 12.8176 2.40522 11.5992C1.18565 10.3808 0.50004 8.72781 0.499213 7.00391C0.498385 5.28 1.18241 3.62637 2.40081 2.4068C3.61921 1.18723 5.27219 0.501615 6.99609 0.500787C8.72 0.49996 10.3736 1.18399 11.5932 2.40239C12.8128 3.62079 13.4984 5.27376 13.4992 6.99767Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ClockIcon;