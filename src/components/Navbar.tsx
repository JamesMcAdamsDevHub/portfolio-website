import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full flex items-stretch justify-between border-b border-orange-700 bg-linear-to-br from-orange-700 to-amber-600 text-black">
      <p className="text-2xl py-3 px-8">Portfolio Site | James McAdams</p>

      <nav className="flex text-lg">
        <Link
          href="/"
          className="flex items-center justify-center w-32 hover:bg-orange-600"
        >
          Home
        </Link>

        <Link
          href="/projects"
          className="flex items-center justify-center w-32 hover:bg-orange-600"
        >
          Projects
        </Link>

        <Link
          href="/resume"
          className="flex items-center justify-center w-32 hover:bg-orange-600"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
