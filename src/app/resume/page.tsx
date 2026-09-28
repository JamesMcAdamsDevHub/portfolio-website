import ExperienceCards from "@/components/ExperienceCards";
import SkillsCard from "@/components/SkillsCard";
import EducationCard from "@/components/EducationCard";
import Social from "@/components/Social";
import resume from "@/content/resume.json";

export default function Home() {
  return (
    <main className="mx-auto w-full px-2 pt-2 lg:px-30">
      <header className="text-center">
        <h2 className="w-fit mx-auto pl-2 mb-1 border-b-3 border-orange-700 text-orange-900 text-2xl font-bold text-center">
          RESUME
        </h2>

        <div className="mt-2">
          <p className="text-xl font-bold">{resume.name}</p>
          <p className="mt-1">{resume.email}</p>
        </div>

        <div className="mt-3 flex flex-col items-center gap-2">
          <div className="flex gap-2">
            <Social platform="linkedin" />
            <Social platform="github" />
            <Social platform="instagram" />
          </div>

          <a
            href="/documents/James-McAdams-Resume.pdf"
            download
            className="font-bold text-orange-900 hover:text-blue-600"
          >
            Download Resume (PDF)
          </a>
        </div>
      </header>

      <div className="mt-2 grid grid-cols-1 gap-4 2xl:grid-cols-[3fr_10fr]">
        <section className="mb-1">
          <h2 className="mb-1 border-b-3 border-orange-700 py-2 pl-2 text-center text-xl font-bold text-orange-900 2xl:text-left">
            SKILLS & EDUCATION
          </h2>

          <div className="flex flex-col gap-4">
            <SkillsCard />
            <EducationCard />
          </div>
        </section>

        <section>
          <h2 className="mb-1 border-b-3 border-orange-700 py-2 pl-2 text-center text-xl font-bold text-orange-900 2xl:text-left">
            EXPERIENCE
          </h2>

          <ExperienceCards featuredOnly={false} />
        </section>
      </div>
    </main>
  );
}
