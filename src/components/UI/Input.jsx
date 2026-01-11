import { cn } from "../../lib/utils";
import { EyeOpen, EyeClosed } from "../icons/EyeBtn";
import { useState } from "react";

export default function Input({ type = "text", variant = "primary", className, width, label, colsClass, ...props }) {
  const baseStyles =
    "border rounded bg-white dark:bg-gray-800 p-1 shadow-sm border-gray-200 focus:ring-0 focus:outline-1 transition-all duration-200 ease-in-out dark:caret-white dark:text-white";

  const variants = {
    primary: "outline-primary",
    secondary: "outline-secondary",
  };

  return (
    <div className={colsClass}>
      <label htmlFor={label} className="flex mb-1 text-black dark:text-white">
        {label}
      </label>
      {type === "password" ? (
        <div className="relative">
          <EyeClosed className="absolute right-2 top-1/2 -translate-y-1/2" />
          <input id={label} className={cn(baseStyles, variants[variant], className, width)} {...props} type={type} />
        </div>
      ) : (
        <input id={label} className={cn(baseStyles, variants[variant], className, width)} {...props} type={type} />
      )}
    </div>
  );
}
