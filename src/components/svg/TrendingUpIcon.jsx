const TrendingUpIcon = ({ size = 16, stroke = "#0A0A0A", ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.666 4.66675H14.666V8.66675"
        stroke={stroke}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6673 4.66675L9.00065 10.3334L5.66732 7.00008L1.33398 11.3334"
        stroke={stroke}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrendingUpIcon;
