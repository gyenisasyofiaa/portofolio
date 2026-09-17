import Image from "next/image";

type Project = {
  title: string;
  description: string;
  technologies: string;
  image: string;
  liveDemo: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "MiniPOS",
    description: "Aplikasi kasir sederhana untuk mengelola produk dan transaksi.",
    technologies: "Next.js · React · TypeScript · Tailwind CSS",
    image: "/images/portofolio-3.png",
    liveDemo: "https://URL-PROJECT-KAMU.vercel.app",
    github: "#",
  },
  {
    title: "Calculator",
    description: "Aplikasi kalkulator berbasis web untuk mempraktikkan logika pemrograman.",
    technologies: "Next.js · React · TypeScript · Tailwind CSS",
    image: "/images/portofolio-4.png",
    liveDemo: "https://URL-PROJECT-KAMU.vercel.app",
    github: "#",
  },
  {
    title: "JavaScript DOM Project",
    description: "Website pencatatan keuangan berbasis JavaScript yang mengimplementasikan DOM Manipulation, CRUD transaksi, dan localStorage.",
    technologies: "HTML · CSS · JavaScript",
    image: "/images/portofolio-1.png",
    liveDemo: "https://expense-tracker-starter-project.vercel.app/",
    github: "https://github.com/gyenisasyofiaa/expense-tracker-starter-project",
  },
  {
    title: "React Project",
    description: "Mengembangkan aplikasi catatan berbasis React yang mendukung penambahan, penghapusan, pencarian, dan pengelolaan catatan berbasis state.",
    technologies: "React · JavaScript · HTML · CSS",
    image: "/images/portofolio-2.png",
    liveDemo: "https://my-personal-notes-zeta.vercel.app/",
    github: "https://github.com/gyenisasyofiaa/my-personal-notes",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative flex h-56 items-center justify-center bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-3 leading-7 text-gray-600">{project.description}</p>
        <p className="mt-4 text-sm font-medium text-gray-500">{project.technologies}</p>

        <div className="mt-6 flex gap-3">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Project Saya
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Beberapa project yang saya kerjakan selama mempelajari pemrograman dan pengembangan aplikasi.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}