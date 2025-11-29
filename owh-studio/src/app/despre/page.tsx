import Link from "next/link";
import { ArrowLeft, Award, Lightbulb, Users2 } from "lucide-react";

export const metadata = {
  title: "Despre — OWH STUDIO",
  description:
    "Află povestea OWH STUDIO: echipa, metodologia și impactul cultural în Republica Moldova și România.",
};

const piloni = [
  {
    nume: "Cercetare colaborativă",
    descriere:
      "Înainte de filmare, petrecem luni în teren co-creând povești cu comunitățile implicate.",
  },
  {
    nume: "Inovație sustenabilă",
    descriere:
      "Integram tehnologii emergente — volumetrie, AI, XR — cu responsabilitate etică.",
  },
  {
    nume: "Educație & mentorat",
    descriere:
      "Organizăm laboratoare, rezidențe și programe pentru tinerii cineaști din regiune.",
  },
];

export default function DesprePage() {
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
          Identitatea OWH STUDIO
        </h1>
        <p className="max-w-2xl text-sm text-neutral-300">
          Din 2000, OWH STUDIO dezvoltă proiecte cinematografice și programe
          culturale menite să stimuleze dialogul și să creeze spații de întâlnire
          între artiști, comunități și public.
        </p>
      </header>

      <section className="mt-16 grid gap-8 md:grid-cols-3">
        {piloni.map((pilon) => (
          <article
            key={pilon.nume}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <Lightbulb className="size-6 text-orange-300" />
            <h2 className="mt-4 text-xl font-semibold text-white">
              {pilon.nume}
            </h2>
            <p className="mt-3 text-sm text-neutral-200">{pilon.descriere}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-200">
          <h2 className="text-lg font-semibold text-white">
            Echipa multidisciplinară
          </h2>
          <p className="mt-4">
            32 de profesioniști: regizori, producători, sound designeri,
            dramaturgi, specialiști XR, manageri de distribuție și facilitatori
            comunitari.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-200">
          <h2 className="text-lg font-semibold text-white">
            Spații și infrastructură
          </h2>
          <p className="mt-4">
            Studiouri modulare, cinema 4K, mix stage Dolby Atmos, laborator AI &
            volumetrie, spațiu expozițional și birouri deschise pentru rezidenți.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-neutral-200">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Impact
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Proiecte culturale pe termen lung
            </h2>
          </div>
          <Users2 className="size-12 text-orange-300" />
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          <li>• CRONOGRAF — festival internațional de film documentar</li>
          <li>• OWH Play — platformă OTT pentru cinema independent</li>
          <li>• Laborator de storytelling pentru liceeni și studenți</li>
        </ul>
      </section>

      <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-neutral-200">
        <div className="flex items-center gap-3">
          <Award className="size-6 text-orange-300" />
          <h2 className="text-lg font-semibold text-white">
            Premii și recunoașteri
          </h2>
        </div>
        <p className="mt-4">
          Proiectele OWH STUDIO au fost premiate la IDFA, Sarajevo, TIFF,
          DocLisboa și Astana Film Festival. S-au obținut granturi Creative
          Europe, AFCN, UN Women și New Europe College.
        </p>
      </section>
    </div>
  );
}
