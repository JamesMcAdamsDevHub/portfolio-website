import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";

type ProjectCardProps = {
  project: {
    title: string;
    repoLink?: string;
    playLink?: string;
    description: string;
    languages: string[];
    technologies: string[];
    concepts: string[];
    startDate: string;
    media: {
      type: string;
      src: string;
      alt: string;
      poster?: string;
    }[];
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="min-w-0 shrink-0 rounded-lg border border-slate-700 bg-[#10171b] p-4">
      <header className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="max-w-full break-words font-mono text-xl font-semibold tracking-tight text-slate-100">
          {project.title}
        </h2>
        <p className="font-mono text-sm text-slate-300">{project.startDate}</p>
      </header>
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[3fr_2fr]">
        <div className="min-w-0">
          <p className="mb-4 text-slate-300">{project.description}</p>
          <dl className="grid grid-cols-1 gap-1.5 text-sm leading-5 text-slate-300">
            {[
              { label: "Languages", items: project.languages },
              { label: "Technologies", items: project.technologies },
              { label: "Concepts", items: project.concepts },
            ].map(({ label, items }) => (
              <div key={label}>
                <dt className="font-semibold text-orange-400">{label}</dt>
                <dd className="mt-1 min-w-0">
                  <span className="flex flex-wrap gap-1.5">
                    {items.map((item, index) => (
                      <span
                        key={`${item}-${index}`}
                        className="min-w-0 rounded-sm border border-slate-700 bg-slate-900 px-2 py-0.5 break-words"
                      >
                        {item}
                        {index < items.length - 1 && (
                          <span className="sr-only">, </span>
                        )}
                      </span>
                    ))}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-4">
            <div className="flex min-h-8 flex-wrap items-center gap-3">
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
        </div>
        <ImageGallery imageSrcList={project.media} />
      </div>
    </article>
  );
}
