import { cn } from "./cn";

export default function Label({ children, className, ...props }) {
  return (
    <label className={cn("font-body text-sm font-medium text-dark", className)} {...props}>
      {children}
    </label>
  );
}
