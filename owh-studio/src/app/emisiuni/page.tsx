import Link from "next/link";
import { ArrowLeft, RadioReceiver, Waves } from "lucide-react";
import { emisiuni } from "@/lib/data";

export const metadata = {
  title: "Emisiuni — OWH STUDIO",
  description:
    "Descoperă emisiunile și programele live produse de OWH STUDIO pentru TV, online și experiențe pop-up.",
};

export default function EmisiuniPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-28 pt-16 lg:px-6">
      <header className="flex flex-col gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-400 hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Înapoi
        </Link>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Emisiuni originale dezvoltate la OWH STUDIO
        </h1>
        <p className="max-w-2xl text-sm text-neutral-300">
          Platourile noastre modulare și echipa de broadcast permit producții
          live în format TV, streaming și AR. Realizăm programe curatoriate,
          workshop-uri live și talk-show-uri experimentale.
        </p>
      </header>

      <section className="mt-16 grid gap-8 md:grid-cols-2">
        {emisiuni.map((show) => (
          <article
            key={show.titlu}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-4">
              <RadioReceiver className="size-10 text-orange-300" />
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  {show.titlu}
                </h2>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  {show.frecventa}
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-neutral-200">{show.descriere}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-orange-200">
              {show.platforme.map((platforma) => (
                <span
                  key={platforma}
                  className="rounded-full border border-orange-300/30 px-4 py-1"
                >
                  {platforma}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Studio live audio-video
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Producție remote, streaming securizat și platforme multi-destinație
            </h2>
          </div>
          <Waves className="size-12 text-orange-300" />
        </div>
        <p className="mt-6 text-sm text-neutral-200">
          Integram camere PTZ cu tracking, decoruri reactive și grafică
          real-time pentru broadcast și streaming. Toate emisiunile pot fi
  adaptate în campanii digitale cu conținut derivat pentru social media.
        </p>
      </section>
    </div>
  );
}
