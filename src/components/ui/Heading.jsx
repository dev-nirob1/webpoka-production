import { cn } from "./cn";

const tags = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
};

const sizes = {
  1: "text-[length:var(--heading-1)] leading-[1.30]",
  2: "text-[length:var(--heading-2)] leading-[1.15]",
  3: "text-[length:var(--heading-3)] leading-tight",
  4: "text-[length:var(--heading-4)] leading-snug",
  5: "text-[length:var(--heading-5)] leading-snug",
};

export default function Heading({ children, as = 1, className, ...props }) {
  const Tag = tags[as] ?? "h2";
  const size = sizes[as] ?? sizes[2];

  return (
    <Tag
      className={cn("font-heading font-bold text-dark", size, className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
