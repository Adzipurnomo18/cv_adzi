import SectionTitle from "./SectionTitle";

function TechnicalSkillsSection({ skills }) {
  return (
    <section id="skills" data-reveal className="theme-section border-b py-16 md:py-20">
      <SectionTitle
        label={skills.label}
        title={skills.title}
        description={skills.description}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.items.map((skillGroup) => (
          <article key={skillGroup.group} className="theme-panel rounded-md border p-5">
            <h3 className="theme-soft text-sm font-semibold tracking-[0.08em] uppercase">{skillGroup.group}</h3>
            <ul className="mt-3 space-y-2">
              {skillGroup.items.map((item) => (
                <li key={item} className="theme-muted text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechnicalSkillsSection;
