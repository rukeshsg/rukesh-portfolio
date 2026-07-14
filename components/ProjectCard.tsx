import Image from "next/image";
import { Github } from "lucide-react";
import Button from "./ui/Button";
import FadeIn from "./ui/FadeIn";
import { Project } from "@/lib/types";

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <FadeIn
      delay={delay}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-sm border border-ink-600 bg-ink-900"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-ink-700">
        <Image
          src={project.image}
          alt={`${project.name} preview screenshot`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start gap-3">
          {project.logo && (
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm border border-ink-600 bg-ink-800">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                fill
                sizes="40px"
                className="object-contain p-2"
              />
            </div>
          )}
          <div>
            <p className="font-mono text-xs uppercase text-signal-dim">
              {project.category}
            </p>
            <h3 className="mt-2 text-xl font-medium leading-snug">
              {project.name}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-paper-200">
          {project.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.highlights.slice(0, 4).map((highlight) => (
            <li
              key={highlight}
              className="rounded-sm border border-ink-600 px-2.5 py-1 font-mono text-[10px] uppercase leading-relaxed text-mist"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <p className="mt-5 font-mono text-[11px] uppercase leading-relaxed text-mist">
          {project.tech.join(" / ")}
        </p>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="primary" size="sm" external icon>
              Live Demo
            </Button>
          )}
          <Button href={project.githubUrl} variant="ghost" size="sm" external>
            <Github size={13} />
            GitHub
          </Button>
        </div>
      </div>
    </FadeIn>
  );
}
