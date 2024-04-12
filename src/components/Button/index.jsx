import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[19px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-xs text-black-900_01",
  },
};
const sizes = {
  sm: "h-[60px] px-[35px] text-base",
  xs: "h-[38px] px-4 text-xs",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-black-900_01 tracking-[1.50px] uppercase bg-white-A700 shadow-xs ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700"]),
};

export { Button };
