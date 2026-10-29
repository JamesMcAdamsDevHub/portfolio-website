import Link from "next/link";
import ProjectCards from "@/components/ProjectCards";
import ExperienceCards from "@/components/ExperienceCards";
import EducationCard from "@/components/EducationCard";
import SkillsCard from "@/components/SkillsCard";
import AboutCard from "@/components/AboutCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "James McAdams Portfolio Home",
};

export default function Home() {
  return (
    <main
      className="mx-auto w-full max-w-440 px-4 pt-4 pb-1 leading-relaxed lg:px-8 2xl:pb-0"
    >
      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[5fr_3fr]">
        <div className="flex min-w-0 flex-col gap-3 2xl:gap-2">
          <div>
            <h1 className="mb-2 text-center font-mono text-lg font-semibold tracking-tight text-slate-100 md:text-left 2xl:mb-1">
              About Me
            </h1>
            <AboutCard />
          </div>
          <section aria-labelledby="featured-projects">
            <h2
              id="featured-projects"
              className="mb-2 text-center font-mono text-lg font-semibold tracking-tight text-slate-100 md:text-left 2xl:mb-1"
            >
              Featured Projects
            </h2>
            <ProjectCards featuredOnly={true} />
          </section>
          <Link
            href="/projects"
            className="w-fit self-center py-1 font-semibold text-orange-400 underline underline-offset-4 hover:text-orange-300 md:self-start 2xl:mt-auto 2xl:py-0"
          >
            View All Projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="flex min-w-0 flex-col gap-3 2xl:gap-2">
          <section aria-labelledby="skills-education">
            <h2
              id="skills-education"
              className="mb-2 text-center font-mono text-lg font-semibold tracking-tight text-slate-100 md:text-left 2xl:mb-1"
            >
              Skills &amp; Education
            </h2>
            <div className="flex flex-col gap-3 2xl:gap-2">
              <SkillsCard />
              <EducationCard />
            </div>
          </section>
          <section aria-labelledby="featured-experience">
            <h2
              id="featured-experience"
              className="mb-2 text-center font-mono text-lg font-semibold tracking-tight text-slate-100 md:text-left 2xl:mb-1"
            >
              Experience
            </h2>
            <ExperienceCards featuredOnly={true} />
          </section>
          <Link
            href="/resume"
            className="w-fit self-center py-1 font-semibold text-orange-400 underline underline-offset-4 hover:text-orange-300 md:self-start 2xl:mt-auto 2xl:py-0"
          >
            View Full Resume <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
