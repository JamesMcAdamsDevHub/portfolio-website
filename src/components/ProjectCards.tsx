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
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {projectsToShow.map((project) => (
          <ProjectFeatureCard key={project.title} project={project} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      {projectsToShow.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
