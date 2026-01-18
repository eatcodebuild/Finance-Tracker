import { cn } from "../../lib/utils";

export default function Card({ className, children, gridClasses, ...props }) {
  const baseStyles = "p-4 shadow rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-transparent";

  return (
    <div className={cn(baseStyles, className)} {...props}>
      {children}
    </div>
  );
}
