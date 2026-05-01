import { useEffect, useState } from "react";

const storageKey = "adzi-portfolio-theme";

function getStoredTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.localStorage.getItem(storageKey) || "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme,
  };
}
