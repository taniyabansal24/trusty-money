const PowerIcon = ({ size = 12, color = "white", className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 1V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.20015 3.30005C9.82847 3.9286 10.2566 4.72913 10.4305 5.60069C10.6045 6.47225 10.5165 7.37579 10.1776 8.19739C9.83868 9.01898 9.26408 9.72183 8.52626 10.2173C7.78843 10.7127 6.92042 10.9786 6.03168 10.9814C5.14294 10.9842 4.27327 10.7238 3.53236 10.2329C2.79144 9.7421 2.21246 9.04287 1.86842 8.22342C1.52438 7.40396 1.4307 6.50098 1.59918 5.62835C1.76767 4.75572 2.19077 3.95253 2.81515 3.32005"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PowerIcon;
