import Image from "next/image";
import { Github } from "lucide-react";
import Button from "./ui/Button";
import FadeIn from "./ui/FadeIn";
import { Project } from "@/lib/types";

export default function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <FadeIn className="card-lift group relative overflow-hidden rounded-sm border border-ink-600 bg-ink-900">
      {/* Full-width Landscape Image */}
      <div className="relative h-[220px] w-full overflow-hidden border-b border-ink-700 bg-ink-950 sm:h-[320px] md:h-[380px]">
        <Image
          src={project.image}
          alt={`${project.name} preview screenshot`}
          fill
          sizes="100vw"
          className="object-contain transition-transform duration-500 ease-smooth group-hover:scale-[1.01]"
          priority
        />
      </div>

      {/* Below the image: two-column layout */}
      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10">
          {/* LEFT: Project description */}
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-3">
              {project.logo && (
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm border border-ink-600 bg-ink-800">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    fill
                    sizes="40px"
                    className="object-contain p-1.5"
                  />
                </div>
              )}
              <h3 className="text-xl font-medium sm:text-2xl">
                {project.name}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-paper-200">
              {project.summary}
            </p>
          </div>

          {/* RIGHT: Category, Technologies, Feature Tags, Buttons */}
          <div className="flex flex-col justify-start space-y-4">
            {/* Category & Technologies */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="eyebrow">Category</p>
                <p className="mt-1 font-mono text-[11px] uppercase text-mist">
                  {project.category}
                </p>
              </div>

              <div>
                <p className="eyebrow">Technologies</p>
                <p className="mt-1 font-mono text-[11px] uppercase text-mist">
                  {project.tech.join(" / ")}
                </p>
              </div>
            </div>

            {/* Feature Tags */}
            <div>
              <p className="eyebrow">Feature Tags</p>
              <ul className="mt-1.5 flex flex-wrap gap-1.5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-sm border border-signal-dim/40 px-2 py-0.5 font-mono text-[10px] leading-relaxed text-signal"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
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
        </div>
      </div>
    </FadeIn>
  );
}
