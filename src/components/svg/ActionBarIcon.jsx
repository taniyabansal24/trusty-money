import React from "react";

const ActionBarIcon = ({
  width = 55,
  height = 14,
  bgColor = "#EAF2FF",
  primaryColor = "#1B1B1B",
  opacity = 0.7,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 55 14"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      {/* Background box */}
      <rect x="41" width="14" height="14" rx="2" fill={bgColor} />

      {/* Left line */}
      <line
        x1="0.5"
        y1="8.5"
        x2="10.5"
        y2="8.5"
        stroke={primaryColor}
        strokeOpacity={opacity}
        strokeLinecap="round"
      />

      {/* Middle diagonal arrows */}
      <path
        d="M22.5 10.071C22.5 10.3472 22.7239 10.571 23 10.571L27.5 10.571C27.7761 10.571 28 10.3472 28 10.071C28 9.79487 27.7761 9.57101 27.5 9.57101L23.5 9.57101L23.5 5.57101C23.5 5.29487 23.2761 5.07101 23 5.07101C22.7239 5.07101 22.5 5.29487 22.5 5.57101L22.5 10.071ZM30.5711 2.99995C30.5711 2.7238 30.3472 2.49995 30.0711 2.49995L25.5711 2.49995C25.2949 2.49995 25.0711 2.7238 25.0711 2.99995C25.0711 3.27609 25.2949 3.49995 25.5711 3.49995L29.5711 3.49995L29.5711 7.49995C29.5711 7.77609 29.7949 7.99995 30.0711 7.99995C30.3472 7.99995 30.5711 7.77609 30.5711 7.49995L30.5711 2.99995ZM23 10.071L23.3536 10.4246L30.4246 3.3535L30.0711 2.99995L29.7175 2.64639L22.6464 9.71746L23 10.071Z"
        fill={primaryColor}
        fillOpacity={opacity}
      />

      {/* Cross icon */}
      <line
        x1="44.7071"
        y1="4"
        x2="51.0711"
        y2="10.364"
        stroke="black"
        strokeOpacity={opacity}
        strokeLinecap="round"
      />
      <line
        x1="45"
        y1="10.364"
        x2="51.364"
        y2="4.00001"
        stroke="black"
        strokeOpacity={opacity}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ActionBarIcon;