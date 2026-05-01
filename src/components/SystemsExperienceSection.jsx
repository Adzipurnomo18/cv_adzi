import SectionTitle from "./SectionTitle";

function SystemsExperienceSection({ systems }) {
  return (
    <section id="systems" data-reveal className="theme-section border-b py-16 md:py-20">
      <SectionTitle
        label={systems.label}
        title={systems.title}
        description={systems.description}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {systems.items.map((system) => (
          <article key={system.name} className="theme-panel rounded-md border p-6">
            <h3 className="theme-heading text-lg font-semibold">{system.name}</h3>
            <p className="theme-muted mt-2 text-sm font-medium">{system.focus}</p>
            <ul className="theme-soft mt-4 space-y-2 text-sm leading-relaxed">
              {system.responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="theme-dot mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SystemsExperienceSection;
