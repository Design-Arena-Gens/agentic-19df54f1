import Link from "next/link";
import { ArrowLeft, CalendarHeart, Clapperboard, MapPinned } from "lucide-react";
import { cronografMomente } from "@/lib/data";

export const metadata = {
  title: "CRONOGRAF — OWH STUDIO",
  description:
    "CRONOGRAF este festivalul de film documentar fondat de OWH STUDIO. Descoperă istoria și programele sale.",
};

const programe = [
  {
    nume: "New Voices",
    descriere:
      "Selecție competițională pentru regizori debutanți din Europa Centrală și de Est.",
  },
  {
    nume: "Immersive Stories",
    descriere:
      "VR, AR și instalații interactive despre documentarea realității în formate emergente.",
  },
  {
    nume: "Chișinău Pulse",
    descriere:
      "Program de scurtmetraje create în rezidența accelerator dedicată tinerilor din Moldova.",
  },
];

export default function CronografPage() {
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
          CRONOGRAF Film Festival
        </h1>
        <p className="max-w-3xl text-sm text-neutral-300">
          Inițiat în 2003 de OWH STUDIO, CRONOGRAF este primul festival
          internațional de film documentar din Republica Moldova. În fiecare
          an, Chișinăul devine un laborator urban pentru cinema, muzică și artă
          comunitară.
        </p>
      </header>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-3">
            <Clapperboard className="size-6 text-orange-300" />
            <h2 className="text-2xl font-semibold text-white">
              Programe curatoriate
            </h2>
          </div>
          <ul className="mt-6 space-y-4 text-sm text-neutral-200">
            {programe.map((program) => (
              <li key={program.nume}>
                <p className="text-white">{program.nume}</p>
                <p className="text-neutral-400">{program.descriere}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-neutral-200">
          <div className="flex items-center gap-3">
            <CalendarHeart className="size-6 text-orange-300" />
            <p>Următoarea ediție: 5-11 octombrie 2024</p>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <MapPinned className="size-6 text-orange-300" />
            <p>Locații: Muzeul de Artă, Teatrul Fără Nume, spații pop-up OWH</p>
          </div>
          <p className="mt-6">
            CRONOGRAF include și o piață de co-producții, laborator pentru
            documentar social și program de impact dedicat ONG-urilor.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
          Momente definitorii
        </p>
        <ul className="mt-6 space-y-6">
          {cronografMomente.map((moment) => (
            <li
              key={moment.an}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-200"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-orange-200">
                {moment.an}
              </p>
              <p className="mt-3">{moment.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
