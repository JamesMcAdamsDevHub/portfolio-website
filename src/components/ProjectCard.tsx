import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

type ProjectCardProps = {
  project: {
    title: string;
    repoLink: string | null;
    description: string;
    languages: string[];
    technologies: string[];
    concepts: string[];
    startDate: string;
    media: {
      src: string;
      alt: string;
    }[];
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="w-full bg-transparent py-1">
      <header className="border-b-2 border-orange-700 pb-1 md:flex md:justify-between">
        <h2 className="text-xl font-bold lg:text-2xl">
          {project.title}

          {project.repoLink !== null && (
            <Link
              href={project.repoLink}
              className="ml-2 text-sm font-normal hover:text-blue-600"
            >
              GitHub ↗
            </Link>
          )}
        </h2>

        <p className="text-xs font-bold md:text-base">{project.startDate}</p>
      </header>

      <div className="mt-2 grid items-start gap-6 lg:grid-cols-[3fr_2fr]">
        <div>
          <p>{project.description}</p>

          <div className="mt-3">
            <p className="py-1">
              <span className="font-bold">Languages:</span>{" "}
              {project.languages.join(" • ")}
            </p>

            <p className="py-1">
              <span className="font-bold">Technologies:</span>{" "}
              {project.technologies.join(" • ")}
            </p>

            <p className="py-1">
              <span className="font-bold">Concepts:</span>{" "}
              {project.concepts.join(" • ")}
            </p>
          </div>
        </div>

        <ImageGallery imageSrcList={project.media} />
      </div>
    </article>
  );
}
