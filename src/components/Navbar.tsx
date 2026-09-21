"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full flex items-stretch justify-between border-b border-orange-700 bg-linear-to-br from-orange-600 to-amber-600">
      <p className="hidden md:block text-2xl lg:text-bold p-1 pl-6 gap-2">
        Portfolio Site | James McAdams
      </p>

      <nav className="flex w-full md:w-auto justify-center text-2xl md:text-lg">
        <Link
          href="/"
          className={`flex items-center justify-center w-32 py-1 ${
            pathname === "/" ? "bg-orange-700" : "hover:bg-orange-600"
          }`}
        >
          Home
        </Link>

        <Link
          href="/projects"
          className={`flex items-center justify-center w-32 py-1 ${
            pathname === "/projects" ? "bg-orange-700" : "hover:bg-orange-600"
          }`}
        >
          Projects
        </Link>

        <Link
          href="/resume"
          className={`flex items-center justify-center w-32 py-1 ${
            pathname === "/resume" ? "bg-orange-700" : "hover:bg-orange-600"
          }`}
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
