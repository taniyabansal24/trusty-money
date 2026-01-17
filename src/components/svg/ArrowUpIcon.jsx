import React from "react";

const ArrowUpIcon = ({
  size = 70,
  className = "",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect width="70" height="70" rx="16" fill="#E0ECFF" />
    <path
      d="M21.5858 44.5858C20.8047 45.3668 20.8047 46.6332 21.5858 47.4142C22.3668 48.1953 23.6332 48.1953 24.4142 47.4142L23 46L21.5858 44.5858ZM48 23C48 21.8954 47.1046 21 46 21L28 21C26.8954 21 26 21.8954 26 23C26 24.1046 26.8954 25 28 25L44 25L44 41C44 42.1046 44.8954 43 46 43C47.1046 43 48 42.1046 48 41L48 23ZM23 46L24.4142 47.4142L47.4142 24.4142L46 23L44.5858 21.5858L21.5858 44.5858L23 46Z"
      fill="#073F9E"
    />
  </svg>
);

export default ArrowUpIcon;
