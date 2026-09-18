"use client";

import { useState } from "react";

type ContactItem = {
  title: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contacts: ContactItem[] = [
  {
    title: "Email",
    value: "gyenisofiaa@gmail.com",
    href: "mailto:gyenisofiaa@gmail.com",
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
    title: "WhatsApp",
    value: "082286764277",
    href: "https://wa.me/6282286764277",
    external: true,
  },
];

function ContactCard({
  contact,
  onWhatsAppClick,
}: {
  contact: ContactItem;
  onWhatsAppClick: () => void;
}) {
  const content = (
    <>
      <h3 className="text-lg font-semibold text-gray-900">
        {contact.title}
      </h3>

      <p className="mt-2 text-gray-600">{contact.value}</p>
    </>
  );

  // WhatsApp membuka dialog Contact Form
  if (contact.title === "WhatsApp") {
    return (
      <button
        type="button"
        onClick={onWhatsAppClick}
        className="rounded-xl border border-gray-200 bg-white p-6 text-left transition hover:bg-gray-50"
      >
        {content}
      </button>
    );
  }

  // Contact lainnya tetap menggunakan link
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
  const [isOpen, setIsOpen] = useState(false);

  // Mengirim data form ke WhatsApp
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const project = formData.get("project");

    const message = `Halo, saya ${name}.

${project}`;

    const whatsappUrl = `https://wa.me/6282286764277?text=${encodeURIComponent(
      message
    )}`;

    // Membuka WhatsApp di browser baru
    window.open(whatsappUrl, "_blank");

    // Menutup dialog
    setIsOpen(false);
  };

  return (
    <section id="contact" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">

        {/* Header */}
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
            <ContactCard
              key={contact.title}
              contact={contact}
              onWhatsAppClick={() => setIsOpen(true)}
            />
          ))}
        </div>
      </div>

      {/* Dialog Contact Form */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">

          <div className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-xl md:p-10">

            {/* Contact Form */}
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Enter your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Describe your project
                </label>

                <textarea
                  id="project"
                  name="project"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gray-900"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
                >
                  Send Message
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </section>
  );
}