"use client";

import { cn } from "./cn";

const Tabs = ({ options, value, onChange, className }) => {
  return (
    <ul className={cn("mx-auto my-12 flex w-fit flex-wrap gap-2 rounded-full bg-primary p-1", className)}>
      {options.map((option) => (
        <li key={option.value}>
          <button
            onClick={() => onChange(option.value)}
            className={cn(
              "font-bold rounded-full px-10 py-2 text-lg text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-dark",
              value === option.value && "bg-white text-dark"
            )}
          >
            {option.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;