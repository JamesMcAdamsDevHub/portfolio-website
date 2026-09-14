import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

type ProjectCardProps = {
  project: {
    title: string;
    repoLink: string | null;
    description: string;
    technologies: string[];
    startDate: string;
    media: {
      src: string;
      alt: string;
    }[];
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="w-full rounded-lg border-3 border-orange-700 bg-orange-100/50 px-5 py-4 shadow-lg">
      <div>
        <header className="flex justify-between border-b-2 border-orange-700 pb-1">
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

          <p className="font-bold">{project.startDate}</p>
        </header>

        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <p>{project.description}</p>

          <ImageGallery imageSrcList={project.media} />
        </div>
      </div>
      <div className="flex px-2 gap-2 text-md">
        <p className="font-bold">Uses:</p>
        {project.technologies.join(" • ")}
      </div>
    </article>
  );
}
