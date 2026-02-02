import { motion } from "framer-motion";
import { useState } from "react";
import { hoverScale } from "../../utils/animations";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  shimmer = false, // 👈 optional prop
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    "relative overflow-hidden font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center";

  const variants = {
    primary: "text-white hover:shadow-lg",
    secondary:
      "bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 text-blue-900",
    outline:
      "bg-transparent border-2 border-gray-300 hover:border-gray-700 hover:text-gray-700",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    success: "bg-trusty-green text-white hover:bg-green-600",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const getVariantStyle = (variant) => {
    switch (variant) {
      case "primary":
        return { backgroundColor: "#073F9E" };
      case "secondary":
        return { color: "#073F9E", borderColor: "#073F9E" };
      default:
        return {};
    }
  };

  return (
    <motion.button
      {...hoverScale}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? disabledStyles : ""}
        ${className}
      `}
      style={getVariantStyle(variant)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {/* ✨ Shimmer Effect */}
      {shimmer && isHovered && (
        <motion.span
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{ filter: "blur(8px)" }}
        />
      )}

      {/* Button Content */}
      <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">
        {children}
      </span>
    </motion.button>
  );
};

export default Button;
