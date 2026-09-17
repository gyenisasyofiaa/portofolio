"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Tailwind CSS",
  "Next.js",
];

export default function Hero() {
  return (
    <section id="home" className="flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid items-center gap-4 lg:grid-cols-12">
          {/* KIRI */}
          <motion.div 
            className="relative z-10 lg:col-span-4 lg:-mr-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Gyenisa Syofia, a
            </h1>

            <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Web Developer
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-gray-600">
              I am an Informatics student passionate about programming, data
              analytics, and building useful digital solutions.
            </p>
          </motion.div>

          {/* FOTO */}
          <motion.div 
            className="relative z-0 flex items-end justify-center lg:col-span-4 lg:-mx-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/gyenisa-cutoff.png"
              alt="Gyenisa Syofia"
              width={700}
              height={700}
              priority
              className="h-auto w-[145%] max-w-none object-contain"
            />
          </motion.div>

          {/* KANAN */}
          <motion.div 
            className="relative z-10 lg:col-span-4 lg:pl-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
              About me
            </h3>

            <p className="mt-1 max-w-md text-lg leading-8 text-gray-600">
              Saya adalah Lulusan Teknik Informatika yang memiliki
              ketertarikan pada dunia pemrograman, teknologi, dan pengolahan
              data.
            </p>

            <Link
              href="#about"
              className="group mt-4 inline-flex items-center gap-2 font-medium text-gray-900 transition hover:text-gray-500"
            >
              Learn More
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              My Work
            </h3>

            <p className="mt-3 max-w-md text-lg leading-8 text-gray-600">
              Saya memiliki project mandiri yang dikerjakan selama ini,
              sehingga project yang telah selesai ini saya tampilkan di sini.
              Silahkan berkunjung ke project saya.
            </p>

            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="#portfolio"
                className="group inline-flex items-center gap-2 font-medium text-gray-900 transition hover:text-gray-500"
              >
                View My Portfolio
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 font-medium text-gray-900 transition hover:text-gray-500"
              >
                Contact Me
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}