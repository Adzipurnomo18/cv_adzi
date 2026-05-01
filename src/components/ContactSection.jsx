import SectionTitle from "./SectionTitle";

function ContactSection({ contact }) {
  return (
    <section id="contact" data-reveal className="py-16 md:py-20">
      <SectionTitle
        label={contact.label}
        title={contact.title}
        description={contact.description}
      />

      <div className="theme-panel grid gap-5 rounded-md border p-6 md:grid-cols-2">
        <div>
          <p className="theme-faint text-xs font-semibold tracking-[0.1em] uppercase">{contact.fields.location}</p>
          <p className="theme-soft mt-2 text-sm">{contact.location}</p>
        </div>
        <div>
          <p className="theme-faint text-xs font-semibold tracking-[0.1em] uppercase">{contact.fields.email}</p>
          <a className="theme-soft mt-2 block text-sm transition-opacity duration-200 hover:opacity-75" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
        <div>
          <p className="theme-faint text-xs font-semibold tracking-[0.1em] uppercase">{contact.fields.phone}</p>
          <a className="theme-soft mt-2 block text-sm transition-opacity duration-200 hover:opacity-75" href={`https://wa.me/62${contact.phone.slice(1)}`}>
            {contact.phone}
          </a>
        </div>
        <div>
          <p className="theme-faint text-xs font-semibold tracking-[0.1em] uppercase">{contact.fields.availability}</p>
          <p className="theme-soft mt-2 text-sm leading-relaxed">{contact.note}</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
