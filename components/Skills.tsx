import SectionHeader from "./ui/SectionHeader";
import FadeIn from "./ui/FadeIn";
import { cn } from "@/lib/cn";
import { portfolio } from "@/lib/data";

export default function Skills() {
  const { highlightedSkills, skills } = portfolio;

  const isHighlighted = (skill: string) =>
    highlightedSkills.some(
      (highlight) =>
        skill === highlight ||
        skill.includes(highlight) ||
        highlight.includes(skill)
    );

  return (
    <section id="skills" className="border-b border-ink-700">
      <div className="section-shell py-20 sm:py-28">
        <SectionHeader
          index="02"
          label="Skills"
          title="Technical skills"
          description="Grouped by category and shown without scores, percentages, or rankings."
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] items-start gap-5">
          {skills.map((group, i) => (
            <FadeIn
              key={group.category}
              delay={i * 0.05}
              className="rounded-sm border border-ink-600 bg-ink-900 p-6"
            >
              <p className="font-mono text-xs uppercase text-signal-dim">
                {group.category}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className={cn(
                      "rounded-sm border px-3 py-1.5 text-xs leading-relaxed transition-colors",
                      isHighlighted(skill)
                        ? "border-signal-dim/70 bg-signal/10 text-signal"
                        : "border-ink-600 text-paper-200"
                    )}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
