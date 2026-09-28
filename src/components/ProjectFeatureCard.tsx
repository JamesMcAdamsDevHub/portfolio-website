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
    <article className="flex h-full w-full flex-col bg-transparent px-5 py-4">
      <header className="mb-2 border-b-2 border-orange-700">
        <h2 className="text-lg font-bold">
          {project.title}

          {project.repoLink !== null && (
            <Link
              href={project.repoLink}
              className="ml-2 text-xs font-normal text-black/70 hover:text-blue-600"
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

      <p className="mt-3">{project.briefDescription}</p>

      <div className="mt-auto space-y-0.5 pt-3 text-sm text-black/75">
        <p>
          <span className="font-semibold text-black">Languages:</span>{" "}
          {project.languages.join(" • ")}
        </p>

        <p>
          <span className="font-semibold text-black">Technologies:</span>{" "}
          {project.technologies.join(" • ")}
        </p>

        <p>
          <span className="font-semibold text-black">Concepts:</span>{" "}
          {project.concepts.join(" • ")}
        </p>
      </div>
    </article>
  );
}
