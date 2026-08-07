"use client";

import { cn } from "./cn";

const Button = ({ children, icon, variant = "primary", className, ...props }) => {
  return (
    <button
      className={cn(
        "relative inline-block overflow-hidden text-center font-bold leading-none transition-all duration-300 ease-in-out flex items-center justify-between",
        variant === "primary" &&
          "rounded-full py-3 pl-8 pr-20 text-[1.1rem] text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l",
        variant === "secondary" && "", // TODO: boilerplate
        variant === "circle" && "", // TODO: boilerplate
        className
      )}
      {...props}
    >
      {children}
      {icon && variant === "primary" && (
        <span className="absolute right-0 top-0 flex h-full w-14 items-center justify-center rounded-full bg-white text-dark">
          <i className={cn(icon, "text-lg")} />
        </span>
      )}
    </button>
  );
};

export default Button;