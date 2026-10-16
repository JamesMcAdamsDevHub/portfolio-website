export default function Home() {
  return (
    <main className="mx-auto max-w-7xl py-14 max-lg:landscape:py-2">
      <section>
        <div className="mx-auto box-border aspect-[9/10] w-full max-w-xl landscape:max-w-[70dvh] overflow-hidden rounded-lg border-3 border-orange-700">
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
