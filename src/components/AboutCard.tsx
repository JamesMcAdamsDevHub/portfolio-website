import Image from "next/image";
import Social from "@/components/Social";
import about from "@/content/about.json";

export default function AboutCard() {
  return (
    <article
      className="flex min-w-0 flex-col items-center gap-6 rounded-lg border border-slate-700 bg-[#10171b] p-4 md:flex-row 2xl:py-2"
      aria-labelledby="about-name"
    >
      <Image
        src={about.profileImage}
        alt={about.profileImageAlt}
        width={300}
        height={300}
        sizes="(min-width: 1536px) 128px, 144px"
        className="h-auto w-36 max-w-full shrink-0 rounded-sm border border-slate-600 bg-[#10171b] 2xl:w-32"
        loading="eager"
      />
      <div className="min-w-0 w-full">
        <div className="flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:justify-between">
          <h1
            id="about-name"
            className="min-w-0 break-words text-center text-3xl font-bold tracking-tight text-orange-400 md:text-left md:text-4xl 2xl:text-5xl"
          >
            {about.name}
          </h1>
          <div className="flex flex-wrap gap-2">
            <Social platform="linkedin" />
            <Social platform="github" />
            <Social platform="instagram" />
          </div>
        </div>
        <p className="mt-2 leading-6 text-slate-300 2xl:mt-1">
          {about.introduction}
        </p>
      </div>
    </article>
  );
}
