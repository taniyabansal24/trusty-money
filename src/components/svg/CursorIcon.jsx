import React from "react";

const CursorIcon = ({
  height = 16,
  color = "#14171C",
  className = "",
  ...props
}) => {
  return (
    <svg
      width="1"
      height={height}
      viewBox="0 0 1 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="16"
        stroke={color}
      />

      <animate
        attributeName="opacity"
        values="1;0;1"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </svg>
  );
};

export default CursorIcon;
