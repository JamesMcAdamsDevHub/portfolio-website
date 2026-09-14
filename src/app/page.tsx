import Link from "next/link";
import Image from "next/image";
import Social from "@/components/Social";
import ProjectCards from "@/components/ProjectCards";
import ExperienceCards from "@/components/ExperienceCards";
import SkillsCard from "@/components/SkillsCard";
import about from "@/content/about.json";

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto max-w-5xl py-7">
      <section className="flex w-full flex-col items-center gap-8 pb-4 md:flex-row md:items-start">
        <div>
          <Image
            src={about.profileImage}
            alt={about.profileImageAlt}
            width={400}
            height={500}
            className="
              h-auto
              w-full
              max-w-80
              rounded-4xl
              border-4
              border-orange-700
              shadow-lg
            "
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col items-center gap-2 border-b-3 border-orange-700 pb-2 md:flex-row md:justify-start md:gap-4">
            <h1 className="text-center text-4xl font-bold">{about.name}</h1>

            <div className="flex gap-2">
              <Social platform="linkedin" />
              <Social platform="github" />
              <Social platform="instagram" />
            </div>
          </div>

          <p className="mt-4">{about.introduction}</p>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto mb-5 mt-4 w-fit border-y-3 border-orange-700 text-center">
          <h2 className="px-1 py-2 text-4xl font-bold">Featured Projects</h2>
        </div>

        <ProjectCards featuredOnly={true} />

        <div className="p-4 text-center">
          <Link href="/projects" className="font-bold hover:text-blue-600">
            View All Projects →
          </Link>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto mb-5 mt-4 w-fit border-y-3 border-orange-700 text-center">
          <h2 className="px-1 py-2 text-4xl font-bold">Experience</h2>
        </div>

        <SkillsCard />

        <ExperienceCards featuredOnly={true} />

        <div className="p-4 text-center">
          <Link href="/resume" className="font-bold hover:text-blue-600">
            View Full Resume →
          </Link>
        </div>
      </section>
    </main>
  );
}
