import Image from "next/image";
import Link from "next/link";

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
      type: string;
      src: string;
      alt: string;
      poster?: string;
    }[];
  };
};

export default function ProjectFeatureCard({
  project,
}: ProjectFeatureCardProps) {
  const featuredMedia = project.media[0];
  const featuredImageSrc =
    featuredMedia?.type === "video" ? featuredMedia.poster : featuredMedia?.src;

  return (
    <article className="grid min-w-0 grid-cols-1 gap-4 rounded-lg border border-slate-700 bg-[#10171b] p-4 md:grid-cols-[2fr_3fr] 2xl:px-3 2xl:py-2.5">
      {featuredImageSrc && (
        <Image
          className="aspect-video h-auto w-full max-w-96 self-center justify-self-center rounded-md border border-slate-700 bg-[#090d10] object-contain"
          src={featuredImageSrc}
          alt={featuredMedia.alt}
          width={600}
          height={390}
          loading="eager"
          sizes="(min-width: 1536px) 500px, (min-width: 768px) 45vw, 90vw"
        />
      )}
      <div className="flex min-w-0 flex-col gap-2 2xl:gap-1">
        <h3 className="font-mono text-xl leading-7 font-semibold tracking-tight text-slate-100">
          {project.title}
        </h3>
        <p className="text-sm leading-5 text-slate-300">
          {project.briefDescription}
        </p>
        <ul role="list" className="grid grid-cols-1 gap-1.5 text-sm leading-5 text-slate-300 2xl:gap-1">
          {[
            { label: "Languages", items: project.languages },
            { label: "Technologies", items: project.technologies },
            { label: "Concepts", items: project.concepts },
          ].map(({ label, items }) => (
            <li key={label}>
              <span className="block font-semibold text-orange-400">{label}</span>
              <div className="mt-1 min-w-0 2xl:mt-0.5">
                <ul role="list" className="flex flex-wrap gap-1.5 2xl:gap-1">
                  {items.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="min-w-0 rounded-sm border border-slate-700 bg-slate-900 px-2 py-0.5 break-words 2xl:py-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex min-h-8 flex-wrap items-center gap-3 pt-1 2xl:pt-0">
          {project.playLink && (
            <Link
              href={project.playLink}
              className="inline-flex min-h-8 items-center gap-2 rounded-sm bg-orange-400 px-2.5 py-1 text-sm font-semibold text-slate-950 hover:bg-orange-300 motion-safe:transition-colors motion-safe:duration-150"
            >
              <span aria-hidden="true">▶</span> Play Game
              <span className="sr-only">: {project.title}</span>
            </Link>
          )}
          {project.repoLink && (
            <Link
              href={project.repoLink}
              className="inline-flex min-h-8 items-center gap-1 rounded-sm border border-slate-500 px-2.5 py-1 text-sm font-semibold text-slate-100 underline underline-offset-4 hover:border-orange-400 hover:text-orange-300 motion-safe:transition-colors motion-safe:duration-150"
            >
              GitHub<span className="sr-only">: {project.title}</span>{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
