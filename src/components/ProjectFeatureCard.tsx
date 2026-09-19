import Link from "next/link";
import Image from "next/image";

type ProjectFeatureCardProps = {
  project: {
    title: string;
    repoLink: string | null;
    briefDescription: string;
    languages: string[];
    technologies: string[];
    concepts: string[];
    media: {
      src: string;
      alt: string;
    }[];
  };
};

export default function ProjectFeatureCard({
  project,
}: ProjectFeatureCardProps) {
  return (
    <article className="flex w-full flex-col rounded-lg border-3 border-orange-700 bg-orange-100/50 p-4 shadow-lg">
      <header className="mb-2 border-b-2 border-orange-700">
        <h2 className="text-lg font-bold">
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
      </header>

      <Image
        className="mx-auto aspect-[14/9] w-3/4 rounded-lg border-3 border-orange-700 object-cover"
        src={project.media[0].src}
        alt={project.media[0].alt}
        width={600}
        height={300}
        loading="eager"
      />

      <p className="mt-4 text-lg">{project.briefDescription}</p>

      <div className="mt-auto space-y-1 pt-2 text-md">
        <p>
          <span className="font-bold">Languages:</span>{" "}
          {project.languages.join(" • ")}
        </p>

        <p>
          <span className="font-bold">Technologies:</span>{" "}
          {project.technologies.join(" • ")}
        </p>

        <p>
          <span className="font-bold">Concepts:</span>{" "}
          {project.concepts.join(" • ")}
        </p>
      </div>
    </article>
  );
}
