import resume from "@/content/resume.json";

export default function SkillsCard() {
  const skills = resume.skills;

  return (
    <article className="w-full rounded-lg border-3 border-orange-700 bg-orange-100/50 p-4 my-4 shadow-lg">
      <header className="border-b-2 border-orange-700 pb-1">
        <h2 className="text-xl font-bold lg:text-2xl">Skills</h2>
      </header>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          <p className="font-bold">Languages:</p>
          <p>{skills.languages.join(" • ")}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <p className="font-bold">Technologies:</p>
          <p>{skills.technologies.join(" • ")}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <p className="font-bold">Concepts:</p>
          <p>{skills.concepts.join(" • ")}</p>
        </div>
      </div>
    </article>
  );
}
