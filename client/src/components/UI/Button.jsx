import { cn } from "../../lib/utils";
import { useThemeContext } from "../../hooks/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

export default function Button({ children, purpose = "standard", variant = "primary", size = "md", className, ...props }) {
  const { toggle, dark } = useThemeContext();
  const baseStyles = "rounded-full cursor-pointer duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white shadow-sm active:bg-primary-active",
    secondary: "bg-secondary hover:bg-secondary-hover text-white shadow-sm active:bg-secondary-active",
    outline: "border-1 border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-active",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-1 min-h-8",
    lg: "px-7 py-3 text-lg",
  };

  const isDarkToggle = purpose === "darkToggle";
  const buttonText = isDarkToggle ? null : children;
  const handleClick = isDarkToggle ? toggle : props.onClick;
  const icons = {
    darkToggle: dark ? <FaSun /> : <FaMoon />,
    account: <IoPersonSharp />,
  };
  const icon = icons[purpose] ?? null;

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} onClick={handleClick} {...props}>
      {icon}
      {buttonText}
    </button>
  );
}
