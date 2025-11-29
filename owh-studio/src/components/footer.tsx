import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-6">
        <div className="max-w-xl space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            OWH STUDIO
          </p>
          <p className="text-lg leading-relaxed text-neutral-200">
            Studio multidisciplinar din Chișinău, dedicat producției de film,
            storytelling-ului experimental și educației media.
          </p>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} OWH STUDIO. Toate drepturile rezervate.
          </p>
        </div>
        <div className="grid gap-6 text-sm md:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.24em] text-neutral-400">
              Studioul
            </p>
            <ul className="mt-3 space-y-2 text-neutral-300">
              <li>
                Strada București 72, Chișinău <span className="text-neutral-500">MD</span>
              </li>
              <li>hello@owh.studio</li>
              <li>+373 60 000 800</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.24em] text-neutral-400">
              Navigație
            </p>
            <ul className="mt-3 space-y-2 text-neutral-300">
              <li>
                <Link href="/bilete" className="hover:text-white">
                  Rezervă bilete
                </Link>
              </li>
              <li>
                <Link href="/contacte" className="hover:text-white">
                  Contactează-ne
                </Link>
              </li>
              <li>
                <Link href="/cronograf" className="hover:text-white">
                  CRONOGRAF
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
