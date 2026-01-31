import { cn } from "../../lib/utils";

export default function Card({ className, children, gridClasses, ...props }) {
  const baseStyles = "p-6 shadow bg-white dark:bg-darkBg rounded-2xl border border-indigo-50 dark:border-gray-700";

  return (
    <div className={cn(baseStyles, className)} {...props}>
      {children}
    </div>
  );
}
