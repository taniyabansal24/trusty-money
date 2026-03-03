import React from "react";

const TrashIcon = ({
  size = 12,          // default same as original width
  color = "black",    // default same as original
  opacity = 0.7,      // default same as original
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={(size * 13) / 12} // maintain original aspect ratio (12x13)
      viewBox="0 0 12 13"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <path
        d="M2.071 12.4846C1.71633 12.4846 1.41444 12.36 1.16533 12.1109C0.916222 11.8618 0.791667 11.5602 0.791667 11.206V1.40125H0V0.609583H3.16667V0H7.91667V0.609583H11.0833V1.40125H10.2917V11.206C10.2917 11.5702 10.1697 11.8745 9.92592 12.1188C9.68208 12.3632 9.37756 12.4851 9.01233 12.4846H2.071ZM9.5 1.40125H1.58333V11.206C1.58333 11.348 1.62899 11.4647 1.72029 11.556C1.8116 11.6473 1.9285 11.6929 2.071 11.6929H9.01312C9.13451 11.6929 9.24614 11.6423 9.348 11.5409C9.44986 11.4396 9.50053 11.3277 9.5 11.2053V1.40125ZM3.80633 10.1096H4.598V2.98458H3.80633V10.1096ZM6.48533 10.1096H7.277V2.98458H6.48533V10.1096Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

export default TrashIcon;