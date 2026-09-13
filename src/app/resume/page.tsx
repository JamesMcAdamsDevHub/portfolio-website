import ExperienceCards from "@/components/ExperienceCards";
import SkillsCard from "@/components/SkillsCard";
import resume from "@/content/resume.json";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen min-w-screen max-w-7xl bg-linear-to-br from-orange-300 to-amber-100">
      <section className="max-w-5xl pb-5">
        <div className="mx-auto m-4 w-fit border-y-3 border-orange-700 text-center">
          <h2 className="px-1 py-2 text-4xl font-bold">Resume</h2>
        </div>

        <div className="font-bold text-center p-2 m-2">
          <p className="text-2xl">{resume.name}</p>
          <p className="text-lg">{resume.location}</p>
          <p className="text-lg">{resume.email}</p>
        </div>

        <hr className="mx-auto max-w-sm m-6 border-t-3 border-orange-700" />

        <SkillsCard />

        <hr className="mx-auto max-w-sm m-6 border-t-3 border-orange-700" />

        <ExperienceCards featuredOnly={false} />
      </section>
    </main>
  );
}
