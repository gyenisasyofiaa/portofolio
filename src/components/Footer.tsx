import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type NavigationItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/#contact" },
];

const contact = {
  email: "gyenisasyofiaa@gmail.com",
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Profile */}
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-end justify-center overflow-hidden rounded-full bg-[#eef1f5]">
              <Image
                src="/images/gyenisa-cutoff.png"
                alt="Gyenisa Syofia"
                width={80}
                height={80}
                className="h-auto w-[115%] object-contain"
              />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Gyenisa Syofia</h2>
              <p className="mt-1 text-sm text-gray-500">Web Developer</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:text-right">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 text-xl font-semibold text-gray-900"
            >
              Get in touch
              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
            <div className="mt-2 text-sm text-gray-500">
              <a href={`mailto:${contact.email}`} className="block transition hover:text-gray-900">
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="my-6 border-t border-gray-200" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-500 transition hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Gyenisa Syofia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}