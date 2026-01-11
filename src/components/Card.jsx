import { cn } from "../lib/utils";

export default function Card({ className, children, gridClasses, ...props }) {
  const baseStyles = "p-4 shadow rounded bg-white dark:bg-gray-800";

  return (
    <div className={cn(baseStyles, className)} {...props}>
      {children}
    </div>
  );
}
