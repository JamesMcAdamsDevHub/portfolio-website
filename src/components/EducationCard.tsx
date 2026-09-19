import resume from "@/content/resume.json";

export default function EducationCard() {
  const education = resume.education;

  return (
    <article className="w-full rounded-lg border-3 border-orange-700 bg-orange-100/50 px-2 shadow-lg">
      <header className="border-b-2 border-orange-700 pt-2 font-bold md:flex md:justify-between">
        <h2 className="text-xl lg:text-2xl">{education.school}</h2>
        <p className="text-xs md:text-base">{education.location}</p>
      </header>

      <div className="py-2">
        <div>
          <p className="font-bold">Major:</p>
          <p>{education.degree}</p>
        </div>

        <div>
          <p className="font-bold">Graduation:</p>
          <p>{education.graduationDate}</p>
        </div>

        <div>
          <p className="font-bold">GPA:</p>
          <p>{education.gpa}</p>
        </div>
      </div>
    </article>
  );
}
