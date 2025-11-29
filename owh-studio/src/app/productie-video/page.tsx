import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles, Workflow } from "lucide-react";
import { servicii } from "@/lib/data";

export const metadata = {
  title: "Producție video — OWH STUDIO",
  description:
    "Servicii complete de producție video: concept, filmare, post-producție și activări imersive.",
};

const etape = [
  {
    titlu: "Strategy & Mood",
    detalii:
      "Sesiuni de co-creație cu stakeholderi, definim tonul vizual și experiența emoțională.",
  },
  {
    titlu: "Shoot & Play",
    detalii:
      "Platouri agile, echipe internaționale și flux digital securizat pentru revizuiri în timp real.",
  },
  {
    titlu: "Polish & Launch",
    detalii:
      "Post-producție completă + toolkit de distribuție pentru cinema, web, DOOH și social.",
  },
];

export default function ProductieVideoPage() {
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
          Producție video cu ADN cinematografic
        </h1>
        <p className="max-w-2xl text-sm text-neutral-300">
          Construim proiecte pentru branduri, ONG-uri și artiști care doresc să
          iasă din convențional. De la film advertising la instalații
          multimedia, oferim soluții modulare adaptate fiecărui brief.
        </p>
        <Link
          href="/contacte"
          className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-1"
        >
          Trimite-ne un brief
          <ArrowUpRight className="size-4" />
        </Link>
      </header>

      <section className="mt-16 grid gap-8 md:grid-cols-3">
        {etape.map((etapa) => (
          <div
            key={etapa.titlu}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-3">
              <Workflow className="size-5 text-orange-300" />
              <h2 className="text-lg font-semibold text-white">{etapa.titlu}</h2>
            </div>
            <p className="mt-4 text-sm text-neutral-200">{etapa.detalii}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
            Pachete modulare
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {servicii.map((serviciu) => (
              <div key={serviciu.categorie} className="space-y-4">
                <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
                  <Sparkles className="size-5 text-orange-300" />
                  {serviciu.categorie}
                </h3>
                <ul className="space-y-2 text-sm text-neutral-200">
                  {serviciu.elemente.map((element) => (
                    <li key={element}>• {element}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
