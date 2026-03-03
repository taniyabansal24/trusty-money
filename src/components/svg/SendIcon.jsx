import React from "react";

const SendIcon = ({
  size = 14,          // default width
  color = "white",    // default color
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={(size * 12) / 14} // maintain 14x12 ratio
      viewBox="0 0 14 12"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <path
        d="M0 0V4.57692L8.07692 5.92308L0 7.26923V11.8462L14 5.92308L0 0Z"
        fill={color}
      />
    </svg>
  );
};

export default SendIcon;