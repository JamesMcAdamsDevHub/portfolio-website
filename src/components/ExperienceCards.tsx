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
    <div className="flex w-full flex-col gap-6">
      {experienceToShow.map((experience) => (
        <ExperienceCard
          key={`${experience.title}-${experience.startDate}`}
          experience={experience}
        />
      ))}
    </div>
  );
}
