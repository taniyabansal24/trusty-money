import React from "react";

const LocationIcon = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M13.3327 6.66683C13.3327 9.9955 9.64002 13.4622 8.40002 14.5328C8.2845 14.6197 8.14388 14.6667 7.99935 14.6667C7.85482 14.6667 7.7142 14.6197 7.59868 14.5328C6.35868 13.4622 2.66602 9.9955 2.66602 6.66683C2.66602 5.25234 3.22792 3.89579 4.22811 2.89559C5.22831 1.8954 6.58486 1.3335 7.99935 1.3335C9.41384 1.3335 10.7704 1.8954 11.7706 2.89559C12.7708 3.89579 13.3327 5.25234 13.3327 6.66683Z"
      stroke="currentColor"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
      stroke="currentColor"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LocationIcon;
