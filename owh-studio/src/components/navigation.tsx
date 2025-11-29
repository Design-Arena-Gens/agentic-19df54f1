'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/filme", label: "Filme" },
  { href: "/productie-video", label: "Producție video" },
  { href: "/emisiuni", label: "Emisiuni" },
  { href: "/rental", label: "Rental" },
  { href: "/bilete", label: "Bilete" },
  { href: "/despre", label: "Despre" },
  { href: "/contacte", label: "Contacte" },
  { href: "/cronograf", label: "CRONOGRAF" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-white"
          onClick={close}
        >
          OWH<span className="text-orange-400"> STUDIO</span>
        </Link>

        <button
          onClick={toggle}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          aria-label="Deschide meniul"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.26em] text-neutral-200 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/bilete"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-950 shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
          >
            Rezervă bilete
          </Link>
        </nav>
      </div>

      <nav
        className={`lg:hidden ${
          open ? "max-h-screen opacity-100" : "pointer-events-none max-h-0 opacity-0"
        } transform border-t border-white/10 bg-neutral-950/95 transition-all duration-300`}
      >
        <ul className="space-y-3 px-6 py-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center justify-between text-base font-semibold tracking-wide text-neutral-100"
                onClick={close}
              >
                {link.label}
                <span className="text-sm text-orange-400">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
