import SectionHeader from "./ui/SectionHeader";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";
import { portfolio } from "@/lib/data";

export default function Projects() {
  const { projects } = portfolio;
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-b border-ink-700">
      <div className="section-shell py-20 sm:py-28">
        <SectionHeader
          index="03"
          label="Projects"
          title="Selected work"
          description="Three projects, chosen for depth over breadth."
        />

        <div className="flex flex-col gap-8">
          {featured && <FeaturedProjectCard project={featured} />}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
