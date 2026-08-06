import { cn } from "./cn";

export default function Container({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "mx-auto w-[90%]",
        "min-[576px]:max-w-[540px]",
        "min-[768px]:max-w-[720px]",
        "min-[992px]:max-w-[960px]",
        "min-[1200px]:max-w-[1140px]",
        "min-[1400px]:max-w-[1320px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
