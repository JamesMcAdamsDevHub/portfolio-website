"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import about from "@/content/about.json";

const destinations = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-slate-700 bg-[#10171b] text-slate-100">
      <div className="mx-auto flex w-full max-w-440 flex-wrap items-center justify-between gap-2 px-4 py-3 lg:px-8">
        <p className="hidden text-lg font-semibold tracking-tight md:block">
          {about.name}{" "}
          <span className="text-slate-300">
            <span aria-hidden="true">|</span> Software Engineer
          </span>
        </p>
        <nav
          className="flex w-full flex-wrap justify-center gap-1 md:w-auto"
          aria-label="Main navigation"
        >
          {destinations.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`inline-flex min-h-11 items-center rounded-sm px-3 py-2 text-sm font-medium md:text-base underline-offset-4 focus-visible:outline-orange-300! motion-safe:transition-colors motion-safe:duration-150 ${pathname === href ? "text-orange-400 underline decoration-2 underline-offset-8" : "hover:bg-slate-800 hover:underline"}`}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
