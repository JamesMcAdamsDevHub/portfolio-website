import ExperienceCards from "@/components/ExperienceCards";
import SkillsCard from "@/components/SkillsCard";
import EducationCard from "@/components/EducationCard";
import Social from "@/components/Social";
import resume from "@/content/resume.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | James McAdams",
};

export default function Resume() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto flex w-full max-w-440 flex-col px-4 py-3 break-words leading-relaxed lg:px-8"
    >
      <header className="mb-4 flex shrink-0 flex-col items-center justify-between gap-4 text-center md:flex-row md:flex-wrap md:items-start md:text-left">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Resume
          </h1>
          <p className="mt-2 text-xl font-semibold">{resume.name}</p>
          <p className="mt-1">
            <a
              className="break-all font-semibold text-orange-400 underline underline-offset-4 hover:text-orange-300"
              href={`mailto:${resume.email}`}
            >
              {resume.email}
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex flex-wrap gap-2">
            <Social platform="linkedin" />
            <Social platform="github" />
            <Social platform="instagram" />
          </div>
          <a
            href="/documents/James-McAdams-Resume.pdf"
            download
            className="inline-flex min-h-11 items-center rounded-sm bg-orange-400 px-4 py-2 font-semibold text-slate-950 hover:bg-orange-300 motion-safe:transition-colors motion-safe:duration-150"
          >
            Download Resume (PDF)
          </a>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[1fr_2fr]">
        <section
          className="flex min-w-0 flex-col"
          aria-labelledby="skills-education"
        >
          <h2
            id="skills-education"
            className="mb-2 text-center font-mono text-lg font-semibold tracking-tight text-slate-100 md:text-left"
          >
            Skills &amp; Education
          </h2>
          <div className="flex flex-col gap-3 p-2">
            <SkillsCard />
            <EducationCard />
          </div>
        </section>
        <section
          className="flex min-w-0 flex-col"
          aria-labelledby="experience-heading"
        >
          <h2
            id="experience-heading"
            className="mb-2 text-center font-mono text-lg font-semibold tracking-tight text-slate-100 md:text-left"
          >
            Experience
          </h2>
          <ExperienceCards featuredOnly={false} />
        </section>
      </div>
    </main>
  );
}
