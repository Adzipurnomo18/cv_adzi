import SectionTitle from "./SectionTitle";

function ProfessionalSummarySection({ summary }) {
  return (
    <section id="summary" data-reveal className="theme-section border-b py-16 md:py-20">
      <SectionTitle
        label={summary.label}
        title={summary.title}
        description={summary.description}
      />
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="theme-border-accent border-l-2 pl-5">
          <p className="theme-faint text-sm font-semibold tracking-[0.12em] uppercase">{summary.principlesLabel}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {summary.principles.map((principle) => (
              <p key={principle} className="theme-divider theme-soft border-b pb-3 text-sm font-medium">
                {principle}
              </p>
            ))}
          </div>
        </div>

        <div className="theme-soft space-y-4 text-sm leading-relaxed md:text-base">
          {summary.paragraphs.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalSummarySection;
