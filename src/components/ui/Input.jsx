import { cn } from "./cn";

// ui/Input.jsx
const Input = ({ type = "text", className, ...props }) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full rounded-lg border-none bg-white p-3 shadow outline-none placeholder:text-sm",
        className
      )}
      {...props}
    />
  );
};

export default Input;