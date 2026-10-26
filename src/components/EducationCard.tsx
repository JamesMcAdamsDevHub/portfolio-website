import resume from "@/content/resume.json";

export default function EducationCard() {
  const education = resume.education;

  return (
    <section
      className="min-w-0 rounded-lg border border-slate-700 bg-[#10171b] p-4 2xl:py-3"
      aria-labelledby="education-heading"
    >
      <h3
        id="education-heading"
        className="mb-3 font-mono text-lg font-semibold tracking-tight text-slate-100"
      >
        Education
      </h3>
      <p className="text-lg leading-6 font-semibold">{education.school}</p>
      <p className="text-sm text-slate-300">{education.location}</p>
      <dl className="mt-2 grid gap-x-8 gap-y-2 text-sm text-slate-300 sm:grid-cols-[max-content_1fr]">
        <div className="sm:col-span-2">
          <dt className="font-semibold text-slate-100">Major</dt>
          <dd>
            {education.degree}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-100">Graduation</dt>
          <dd>{education.graduationDate}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-100">GPA</dt>
          <dd>{education.gpa}</dd>
        </div>
      </dl>
    </section>
  );
}
