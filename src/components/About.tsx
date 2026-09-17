"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const profileImage = "/images/gyenisa-cutoff.png";
const skills = ["HTML & CSS", "JavaScript", "React.js", "Node.js", "Tailwind CSS", "Next.js"];

const slideLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8 },
};

const slideRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, delay: 0.2 },
};

function ProfileImage({
  variant = "circle",
  src = profileImage,
}: {
  variant?: "circle" | "rectangle";
  src?: string;
}) {
  if (variant === "circle") {
    return (
      <div className="flex h-96 w-96 items-end justify-center overflow-hidden rounded-full bg-[#eef1f5]">
        <Image
          src={src}
          alt="Gyenisa Syofia"
          width={500}
          height={500}
          className="h-auto w-[125%] object-contain"
        />
      </div>
    );
  }

  return (
    <div className="relative h-[350px] w-full max-w-[450px] overflow-hidden rounded-2xl bg-[#eef1f5]">
      <Image
        src={src}
        alt="Gyenisa Syofia"
        width={500}
        height={500}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
      {children}
    </p>
  );
}

export default function About() {
  return (
    <section id="about">
      {/* ==================== ABOUT ME ==================== */}
      <div className="min-h-screen border-t bg-gray-50 flex items-center">
        <div className="mx-auto flex w-full max-w-6xl items-center px-6 py-24">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            <motion.div {...slideLeft}>
              <SectionLabel>Nice to meet you,</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                I&apos;m Gyenisa Syofia
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Saya adalah lulusan Teknik Informatika yang memiliki
                ketertarikan pada dunia pemrograman, teknologi, dan pengolahan
                data.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
                Saya senang mempelajari teknologi baru dan mengembangkan solusi
                digital yang dapat membantu menyelesaikan berbagai permasalahan
                secara efektif dan praktis.
              </p>
            </motion.div>

            <motion.div className="flex justify-center lg:justify-end" {...slideRight}>
              <ProfileImage variant="circle" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ==================== MY STORY 1 ==================== */}
      <div className="min-h-screen bg-white flex items-center">
        <div className="mx-auto flex w-full max-w-6xl items-center px-6 py-24">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            <motion.div className="flex justify-center" {...slideLeft}>
              <ProfileImage variant="rectangle" src="/images/mystory-1.png" />
            </motion.div>

            <motion.div {...slideRight}>
              <SectionLabel>My Story</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                How I Started as a Web Developer
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ketertarikan saya pada dunia web development dimulai dari
                keingintahuan untuk memahami bagaimana sebuah website dapat
                dibangun dan digunakan oleh banyak orang.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Dari sana, saya mulai mempelajari HTML, CSS, JavaScript, hingga
                framework modern seperti React dan Next.js. Setiap project
                menjadi kesempatan bagi saya untuk belajar dan berkembang.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ==================== MY SKILLS SECTION ==================== */}
      <div className="overflow-hidden border-t bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Skills</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              My Skills
            </h2>
            <p className="mt-3 max-w-xl text-lg text-gray-600">
              Beberapa teknologi yang saya gunakan dalam proses belajar dan membangun project.
            </p>
          </motion.div>

          <div className="mt-12 overflow-hidden">
            <motion.div
              className="flex w-max gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill}-${index}`}
                  className="flex h-32 w-56 items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-900">{skill}</h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}