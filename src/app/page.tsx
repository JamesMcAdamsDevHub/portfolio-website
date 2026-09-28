import Link from "next/link";
import ProjectCards from "@/components/ProjectCards";
import ExperienceCards from "@/components/ExperienceCards";
import EducationCard from "@/components/EducationCard";
import SkillsCard from "@/components/SkillsCard";
import AboutCard from "@/components/AboutCard";

export default function Home() {
  return (
    <main className="mx-auto w-full px-2 py-4 lg:px-30">
      <div className="grid grid-cols-1 gap-4 2xl:grid-cols-[5fr_3fr]">
        <div className="flex flex-col">
          <h2 className="pl-2 mb-1 border-b-3 border-orange-700 text-orange-900 text-xl font-bold text-center md:text-left">
            ABOUT ME
          </h2>
          <AboutCard />

          <section className="flex flex-1 flex-col mt-2">
            <h2 className="pl-2 mb-1 border-b-3 border-orange-700 text-xl text-orange-900 font-bold text-center md:text-left">
              FEATURED PROJECTS
            </h2>
            <div className="flex flex-1">
              <ProjectCards featuredOnly={true} />
            </div>
          </section>

          <div className="pt-4 pb-2 text-orange-900 text-center">
            <Link
              href="/projects"
              className="font-bold text-orange-900 hover:text-blue-600"
            >
              View All Projects →
            </Link>
          </div>
        </div>

        <section className="flex flex-col">
          <h2 className="pl-2 mb-1 border-b-3 border-orange-700 text-orange-900 text-xl font-bold text-center md:text-left">
            EXPERIENCE
          </h2>
          <div className="flex flex-1 flex-col justify-between">
            <SkillsCard />
            <EducationCard />
            <ExperienceCards featuredOnly={true} />
          </div>

          <div className="pt-4 pb-2 text-center">
            <Link
              href="/resume"
              className="font-bold text-orange-900 hover:text-blue-600"
            >
              View Full Resume →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
