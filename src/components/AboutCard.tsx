import Image from "next/image";
import Social from "@/components/Social";
import about from "@/content/about.json";

export default function AboutCard() {
  return (
    <article className="flex w-full flex-col items-center gap-2 rounded-lg border-3 border-orange-700 bg-orange-100/50 p-2 shadow-lg md:flex-row md:items-start">
      <Image
        src={about.profileImage}
        alt={about.profileImageAlt}
        width={300}
        height={300}
        className="
          h-auto
          w-full
          max-w-45
          rounded-lg
          border-4
          border-orange-700
          shadow-lg
        "
      />

      <div className="flex-1">
        <div className="flex flex-col items-center gap-2 border-b-3 border-orange-700 pl-2 md:flex-row md:justify-start">
          <h1 className="whitespace-nowrap text-center text-3xl font-bold lg:text-4xl">
            {about.name}
          </h1>

          <div className="flex gap-1 pb-2 md:pb-0">
            <Social platform="linkedin" />
            <Social platform="github" />
            <Social platform="instagram" />
          </div>
        </div>

        <p className="m-4 text-lg">{about.introduction}</p>
      </div>
    </article>
  );
}
