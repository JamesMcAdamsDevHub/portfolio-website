import ExperienceCard from "@/components/ExperienceCard";
import resume from "@/content/resume.json";

type ExperienceCardsProps = {
  featuredOnly: boolean;
};

export default function ExperienceCards({
  featuredOnly,
}: ExperienceCardsProps) {
  const experienceToShow = featuredOnly
    ? resume.experience.filter((experience) => experience.featured)
    : resume.experience;

  return (
    <div className="site-scrollbar flex w-full flex-col gap-6 2xl:max-h-140 2xl:overflow-y-auto 2xl:pr-2">
      {experienceToShow.map((experience) => (
        <ExperienceCard
          key={`${experience.title}-${experience.startDate}`}
          experience={experience}
        />
      ))}
    </div>
  );
}
