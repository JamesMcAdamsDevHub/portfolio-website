import ProjectCards from "@/components/ProjectCards";

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-auto max-w-5xl px-2 py-7">
      <section>
        <div className="mx-auto m-4 w-fit border-y-3 border-orange-700 text-center">
          <h2 className="py-2 text-4xl font-bold">Projects</h2>
        </div>

        <ProjectCards featuredOnly={false} />
      </section>
    </main>
  );
}
