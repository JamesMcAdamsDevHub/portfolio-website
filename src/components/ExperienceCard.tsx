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

export default function ProjectCard({ experience }: ExperienceCardProps) {
  return (
    <article className="w-full rounded-lg border-3 border-orange-700 bg-orange-100/50 px-5 py-4 shadow-lg">
      <div>
        <header className="md:flex md:justify-between border-b-2 border-orange-700 pb-1">
          <div>
            <h2 className="text-xl font-bold lg:text-2xl">
              {experience.company}
            </h2>
            <h2 className="text-xl">{experience.title}</h2>
          </div>

          <div className="text-xs md:text-base md:text-right font-bold">
            <p>
              {experience.startDate} -{" "}
              {experience.endDate === null ? "present" : experience.endDate}
            </p>
            <p>{experience.location}</p>
          </div>
        </header>
      </div>
      <div className="px-2 gap-2 text-md">
        <ul className="mt-4 list-disc pl-6">
          {experience.details.map((desc) => (
            <li key={desc}>{desc}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
