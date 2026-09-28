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
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {projectsToShow.map((project) => (
          <ProjectFeatureCard key={project.title} project={project} />
        ))}
      </div>
    );
  }

  return (
    <div className="site-scrollbar flex w-full flex-col gap-2 2xl:max-h-200 2xl:overflow-y-auto 2xl:pr-2">
      {projectsToShow.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
