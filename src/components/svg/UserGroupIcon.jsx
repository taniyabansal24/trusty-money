import React from "react";

const UserGroupIcon = ({
  width = 14,
  height = 14,
  color = "#90A1B9",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M9.33827 12.2528L9.33771 11.0861C9.33741 10.4673 9.09129 9.87392 8.6535 9.43654C8.2157 8.99917 7.62209 8.75362 7.00325 8.75392L3.50325 8.7556C2.88442 8.75589 2.29104 9.00201 1.85367 9.43981C1.41629 9.8776 1.17074 10.4712 1.17104 11.0901L1.1716 12.2567"
          stroke={color}
          strokeWidth="1.16667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33398 1.82703C9.8344 1.95651 10.2777 2.24848 10.5942 2.65713C10.9107 3.06578 11.0826 3.56796 11.0829 4.08486C11.0831 4.60176 10.9117 5.1041 10.5956 5.51306C10.2794 5.92201 9.83645 6.21441 9.33615 6.34436"
          stroke={color}
          strokeWidth="1.16667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.8395 12.2504L12.839 11.0837C12.8383 10.5667 12.666 10.0646 12.3491 9.65611C12.0321 9.24766 11.5885 8.95604 11.0879 8.82703"
          stroke={color}
          strokeWidth="1.16667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.25354 6.42031C6.5422 6.41969 7.58637 5.37452 7.58575 4.08586C7.58514 2.79719 6.53997 1.75303 5.2513 1.75364C3.96264 1.75426 2.91847 2.79943 2.91909 4.0881C2.91971 5.37676 3.96488 6.42093 5.25354 6.42031Z"
          stroke={color}
          strokeWidth="1.16667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0 0.0067) rotate(-0.0274919)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserGroupIcon;
