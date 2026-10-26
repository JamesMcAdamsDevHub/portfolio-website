import resume from "@/content/resume.json";

export default function SkillsCard() {
  const skills = resume.skills;

  return (
    <section
      className="min-w-0 rounded-lg border border-slate-700 bg-[#10171b] p-4 2xl:py-3"
      aria-labelledby="skills-heading"
    >
      <h3
        id="skills-heading"
        className="mb-2 font-mono text-lg font-semibold tracking-tight text-slate-100"
      >
        Skills
      </h3>
      <dl className="grid grid-cols-1 gap-2 text-sm text-slate-300">
        {[
          { label: "Languages", items: skills.languages },
          { label: "Technologies", items: skills.technologies },
          { label: "Concepts", items: skills.concepts },
        ].map(({ label, items }) => (
          <div key={label}>
            <dt className="font-semibold text-orange-400">{label}</dt>
            <dd className="mt-1 min-w-0">
              <ul
                className="flex list-none flex-wrap gap-1.5"
                role="list"
                aria-label={label}
              >
                {items.map((item) => (
                  <li
                    key={item}
                    className="min-w-0 rounded-sm border border-slate-600 bg-slate-900 px-2 py-0.5 break-words"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
