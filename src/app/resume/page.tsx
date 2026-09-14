import ExperienceCards from "@/components/ExperienceCards";
import SkillsCard from "@/components/SkillsCard";
import EducationCard from "@/components/EducationCard";
import resume from "@/content/resume.json";

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto max-w-5xl py-7">
      <section>
        <div className="mx-auto m-4 w-fit border-y-3 border-orange-700 text-center">
          <h2 className="py-2 text-4xl font-bold">Resume</h2>
        </div>

        <div className="font-bold text-center py-2 m-2">
          <p className="text-2xl">{resume.name}</p>
          <p className="text-lg">{resume.location}</p>
          <p className="text-lg">{resume.email}</p>
        </div>

        <hr className="mx-auto max-w-sm m-6 border-t-3 border-orange-700" />

        <SkillsCard />

        <hr className="mx-auto max-w-sm m-6 border-t-3 border-orange-700" />

        <EducationCard />

        <hr className="mx-auto max-w-sm m-6 border-t-3 border-orange-700" />

        <ExperienceCards featuredOnly={false} />
      </section>
    </main>
  );
}
