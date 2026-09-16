import resume from "@/content/resume.json";

export default function EducationCard() {
  const education = resume.education;

  return (
    <article className="w-full rounded-lg border-3 border-orange-700 bg-orange-100/50 p-4 my-4 shadow-lg">
      <header className="md:flex md:justify-between border-b-2 border-orange-700 pb-1 font-bold">
        <h2 className="text-xl lg:text-2xl">{education.school}</h2>
        <p className="text-xs md:text-base">{education.location}</p>
      </header>

      <div className="mt-4">
        <div className="md:flex md:flex-wrap gap-2">
          <p className="font-bold">Major:</p>
          <p>{education.degree}</p>
        </div>

        <div className="md:flex md:flex-wrap gap-2">
          <p className="font-bold">Graduation:</p>
          <p>{education.graduationDate}</p>
        </div>

        <div className="md:flex md:flex-wrap gap-2">
          <p className="font-bold">GPA:</p>
          <p>{education.gpa}</p>
        </div>
      </div>
    </article>
  );
}
