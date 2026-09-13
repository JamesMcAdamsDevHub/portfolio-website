import ProjectCards from "@/components/ProjectCards";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen min-w-screen max-w-7xl bg-linear-to-br from-orange-300 to-amber-100">
      <section className="max-w-5xl pb-5">
        <div className="mx-auto m-4 w-fit border-y-3 border-orange-700 text-center">
          <h2 className="px-1 py-2 text-4xl font-bold">Projects</h2>
        </div>

        <ProjectCards featuredOnly={false} />
      </section>
    </main>
  );
}
