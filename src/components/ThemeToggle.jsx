import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

function ThemeToggle({ labels }) {
  const { isDark, toggleTheme } = useTheme();
  const accessibleLabel = isDark ? labels.switchToLight : labels.switchToDark;

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={accessibleLabel} title={accessibleLabel}>
      {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
      <span>{isDark ? labels.light : labels.dark}</span>
    </button>
  );
}

export default ThemeToggle;
