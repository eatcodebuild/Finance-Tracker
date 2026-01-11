import { cn } from "../lib/utils";

export default function Input({ type = "text", variant = "primary", className, width, label, ...props }) {
  const baseStyles =
    "border rounded p-1 shadow-sm border-gray-400 focus:ring-0 focus:outline-1 transition-all duration-200 ease-in-out dark:caret-white dark:text-white dark:shadow-gray-600";

  const variants = {
    primary: "outline-primary",
    secondary: "outline-secondary",
  };

  return (
    <div>
      <label htmlFor={label} className="flex mb-1 text-black dark:text-white">
        {label}
      </label>
      <input id={label} className={cn(baseStyles, variants[variant], className, width)} {...props} type={type} />
    </div>
  );
}
