import Link from "next/link";
import Image from "next/image";

type ProjectFeatureCardProps = {
  project: {
    title: string;
    repoLink?: string;
    playLink?: string;
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

          {project.repoLink && (
            <Link
              href={project.repoLink}
              className="ml-2 text-xs font-normal text-black/70 hover:text-blue-600"
            >
              GitHub <span aria-hidden="true">↗</span>
            </Link>
          )}
        </h2>
      </header>

      <div className="relative mx-auto w-3/4">
        <Image
          className="aspect-[14/9] rounded-lg border-3 border-orange-700 object-cover object-center"
          src={project.media[0].src}
          alt={project.media[0].alt}
          width={600}
          height={300}
          loading="eager"
        />

        {project.playLink && (
          <Link
            href={project.playLink}
            className="absolute inset-0 flex items-center justify-center rounded-lg hover:bg-black/20"
            aria-label={`Play ${project.title}`}
          >
            <span className="rounded-lg bg-orange-700/80 px-5 py-3 text-lg font-bold text-white hover:bg-orange-800/90">
              <span aria-hidden="true">▶ </span> Play Game
            </span>
          </Link>
        )}
      </div>

      <p className="mt-3">{project.briefDescription}</p>

      <div className="mt-auto space-y-0.5 pt-3 text-sm text-black/75">
        <p>
          <span className="font-semibold text-black">Languages:</span>{" "}
          {project.languages.map((language, index) => (
            <span key={language}>
              {language}
              {index < project.languages.length - 1 && (
                <span aria-hidden="true"> • </span>
              )}
            </span>
          ))}
        </p>

        <p>
          <span className="font-semibold text-black">Technologies:</span>{" "}
          {project.technologies.map((technology, index) => (
            <span key={technology}>
              {technology}
              {index < project.technologies.length - 1 && (
                <span aria-hidden="true"> • </span>
              )}
            </span>
          ))}
        </p>

        <p>
          <span className="font-semibold text-black">Concepts:</span>{" "}
          {project.concepts.map((concept, index) => (
            <span key={concept}>
              {concept}
              {index < project.concepts.length - 1 && (
                <span aria-hidden="true"> • </span>
              )}
            </span>
          ))}
        </p>
      </div>
    </article>
  );
}
