function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-8">
      <p className="theme-label text-xs font-semibold tracking-[0.18em] uppercase">{label}</p>
      <h2 className="theme-heading mt-2 text-2xl font-bold md:text-3xl">{title}</h2>
      {description && <p className="theme-muted mt-3 max-w-3xl text-sm leading-relaxed">{description}</p>}
    </div>
  );
}

export default SectionTitle;
