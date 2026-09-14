import ProjectCard from "@/components/ProjectCard";
import projects from "@/content/projects.json";

type ProjectCardsProps = {
  featuredOnly: boolean;
};

export default function ProjectCards({ featuredOnly }: ProjectCardsProps) {
  const projectsToShow = featuredOnly
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <div className="flex w-full flex-col gap-6">
      {projectsToShow.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
