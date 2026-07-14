import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import FadeIn from "./ui/FadeIn";
import { portfolio } from "@/lib/data";

export default function Certifications() {
  const { certifications } = portfolio;

  return (
    <section id="certification" className="border-b border-ink-700">
      <div className="section-shell py-20 sm:py-28">
        <SectionHeader index="04" label="Certification" title="Certifications" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <FadeIn
              key={cert.id}
              delay={i * 0.07}
              className="card-lift flex h-full flex-col overflow-hidden rounded-sm border border-ink-600 bg-ink-900"
            >
              <div className="relative aspect-[16/10] w-full border-b border-ink-700 bg-ink-800">
                <Image
                  src={cert.image}
                  alt={`${cert.name} certificate preview`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-contain p-3"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs uppercase text-signal-dim">
                  {cert.organization}
                </p>
                <h3 className="mt-2 text-base font-medium leading-snug">
                  {cert.name}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase text-mist">
                  {cert.issueDate}
                </p>


                <ul className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-sm border border-ink-600 px-2.5 py-1 font-mono text-[10px] uppercase leading-relaxed text-mist"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 font-mono text-xs uppercase text-signal transition-colors hover:text-signal-soft"
                  >
                    View Credential
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
