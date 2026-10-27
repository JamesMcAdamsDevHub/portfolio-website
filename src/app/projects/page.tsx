import ProjectCards from "@/components/ProjectCards";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | James McAdams",
};

export default function Projects() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto flex w-full max-w-440 flex-col px-4 py-6 break-words leading-relaxed lg:px-8 2xl:h-[calc(100svh-7.25rem)] 2xl:min-h-0"
    >
      <h1 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-left md:text-4xl">
        Projects
      </h1>
      <ProjectCards featuredOnly={false} />
    </main>
  );
}
