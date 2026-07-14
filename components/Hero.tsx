"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { portfolio } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { profile } = portfolio;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center border-b border-ink-700 pt-16"
    >
      <div className="section-shell w-full py-16 sm:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.p variants={item} className="eyebrow">
            {"// hello, i'm"}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-display text-xl italic text-signal sm:text-2xl"
          >
            {profile.title}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex flex-col gap-2 justify-center font-mono text-xs uppercase text-mist sm:flex-row sm:items-center sm:gap-3"
          >
            <span>{profile.degree}</span>
            <span className="hidden text-ink-600 sm:inline">/</span>
            <span>{profile.department}</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-base leading-relaxed text-paper-200 sm:text-lg"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="#projects" variant="primary" icon>
              View Projects
            </Button>
            <Button href={profile.resumeUrl} variant="ghost" external download>
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
