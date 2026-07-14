import SectionHeader from "./ui/SectionHeader";
import FadeIn from "./ui/FadeIn";
import { portfolio } from "@/lib/data";

export default function About() {
  const { about } = portfolio;

  return (
    <section id="about" className="border-b border-ink-700">
      <div className="section-shell py-20 sm:py-28">
        <SectionHeader index="01" label="About" title="A short introduction" />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn delay={0.1} className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-paper-200 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </FadeIn>

          <div className="grid gap-5">
            <FadeIn
              delay={0.16}
              className="rounded-sm border border-ink-600 bg-ink-900 p-6"
            >
              <p className="eyebrow">Career Objective</p>
              <p className="mt-4 text-sm leading-relaxed text-paper-200 sm:text-base">
                {about.careerObjective}
              </p>
            </FadeIn>

            <FadeIn
              delay={0.22}
              className="rounded-sm border border-ink-600 bg-ink-900 p-6"
            >
              <p className="eyebrow">Areas of Interest</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-sm border border-ink-600 px-3 py-1.5 text-xs text-paper-200"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </FadeIn>


          </div>
        </div>
      </div>
    </section>
  );
}
