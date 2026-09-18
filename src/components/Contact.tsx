type ContactItem = {
  title: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contacts: ContactItem[] = [
  {
    title: "Email",
    value: "gyenisasyofiaa@gmail.com",
    href: "mailto:gyenisasyofiaa@gmail.com",
  },
  {
    title: "GitHub",
    value: "github.com/gyenisasyofiaa",
    href: "https://github.com/gyenisasyofiaa",
    external: true,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/gyenisa-syofia",
    href: "https://www.linkedin.com/in/gyenisa-syofia",
    external: true,
  },
  {
    title: "Location",
    value: "Indonesia",
  },
];

function ContactCard({ contact }: { contact: ContactItem }) {
  const content = (
    <>
      <h3 className="text-lg font-semibold text-gray-900">{contact.title}</h3>
      <p className="mt-2 text-gray-600">{contact.value}</p>
    </>
  );

  if (!contact.href) {
    return <div className="rounded-xl border border-gray-200 bg-white p-6">{content}</div>;
  }

  return (
    <a
      href={contact.href}
      target={contact.external ? "_blank" : undefined}
      rel={contact.external ? "noopener noreferrer" : undefined}
      className="rounded-xl border border-gray-200 bg-white p-6 transition hover:bg-gray-50"
    >
      {content}
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mari Terhubung
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Jika ingin berdiskusi, berkolaborasi, atau mengetahui lebih lanjut
            tentang saya dan project yang saya kerjakan, silakan hubungi saya.
          </p>
        </div>

        {/* Info Grid */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {contacts.map((contact) => (
            <ContactCard key={contact.title} contact={contact} />
          ))}
        </div>

        {/* Contact Form */}
        <form className="mx-auto mt-16 max-w-3xl space-y-6 rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm md:p-10">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
              Enter your name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gray-900"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
              Enter your email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gray-900"
            />
          </div>

          <div>
            <label htmlFor="project" className="mb-2 block text-sm font-medium text-gray-900">
              Describe your project
            </label>
            <textarea
              id="project"
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gray-900"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}