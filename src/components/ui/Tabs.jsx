"use client";

import { useState } from "react";
import { cn } from "./cn";

export default function Tabs({ tabs = [], className, ...props }) {
  const [active, setActive] = useState(0);

  return (
    <div className={cn("w-full", className)} {...props}>
      {/* Tab Bar */}
      <div className="flex border-b border-border">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "font-body text-sm font-medium px-5 py-3",
              "transition-colors duration-200",
              "border-b-2 -mb-px",
              active === index
                ? "border-primary text-primary"
                : "border-transparent text-light hover:text-dark"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-5">
        {tabs[active]?.content}
      </div>
    </div>
  );
}
