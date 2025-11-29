import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Ticket, Users } from "lucide-react";

export const metadata = {
  title: "Bilete — OWH STUDIO",
  description:
    "Rezervă bilete pentru premiere, cine-concerte și experiențe imersive la OWH STUDIO.",
};

const evenimente = [
  {
    titlu: "Premiera „Lumina din Noapte” + sesiune Q&A cu echipa",
    data: "12 aprilie · 19:30",
    format: "Proiecție DCP 4K + meet & greet",
    locuri: "54 locuri · 20€",
  },
  {
    titlu: "Cine-concert „Corpul Sonor” live mix",
    data: "20 aprilie · 21:00",
    format: "Instalație audio 360° + performance",
    locuri: "54 locuri · 25€",
  },
  {
    titlu: "OWH Immersive Lab · Work in progress preview",
    data: "27 aprilie · 18:00",
    format: "Proiecție + feedback participativ",
    locuri: "limită 40 · acces gratuit cu RSVP",
  },
];

export default function BiletePage() {
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
          Bilete & abonamente
        </h1>
        <p className="max-w-2xl text-sm text-neutral-300">
          Micro-cinema OWH STUDIO oferă proiecții imersive, cine-concerte și
          rezidențe deschise. Locație: Str. București 72, Chișinău.
        </p>
      </header>

      <section className="mt-16 grid gap-8">
        {evenimente.map((event) => (
          <article
            key={event.titlu}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">
                  {event.titlu}
                </h2>
                <p className="text-sm text-neutral-400">{event.data}</p>
                <p className="text-sm text-neutral-200">{event.format}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-orange-200">
                  {event.locuri}
                </p>
              </div>
              <Link
                href="/contacte"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-1"
              >
                Rezervă
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-200">
          <div className="flex items-center gap-3">
            <Ticket className="size-6 text-orange-300" />
            <h2 className="text-lg font-semibold text-white">
              Abonamente Flex
            </h2>
          </div>
          <p>
            Alege trei proiecții la libera alegere, primești acces la Q&A-uri
            exclusive, fișe de regie și playlist-uri sonore din arhivă.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-200">
          <div className="flex items-center gap-3">
            <Users className="size-6 text-orange-300" />
            <h2 className="text-lg font-semibold text-white">
              Rezervări pentru grupuri
            </h2>
          </div>
          <p>
            Organizăm proiecții speciale pentru licee, universități și companii,
            cu facil de transport și ghidaj tematic. Contactează-ne pentru un
            program dedicat.
          </p>
        </div>
      </section>
    </div>
  );
}
