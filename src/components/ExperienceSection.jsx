import SectionTitle from "./SectionTitle";

function ExperienceSection({ experience }) {
  const [currentRole, previousRole] = experience.items;

  return (
    <section id="experience" data-reveal className="theme-section border-b py-16 md:py-20">
      <SectionTitle
        label={experience.label}
        title={experience.title}
        description={experience.description}
      />

      <article className="theme-panel-strong border p-6 md:p-8">
        <div className="theme-divider flex flex-col gap-2 border-b pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="theme-positive mb-2 text-xs font-semibold tracking-[0.12em] uppercase">{experience.currentBadge}</p>
            <h3 className="theme-heading text-xl font-bold">{currentRole.company}</h3>
            <p className="theme-soft mt-1 text-base font-medium">{currentRole.role}</p>
          </div>
          <p className="theme-secondary-button w-fit px-3 py-1 text-sm font-medium">{currentRole.period}</p>
        </div>

        <p className="theme-soft mt-5 text-sm leading-relaxed md:text-base">{currentRole.summary}</p>
        <ul className="theme-soft mt-6 grid gap-3 text-sm leading-relaxed md:grid-cols-2 md:text-base">
          {currentRole.highlights.map((item) => (
            <li key={item} className="theme-divider flex gap-3 border-t pt-3">
              <span className="theme-bg-accent mt-2 h-1.5 w-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="theme-divider mt-8 border-l-2 pl-5 md:pl-6">
        <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="theme-heading text-lg font-semibold">{previousRole.company}</h3>
            <p className="theme-muted mt-1 text-sm font-medium">{previousRole.role}</p>
          </div>
          <p className="theme-faint text-sm">{previousRole.period}</p>
        </div>

        <p className="theme-soft mt-4 text-sm leading-relaxed">{previousRole.summary}</p>
        <ul className="theme-muted mt-4 space-y-2 text-sm leading-relaxed">
          {previousRole.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="theme-dot mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="theme-soft mt-4 text-sm leading-relaxed">{previousRole.transition}</p>
      </article>
    </section>
  );
}

export default ExperienceSection;
