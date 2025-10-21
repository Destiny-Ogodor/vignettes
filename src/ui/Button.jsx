import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const Button = ({ children, variant = "red", size = "md", to, onClick }) => {
  const baseStyles =
    "relative inline-flex items-center gap-2 w-10/12 justify-center overflow-hidden font-bold capitalize tracking-wider transition-all duration-500 z-10 before:absolute before:left-0 before:top-full before:-z-10 before:h-0 before:w-1/2 before:bg-black before:transition-all before:duration-500 before:ease-in-out after:absolute after:bottom-full after:right-0 after:-z-10 after:h-0 after:w-1/2 after:bg-black after:transition-all after:duration-500 after:ease-in-out hover:before:top-0 hover:before:h-full hover:after:bottom-0 hover:after:h-full";

  const sizeStyles = {
    sm: "px-6 py-3 text-sm",
    md: "px-5 py-3 sm:py-6 text-sm sm:text-lg",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    red: "bg-siteRed text-white",
    white: "bg-white text-black hover:text-white",
    outline:
      "bg-transparent border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white",
  };

  // If `to` is provided, use `Link`, else use `button`
  const Component = to ? Link : "button";

  return (
    <Component
      {...(to ? { to } : {})} // Pass `to` only if it's a Link
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {children}
      <span>
        <FaAngleRight />
      </span>
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["red", "white", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  to: PropTypes.string, // Only used if it's a Link
  onClick: PropTypes.func,
};

export default Button;
