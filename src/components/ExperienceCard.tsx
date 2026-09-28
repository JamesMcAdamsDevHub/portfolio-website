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
    <article className="w-full bg-transparent px-5 py-2">
      <header className="border-b-2 border-orange-700 pt-2 md:flex md:justify-between">
        <div>
          <h2 className="text-xl font-bold lg:text-2xl">
            {experience.company}
          </h2>

          <p className="text-lg leading-tight">{experience.title}</p>
        </div>

        <div className="text-xs font-semibold leading-tight text-black/70 md:text-right md:text-sm">
          <p>
            {experience.startDate} -{" "}
            {experience.endDate === null ? "present" : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </header>

      <ul className="mt-2 list-disc space-y-0.5 py-1 pl-6 text-sm">
        {experience.details.map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </ul>
    </article>
  );
}
