import { cn } from "./cn";

const tags = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
};

const sizes = {
  1: "text-[length:var(--heading-1)]",
  2: "text-[length:var(--heading-2)]",
  3: "text-[length:var(--heading-3)]",
  4: "text-[length:var(--heading-4)]",
  5: "text-[length:var(--heading-5)]",
};

export default function Heading({ children, as = 1, className, ...props }) {
  const Tag = tags[as] ?? "h2";
  const size = sizes[as] ?? sizes[2];

  return (
    <Tag
      className={cn("font-heading font-bold leading-tight text-dark", size, className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
