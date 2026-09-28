import resume from "@/content/resume.json";

export default function EducationCard() {
  const education = resume.education;

  return (
    <article className="w-full bg-transparent px-5 py-2">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 border-b-2 border-orange-700 pt-2">
        <h2 className="text-xl font-bold lg:text-2xl">{education.school}</h2>

        <p className="text-sm font-semibold text-black/70">
          {education.location}
        </p>
      </header>

      <div className="space-y-1 py-2 text-sm">
        <div>
          <p className="font-semibold">Major:</p>
          <p className="text-black/75">{education.degree}</p>
        </div>

        <div>
          <p className="font-semibold">Graduation:</p>
          <p className="text-black/75">{education.graduationDate}</p>
        </div>

        <div>
          <p className="font-semibold">GPA:</p>
          <p className="text-black/75">{education.gpa}</p>
        </div>
      </div>
    </article>
  );
}
