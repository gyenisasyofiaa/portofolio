"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
    <section
      id="home"
      className="flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">

          {/* KIRI - TEKS */}
          <motion.div
            className="lg:col-span-1"
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

          {/* KANAN - FOTO */}
          <motion.div
            className="flex items-end justify-center lg:col-span-1"
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
              className="h-auto w-full max-w-[550px] object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}