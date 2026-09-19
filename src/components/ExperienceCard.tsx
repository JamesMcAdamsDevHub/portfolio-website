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
    <article className="w-full rounded-lg border-3 border-orange-700 bg-orange-100/50 px-2 shadow-lg">
      <header className="border-b-2 border-orange-700 pt-2 md:flex md:justify-between">
        <div>
          <h2 className="text-xl font-bold lg:text-2xl">
            {experience.company}
          </h2>
          <p className="text-xl leading-tight">{experience.title}</p>
        </div>

        <div className="text-xs font-bold leading-tight md:text-right md:text-base">
          <p>
            {experience.startDate} -{" "}
            {experience.endDate === null ? "present" : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </header>

      <ul className="mt-2 list-disc pl-6 py-2">
        {experience.details.map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </ul>
    </article>
  );
}
