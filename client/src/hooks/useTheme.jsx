import { useEffect, useState } from "react";

export default function useTheme() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  function toggle() {
    setDark((d) => !d);
  }

  return { dark, toggle };
}
