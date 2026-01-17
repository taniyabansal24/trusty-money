import React from "react";

const BuildingIcon = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.375 18.375H37.1875V31.8125H50.625V50.625H18.375V18.375ZM26.4375 27.7812H23.75V25.0938H26.4375V27.7812ZM31.8125 27.7812H29.125V25.0938H31.8125V27.7812ZM23.75 35.8438H26.4375V33.1562H23.75V35.8438ZM31.8125 35.8438H29.125V33.1562H31.8125V35.8438ZM23.75 43.9062H26.4375V41.2188H23.75V43.9062ZM31.8125 43.9062H29.125V41.2188H31.8125V43.9062ZM34.5 37.1875V47.9375H37.1875V39.875H42.5625V47.9375H45.25V37.1875H34.5Z"
      fill="#073F9E"
    />
  </svg>
);

export default BuildingIcon;
