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
    <div
      className={`flex flex-col gap-4 ${featuredOnly ? "" : "p-2 [scrollbar-width:thin] 2xl:max-h-[60svh] 2xl:overflow-y-auto"}`}
      role={featuredOnly ? undefined : "region"}
      aria-label={featuredOnly ? undefined : "Work experience"}
      tabIndex={featuredOnly ? undefined : 0}
    >
      {experienceToShow.map((experience) => (
        <ExperienceCard
          key={`${experience.title}-${experience.startDate}`}
          experience={experience}
        />
      ))}
    </div>
  );
}
