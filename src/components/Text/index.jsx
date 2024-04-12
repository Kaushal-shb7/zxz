import React from "react";

const sizes = {
  "5xl": "text-7xl font-medium md:text-5xl",
  xs: "text-xs font-light",
  lg: "text-lg font-medium",
  s: "text-[15px] font-thin",
  "2xl": "text-2xl font-medium md:text-[22px]",
  "3xl": "text-[28px] font-thin md:text-[26px] sm:text-2xl",
  "4xl": "text-[32px] font-light md:text-3xl sm:text-[28px]",
  xl: "text-xl font-medium",
  md: "text-base font-light",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
