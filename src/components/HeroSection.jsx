import BrandLogo from "./BrandLogo";

function HeroSection({ hero }) {
  return (
    <section id="home" data-reveal className="theme-section border-b py-14 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="theme-label text-sm font-semibold tracking-[0.16em] uppercase">{hero.eyebrow}</p>
          <h1 className="theme-heading mt-4 max-w-3xl text-4xl font-extrabold md:text-6xl">{hero.name}</h1>
          <p className="theme-soft mt-4 text-xl font-semibold">{hero.role}</p>
          <p className="theme-soft mt-6 max-w-3xl text-base leading-8 md:text-lg">{hero.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="theme-primary-button px-4 py-2 text-sm font-semibold"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="theme-secondary-button px-4 py-2 text-sm font-semibold"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <aside className="theme-panel border p-5">
          <div className="theme-divider flex items-center gap-4 border-b pb-5">
            <div className="theme-logo-box grid h-12 w-12 shrink-0 place-items-center border p-2">
              <BrandLogo alt="Adzi Purnomo logo" wrapperClassName="h-full w-full" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="theme-faint text-xs font-semibold tracking-[0.12em] uppercase">{hero.operationalScopeLabel}</p>
              <p className="theme-heading mt-1 text-sm font-semibold">{hero.operationalScopeValue}</p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {hero.focusAreas.map((area) => (
              <div key={area} className="theme-divider flex items-center justify-between gap-4 border-b pb-3 last:border-b-0">
                <span className="theme-soft text-sm">{area}</span>
                <span className="theme-dot h-2 w-2" aria-hidden="true" />
              </div>
            ))}
          </div>

          <div className="theme-divider mt-6 border-t pt-5">
            <p className="theme-faint text-xs font-semibold tracking-[0.12em] uppercase">{hero.primaryResponsibilityLabel}</p>
            <p className="theme-soft mt-2 text-sm leading-6">
              {hero.primaryResponsibility}
            </p>
          </div>
        </aside>
      </div>

      <div className="theme-divider grid border-t sm:grid-cols-2 lg:grid-cols-4">
        {hero.metrics.map((metric) => (
          <div key={metric.label} className="theme-divider border-b py-5 sm:border-r lg:border-b-0 lg:px-6 first:lg:pl-0 last:border-r-0">
            <p className="theme-heading text-2xl font-bold">{metric.value}</p>
            <p className="theme-muted mt-1 text-sm">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
