"use client";

import { cn } from "./cn";

const Accordion = ({ accordionData, currentOpenItem, toggleAccordion }) => {
  const isOpen = currentOpenItem === accordionData.id;

  return (
    <div className="overflow-hidden">
      <div
        onClick={() => toggleAccordion(accordionData.id)}
        className="flex items-center cursor-pointer gap-4 p-4 font-medium"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-primary to-highlight text-white">
          <i
            className={cn(isOpen ? "fa-solid fa-minus" : "fa-solid fa-plus")}
          />
        </span>
        {accordionData.question}
      </div>
      <div
        className={cn(
          "max-h-0 overflow-hidden p-0 transition-all duration-300 ease-in-out",
          isOpen && "max-h-[500px] p-4 py-1",
        )}
      >
        {accordionData.answer}
      </div>
    </div>
  );
};

export default Accordion;
