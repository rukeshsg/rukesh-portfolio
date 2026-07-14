import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import FadeIn from "./ui/FadeIn";
import { portfolio } from "@/lib/data";

export default function Education() {
  const { education } = portfolio;

  return (
    <section id="education" className="border-b border-ink-700">
      <div className="section-shell py-20 sm:py-28">
        <SectionHeader index="06" label="Education" title="Education" />

        <div className="relative flex flex-col gap-8">
          <div
            aria-hidden="true"
            className="absolute bottom-3 left-[27px] top-3 hidden w-px bg-ink-700 sm:block"
          />

          {education.map((edu, i) => (
            <FadeIn key={edu.id} delay={i * 0.08} className="relative flex gap-5">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink-600 bg-ink-950">
                <div className="relative h-9 w-9">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 rounded-sm border border-ink-600 bg-ink-900 p-5 sm:p-6">
                <p className="eyebrow">{edu.level}</p>
                <h3 className="mt-2 text-lg font-medium leading-snug sm:text-xl">
                  {edu.institution}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-200">
                  {edu.degree}
                </p>
                <p className="text-sm leading-relaxed text-mist">
                  {edu.department}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase text-mist">
                  <span>{edu.duration}</span>
                  <span className="text-signal">{edu.score}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
