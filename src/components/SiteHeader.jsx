import BrandLogo from "./BrandLogo";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

function SiteHeader({ navItems, controls, onLanguageToggle }) {
  return (
    <header className="theme-header sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="theme-heading flex items-center gap-3 text-sm font-semibold tracking-[0.08em] uppercase">
          <BrandLogo wrapperClassName="h-8 w-8" className="h-7 w-7 object-contain" />
          <span>Adzi Purnomo</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="theme-muted text-sm transition-colors duration-200 hover:opacity-80"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle label={controls.language} title={controls.switchLanguage} onToggle={onLanguageToggle} />
          <ThemeToggle labels={controls} />
          <a href="#contact" className="theme-secondary-button hidden px-3 py-2 text-xs font-semibold md:inline-flex">
            {controls.contact}
          </a>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
