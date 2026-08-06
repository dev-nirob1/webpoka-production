import { cn } from "./cn";

export default function Input({
  label,
  error,
  className,
  disabled = false,
  type = "text",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="font-body text-sm font-medium text-dark">{label}</label>
      )}
      <input
        type={type}
        disabled={disabled}
        className={cn(
          "font-body text-sm text-dark",
          "w-full rounded-lg border border-border",
          "px-4 py-3",
          "outline-none transition-colors duration-200",
          "placeholder:text-light",
          "focus:border-primary focus:ring-2 focus:ring-primary/20",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-alternative focus:border-alternative focus:ring-alternative/20",
          className
        )}
        {...props}
      />
      {error && (
        <span className="font-body text-xs text-alternative">{error}</span>
      )}
    </div>
  );
}
