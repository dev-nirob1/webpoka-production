"use client";

import { cn } from "./cn";

const Button = ({
  children,
  icon,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-between overflow-hidden text-center font-bold leading-none transition-all duration-300 ease-in-out",

        // Primary
        variant === "primary" &&
          "rounded-full bg-gradient-to-r from-primary to-secondary py-3 pl-8 pr-20 text-[1.1rem] text-white hover:bg-gradient-to-l",

        // Secondary
        variant === "secondary" &&
          "z-[1] rounded-full bg-primary px-10 py-4 text-white after:absolute after:inset-y-0 after:left-1/2 after:-z-[1] after:w-0 after:-translate-x-1/2 after:bg-highlight after:transition-all after:duration-500 after:ease-in-out hover:after:w-full",

        // Circle
        variant === "circle" && "rounded-full",

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