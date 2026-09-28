import resume from "@/content/resume.json";

export default function SkillsCard() {
  const skills = resume.skills;

  return (
    <article className="w-full bg-transparent px-5 py-2">
      <header className="border-b-2 border-orange-700 pt-2">
        <h2 className="text-xl font-bold lg:text-2xl">Skills</h2>
      </header>

      <div className="space-y-1 pt-2 text-sm">
        <div>
          <p className="font-semibold">Languages:</p>
          <p className="text-black/75">{skills.languages.join(" • ")}</p>
        </div>

        <div>
          <p className="font-semibold">Technologies:</p>
          <p className="text-black/75">{skills.technologies.join(" • ")}</p>
        </div>

        <div>
          <p className="font-semibold">Concepts:</p>
          <p className="text-black/75">{skills.concepts.join(" • ")}</p>
        </div>
      </div>
    </article>
  );
}
