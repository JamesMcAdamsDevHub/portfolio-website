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
          <p className="text-black/75">
            {skills.languages.map((skill, index) => (
              <span key={skill}>
                {skill}
                {index < skills.languages.length - 1 && (
                  <span aria-hidden="true"> • </span>
                )}
              </span>
            ))}
          </p>
        </div>

        <div>
          <p className="font-semibold">Technologies:</p>
          <p className="text-black/75">
            {skills.technologies.map((skill, index) => (
              <span key={skill}>
                {skill}
                {index < skills.technologies.length - 1 && (
                  <span aria-hidden="true"> • </span>
                )}
              </span>
            ))}
          </p>
        </div>

        <div>
          <p className="font-semibold">Concepts:</p>
          <p className="text-black/75">
            {skills.concepts.map((skill, index) => (
              <span key={skill}>
                {skill}
                {index < skills.concepts.length - 1 && (
                  <span aria-hidden="true"> • </span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </article>
  );
}
