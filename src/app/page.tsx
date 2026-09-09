import Image from "next/image";
import Social from "@/components/Social";
import about from "@/content/about.json";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        <div className="flex flex-col items-center">
          <Image
            src={about.profileImage}
            alt={about.profileImageAlt}
            width={400}
            height={500}
            className="
              w-full
              max-w-80
              h-auto
              rounded-4xl
              border-4
              border-orange-700
              shadow-lg
            "
          />

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Social platform="linkedin" />
            <Social platform="github" />
            <Social platform="instagram" />
          </div>
        </div>

        <div className="max-w-xl">
          <h1 className="text-4xl text-center md:text-left font-bold border-b-3 border-orange-700 pb-2">
            {about.name}
          </h1>

          <p className="mt-4">{about.introduction}</p>
        </div>
      </section>
    </main>
  );
}
