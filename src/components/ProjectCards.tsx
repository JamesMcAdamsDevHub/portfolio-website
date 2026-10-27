import ProjectCard from "@/components/ProjectCard";
import ProjectFeatureCard from "@/components/ProjectFeatureCard";
import projects from "@/content/projects.json";

type ProjectCardsProps = {
  featuredOnly: boolean;
};

export default function ProjectCards({ featuredOnly }: ProjectCardsProps) {
  const projectsToShow = featuredOnly
    ? projects.filter((project) => project.featured)
    : projects;

  if (featuredOnly) {
    return (
      <div className="grid grid-cols-1 gap-3 2xl:gap-2">
        {projectsToShow.map((project) => (
          <ProjectFeatureCard key={project.title} project={project} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-6 p-2 [scrollbar-width:thin] 2xl:min-h-0 2xl:flex-1 2xl:overflow-y-auto 2xl:[contain:paint]"
      role="region"
      aria-label="Projects"
      tabIndex={0}
    >
      {projectsToShow.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
