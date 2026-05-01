import SectionTitle from "./SectionTitle";

function ProjectsSection({ projects }) {
  return (
    <section id="projects" data-reveal className="theme-section border-b py-16 md:py-20">
      <SectionTitle
        label={projects.label}
        title={projects.title}
        description={projects.description}
      />

      <div className="theme-panel theme-divide rounded-md border">
        {projects.items.map((project) => (
          <article key={project.title} className="theme-divider p-6 md:p-7">
            <p className="theme-faint text-xs font-semibold tracking-[0.1em] uppercase">{project.context}</p>
            <h3 className="theme-heading mt-2 text-lg font-semibold">{project.title}</h3>
            <p className="theme-soft mt-3 text-sm leading-relaxed">{project.summary}</p>
            <p className="theme-muted mt-3 text-sm">
              <span className="theme-soft font-medium">{projects.stackLabel}:</span> {project.stack.join(", ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
