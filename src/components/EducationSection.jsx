import SectionTitle from "./SectionTitle";

function EducationSection({ education }) {
  return (
    <section id="education" data-reveal className="theme-section border-b py-16 md:py-20">
      <SectionTitle label={education.label} title={education.title} description={education.description} />
      <div className="grid gap-5 md:grid-cols-2">
        {education.items.map((item) => (
          <article key={`${item.degree}-${item.institution}`} className="theme-panel rounded-md border p-6">
            <p className="theme-faint text-xs font-semibold tracking-[0.1em] uppercase">{item.period}</p>
            <h3 className="theme-heading mt-3 text-lg font-semibold">{item.degree}</h3>
            <p className="theme-soft mt-2 text-sm font-medium">{item.institution}</p>
            <p className="theme-muted mt-3 text-sm">{item.meta}</p>
            <ul className="theme-soft mt-4 space-y-2 text-sm leading-relaxed">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="theme-dot mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
