import { Languages } from "lucide-react";

function LanguageToggle({ label, title, onToggle }) {
  return (
    <button type="button" className="theme-toggle language-toggle" onClick={onToggle} aria-label={title} title={title}>
      <Languages size={16} strokeWidth={2} />
      <span>{label}</span>
    </button>
  );
}

export default LanguageToggle;
