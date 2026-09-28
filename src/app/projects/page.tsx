import ProjectCards from "@/components/ProjectCards";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-2 py-2 lg:px-30">
      <section>
        <h2 className="w-fit mx-auto pl-2 mb-1 border-b-3 border-orange-700 text-orange-900 text-2xl font-bold text-center">
          PROJECTS
        </h2>

        <ProjectCards featuredOnly={false} />
      </section>
    </main>
  );
}
