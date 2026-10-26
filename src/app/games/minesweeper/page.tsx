import Link from "next/link";
import projects from "@/content/projects.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minesweeper | James McAdams",
};

export default function Minesweeper() {
  const project = projects.find(
    (item) => item.playLink === "/games/minesweeper",
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 lg:px-8">
      <header className="mx-auto mb-4 flex w-full max-w-xl flex-col items-center gap-2 text-center sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:text-left landscape:max-w-[min(36rem,65dvh)]">
        <h1 className="max-w-full break-words text-3xl font-bold tracking-tight md:text-4xl">
          {project.title}
        </h1>
        <Link
          href="/projects"
          className="font-semibold text-orange-400 underline underline-offset-4 hover:text-orange-300"
        >
          Back to projects <span aria-hidden="true">→</span>
        </Link>
      </header>
      <div className="mx-auto aspect-[9/10] w-full max-w-xl rounded-xl border border-slate-500 bg-[#10171b] shadow-xs landscape:max-w-[min(36rem,65dvh)]">
        <iframe
          src="/games/minesweeper/index.html"
          title={`Play ${project.title}`}
          className="block h-full w-full rounded-xl border-0"
          allowFullScreen
        />
      </div>
    </main>
  );
}
