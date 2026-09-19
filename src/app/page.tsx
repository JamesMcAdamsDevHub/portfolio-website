import Link from "next/link";
import ProjectCards from "@/components/ProjectCards";
import ExperienceCards from "@/components/ExperienceCards";
import EducationCard from "@/components/EducationCard";
import SkillsCard from "@/components/SkillsCard";
import AboutCard from "@/components/AboutCard";

export default function Home() {
  return (
    <main className="mx-auto w-full px-6 py-7 lg:px-30">
      <div className="grid grid-cols-1 gap-8 2xl:grid-cols-[5fr_3fr]">
        <div className="flex flex-col">
          <h2 className="pl-2 mb-1 text-xl font-bold text-center md:text-left">
            About Me
          </h2>
          <AboutCard />

          <section className="flex flex-1 flex-col mt-4">
            <h2 className="pl-2 mb-1 text-xl font-bold text-center md:text-left">
              Featured Projects
            </h2>
            <div className="flex flex-1">
              <ProjectCards featuredOnly={true} />
            </div>
          </section>

          <div className="p-4 text-center">
            <Link href="/projects" className="font-bold hover:text-blue-600">
              View All Projects →
            </Link>
          </div>
        </div>

        <section className="flex flex-col">
          <h2 className="pl-2 mb-1 text-xl font-bold text-center md:text-left">
            Experience
          </h2>
          <div className="flex flex-1 flex-col gap-2 justify-between">
            <SkillsCard />
            <EducationCard />
            <ExperienceCards featuredOnly={true} />
          </div>

          <div className="p-4 text-center">
            <Link href="/resume" className="font-bold hover:text-blue-600">
              View Full Resume →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
