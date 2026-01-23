import { cn } from "../../lib/utils";

export default function Button({ children, variant = "primary", size = "md", className, ...props }) {
  const baseStyles = "rounded-full cursor-pointer duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white shadow-sm active:bg-primary-active",
    secondary: "bg-secondary hover:bg-secondary-hover text-white shadow-sm active:bg-secondary-active",
    outline: "border-1 border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-active",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
