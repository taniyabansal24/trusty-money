import React from "react";

const FilterIcon = ({
  width = 13,
  height = 13,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      <path d="M0 9.91667V11.3333H4.25V9.91667H0ZM0 1.41667V2.83333H7.08333V1.41667H0ZM7.08333 12.75V11.3333H12.75V9.91667H7.08333V8.5H5.66667V12.75H7.08333ZM2.83333 4.25V5.66667H0V7.08333H2.83333V8.5H4.25V4.25H2.83333ZM12.75 7.08333V5.66667H5.66667V7.08333H12.75ZM8.5 4.25H9.91667V2.83333H12.75V1.41667H9.91667V0H8.5V4.25Z" />
    </svg>
  );
};

export default FilterIcon;