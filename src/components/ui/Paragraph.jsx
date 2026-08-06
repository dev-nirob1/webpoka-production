import { cn } from "./cn";

export default function Paragraph({ children, className, ...props }) {
  return (
    <p className={cn("font-body text-light", className)} {...props}>
      {children}
    </p>
  );
}
