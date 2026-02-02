import React from "react";

const ReceiptIcon = ({
  size = 20,
  color = "#344054",
  strokeWidth = 1.25,
  className = "",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      {...props}
    >
      <path
        d="M7.5 11.6667L12.5 6.66669"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7.91667 7.50002C8.14679 7.50002 8.33333 7.31347 8.33333 7.08335C8.33333 6.85324 8.14679 6.66669 7.91667 6.66669C7.68655 6.66669 7.5 6.85324 7.5 7.08335C7.5 7.31347 7.68655 7.50002 7.91667 7.50002Z"
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M12.0837 11.6666C12.3138 11.6666 12.5003 11.4801 12.5003 11.25C12.5003 11.0199 12.3138 10.8333 12.0837 10.8333C11.8535 10.8333 11.667 11.0199 11.667 11.25C11.667 11.4801 11.8535 11.6666 12.0837 11.6666Z"
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M4.16699 17.5V4.16667C4.16699 3.72464 4.34259 3.30072 4.65515 2.98816C4.96771 2.67559 5.39163 2.5 5.83366 2.5H14.167C14.609 2.5 15.0329 2.67559 15.3455 2.98816C15.6581 3.30072 15.8337 3.72464 15.8337 4.16667V17.5L13.3337 15.8333L11.667 17.5L10.0003 15.8333L8.33366 17.5L6.66699 15.8333L4.16699 17.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ReceiptIcon;
