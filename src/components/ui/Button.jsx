"use client";

import { cn } from "./cn";

/**
 * Button component
 *
 * Supports:
 * - Normal button:        <Button>Click Me</Button>
 * - Text + Icon:          <Button icon={<ArrowRight />}>Learn More</Button>
 * - Circle icon button:   <Button shape="circle"><ArrowRight /></Button>
 *
 * @param {Object}    props
 * @param {React.ReactNode} props.children
 * @param {React.ReactNode} [props.icon]       - Icon rendered after the label
 * @param {"default"|"circle"} [props.shape]  - "circle" renders a round icon-only button
 * @param {string}    [props.className]        - Extra Tailwind classes (merged safely)
 * @param {string}    [props.type]             - button | submit | reset
 * @param {boolean}   [props.disabled]
 */
export default function Button({
  children,
  icon,
  shape = "default",
  className,
  type = "button",
  disabled = false,
  ...props
}) {
  const isCircle = shape === "circle";

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        // Base
        "inline-flex items-center justify-center font-body font-semibold",
        "cursor-pointer select-none outline-none",
        "transition-all duration-200 ease-in-out",
        // Focus ring
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        // Disabled
        "disabled:opacity-50 disabled:cursor-not-allowed",

        // Shape variants
        isCircle
          ? [
              "rounded-full p-3",
              "bg-primary text-white",
              "hover:bg-secondary hover:scale-105 active:scale-95",
            ]
          : [
              "rounded-lg px-6 py-3 gap-2 text-sm",
              "bg-primary text-white",
              "hover:bg-secondary active:scale-95",
            ],

        className
      )}
      {...props}
    >
      {children}
      {icon && !isCircle && (
        <span className="inline-flex items-center">{icon}</span>
      )}
    </button>
  );
}
