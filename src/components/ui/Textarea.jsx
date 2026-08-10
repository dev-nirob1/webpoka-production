import { cn } from "./cn";

// ui/Textarea.jsx
const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={cn(
        "mb-4 w-full rounded-lg border-none bg-white p-5 shadow outline-none placeholder:text-sm",
        className
      )}
      {...props}
    />
  );
};

export default Textarea;