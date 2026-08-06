import { cn } from "./cn";

export default function Section({ children, className, ...props }) {
  return (
    <section className={cn("py-16", className)} {...props}>
      {children}
    </section>
  );
}
