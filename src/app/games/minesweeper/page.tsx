export default function Home() {
  return (
    <main className="py-12">
      <section>
        <div className="mx-auto aspect-square w-full max-w-2xl overflow-hidden rounded-4xl bg-orange-700 border-4 border-orange-700">
          <iframe
            src="/games/minesweeper/index.html"
            title="Play Minesweeper"
            className="block h-full w-full border-0"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
