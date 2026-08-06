"use client";

import { useState } from "react";
import { cn } from "./cn";

function AccordionItem({ title, children, className }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("border-b border-border", className)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center gap-4 py-4 text-left font-body font-semibold text-dark transition-colors duration-200 hover:text-primary"
      >
        <span
          className={cn(
            "transition-transform duration-200",
            open && "rotate-180",
          )}
        >
          ▾
        </span>
        <span>{title}</span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-4" : "max-h-0",
        )}
      >
        <div className="font-body text-sm text-light">{children}</div>
      </div>
    </div>
  );
}

export default function Accordion({ items = [], className, ...props }) {
  return (
    <div
      className={cn(
        "divide-y divide-border rounded-lg border border-border",
        className,
      )}
      {...props}
    >
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
