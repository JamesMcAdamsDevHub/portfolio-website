type ExperienceCardProps = {
  experience: {
    company: string;
    location: string;
    title: string;
    startDate: string;
    endDate: string | null;
    details: string[];
    featured: boolean;
  };
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="min-w-0 shrink-0 rounded-lg border border-slate-700 bg-[#10171b] p-4 2xl:py-3">
      <header className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight">
            {experience.company}
          </h3>
          <p className="font-medium text-orange-400">{experience.title}</p>
        </div>
        <div className="text-sm text-slate-300 sm:text-right">
          <p>
            {experience.startDate} –{" "}
            {experience.endDate === null ? "present" : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </header>
      <ul role="list" className="mt-3 list-none space-y-1 text-sm leading-relaxed">
        {experience.details.map((desc) => (
          <li key={desc} className="flex gap-2">
            <span aria-hidden="true" className="shrink-0 text-orange-400">
              •
            </span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
