"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full flex md:flex-row md:flex-col items-stretch justify-between border-b border-orange-700 bg-linear-to-br from-orange-700 to-amber-600 text-black">
      <p className="hidden md:block text-sm lg:text-2xl py-3 px-8">
        Portfolio Site | James McAdams
      </p>

      <nav className="flex w-full md:w-auto justify-center text-sm lg:text-lg">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "flex items-center justify-center w-32 bg-orange-700"
              : "flex items-center justify-center w-32 hover:bg-orange-600"
          }
        >
          Home
        </Link>

        <Link
          href="/projects"
          className={
            pathname === "/projects"
              ? "flex items-center justify-center w-32 bg-orange-700"
              : "flex items-center justify-center w-32 hover:bg-orange-600"
          }
        >
          Projects
        </Link>

        <Link
          href="/resume"
          className={
            pathname === "/resume"
              ? "flex items-center justify-center w-32 bg-orange-700"
              : "flex items-center justify-center w-32 hover:bg-orange-600"
          }
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
