import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, Play } from "lucide-react";
import { filme } from "@/lib/data";

export const metadata = {
  title: "Filme — OWH STUDIO",
  description:
    "Explorează arhiva de filme OWH STUDIO: documentare, docu-ficțiune și eseuri vizuale premiate.",
};

export default function FilmePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-28 pt-16 lg:px-6">
      <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-400 hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Înapoi
          </Link>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Arhiva OWH STUDIO
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-neutral-300">
            Filme produse, co-produse și curatoriate în ultimul deceniu. Fiecare
            proiect include cercetare etnografică, co-creație cu comunitățile și
            distribuție globală.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-200">
          <p className="uppercase tracking-[0.3em] text-neutral-400">
            Colecție 2021-2024
          </p>
          <p className="mt-3">
            <span className="text-3xl font-semibold text-white">
              {filme.length}
            </span>{" "}
            titluri în program, disponibil pentru festivaluri, platforme VOD și
            proiecții speciale.
          </p>
        </div>
      </header>

      <section className="mt-16 grid gap-10 md:grid-cols-2">
        {filme.map((film) => (
          <article
            key={film.slug}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <div className="relative">
              <Image
                src={film.imagine}
                alt={film.titlu}
                width={1200}
                height={900}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute bottom-6 left-6 space-y-2">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-neutral-300">
                  <span>{film.gen}</span>
                  <span>{film.an}</span>
                  <span>{film.durata}</span>
                </div>
                <h2 className="text-3xl font-semibold text-white">
                  {film.titlu}
                </h2>
              </div>
            </div>
            <div className="space-y-6 p-6">
              <p className="text-sm text-neutral-200">{film.rezumat}</p>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-orange-200">
                {film.premii.map((premiu) => (
                  <span
                    key={premiu}
                    className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 px-3 py-1"
                  >
                    <Award className="size-3" />
                    {premiu}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <Link
                  href={`/filme/${film.slug}`}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-950 transition hover:-translate-y-1"
                >
                  detalii
                  <Play className="size-4" />
                </Link>
                <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-200 transition hover:border-orange-400/60 hover:text-white">
                  solicită proiecție
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
