import { cn } from "../../lib/utils";

export default function Card({ className, children, gridClasses, ...props }) {
  const baseStyles = "p-6 shadow rounded-3xl bg-white dark:bg-darkbg";

  return (
    <div className={cn(baseStyles, className)} {...props}>
      {children}
    </div>
  );
}
