import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Film,
  LayoutDashboard,
  Sparkles,
  Ticket,
} from "lucide-react";
import {
  filme,
  emisiuni,
  servicii,
  echipamente,
  parteneriate,
  cronografMomente,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-16 lg:flex-row lg:items-end lg:gap-24 lg:px-6 lg:pb-32 lg:pt-24">
        <div className="flex-1 space-y-6">
          <p className="text-xs uppercase tracking-[0.42em] text-orange-400">
            Studio de film & experiențe imersive
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            OWH STUDIO
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-blue-500 bg-clip-text text-transparent">
              {" "}
              creează realități cinematografice
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-neutral-300 sm:text-xl">
            De peste 20 de ani redefinim spațiul documentar și ficțional în
            Europa de Est prin povești curajoase, tehnologie hibridă și o echipă
            multidisciplinară ancorată în Chișinău.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Link
              href="/filme"
              className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-[0_20px_60px_-20px_rgba(255,121,52,0.65)] transition hover:-translate-y-1"
            >
              Explorează arhiva
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/productie-video"
              className="flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-neutral-100 transition hover:border-orange-400/60 hover:text-white"
            >
              Servicii de producție
              <Sparkles className="size-4 text-orange-300" />
            </Link>
          </div>
        </div>
        <div className="flex w-full max-w-sm flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-200 backdrop-blur-xl lg:max-w-md">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.32em] text-neutral-400">
              În cifre
            </span>
            <span className="rounded-full bg-orange-400/15 px-3 py-1 text-xs font-semibold text-orange-200">
              2024
            </span>
          </div>
          <div className="grid gap-5">
            <div>
              <p className="text-4xl font-semibold text-white">128</p>
              <p className="text-neutral-400">proiecte multi-platformă</p>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
            <div>
              <p className="text-4xl font-semibold text-white">24</p>
              <p className="text-neutral-400">
                premii internaționale și selecții oficiale
              </p>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
            <div>
              <p className="text-4xl font-semibold text-white">∞</p>
              <p className="text-neutral-400">
                ore de experiment în laboratorul nostru vizual
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-4 pb-24 lg:px-6 lg:pb-32">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Arhiva de Filme
          </h2>
          <Link
            href="/filme"
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300 transition hover:text-white"
          >
            vezi toate <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {filme.slice(0, 3).map((film) => (
            <Link
              key={film.slug}
              href={`/filme/${film.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition group-hover:opacity-100" />
              <Image
                src={film.imagine}
                alt={film.titlu}
                width={1200}
                height={900}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-neutral-300">
                  <span>{film.gen}</span>
                  <span>{film.an}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {film.titlu}
                </h3>
                <p className="text-sm text-neutral-200">{film.rezumat}</p>
              </div>
            </Link>
          ))}
          <div className="relative overflow-hidden rounded-3xl border border-dashed border-white/15 bg-white/5 p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Program curatoriat
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Cinematografie care regândește realitatea
            </h3>
            <p className="mt-4 text-sm text-neutral-300">
              Fiecare film produs sau co-produs de OWH STUDIO trece printr-un
              proces de cercetare vizuală și dramaturgie colaborativă. Invităm
              regizori, antropologi, coregrafi și ingineri de sunet să creeze
              împreună povești care conectează comunități.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-300">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                Rezidențe de dezvoltare în laboratorul nostru XR
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                Proiecții de lucru cu feedback de la comunități reale
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                Co-producții internaționale și distribuție festivalieră
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 pb-24 lg:px-6 lg:pb-36">
        <div className="absolute inset-0 -z-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        <div className="flex flex-col gap-16 px-6 py-14 lg:px-16">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-300">
              Producție video
            </p>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="text-3xl font-semibold text-white lg:max-w-2xl lg:text-4xl">
                De la concept la distribuție globală
              </h2>
              <Link
                href="/productie-video"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-200 transition hover:border-orange-400/70 hover:text-white"
              >
                briefing nou
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
            <p className="max-w-3xl text-neutral-300">
              Mixăm estetica filmului de autor cu cerințele campaniilor
              globale. Echipele noastre includ storytellers, strategii de brand,
              artiști AI și programatori de instalații interactive.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {servicii.map((serviciu) => (
              <div
                key={serviciu.categorie}
                className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
                  <Sparkles className="size-5 text-orange-300" />
                  {serviciu.categorie}
                </h3>
                <ul className="space-y-3 text-sm text-neutral-300">
                  {serviciu.elemente.map((element) => (
                    <li key={element} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                      <span>{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-24 pt-16 lg:px-6 lg:pb-32">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:w-1/3">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Emisiuni
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Studio hibrid pentru broadcast, streaming și pop-up cinema
            </h2>
            <p className="mt-4 text-sm text-neutral-300">
              Îmbinăm platouri modulare cu scenografie dinamică și sisteme de
              filmare remote pentru producții live impecabile.
            </p>
          </div>
          <div className="grid flex-1 gap-6">
            {emisiuni.map((show) => (
              <div
                key={show.titlu}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-2xl font-semibold text-white">
                    {show.titlu}
                  </h3>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-neutral-300">
                    {show.frecventa}
                  </span>
                </div>
                <p className="mt-4 text-sm text-neutral-300">
                  {show.descriere}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-orange-200">
                  {show.platforme.map((platforma) => (
                    <span
                      key={platforma}
                      className="rounded-full border border-orange-300/30 px-3 py-1"
                    >
                      {platforma}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-12 px-4 pb-24 lg:px-6 lg:pb-32">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
            Rental
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Cinematografie închiriată cu asistență completă
          </h2>
          <p className="max-w-3xl text-sm text-neutral-300">
            Echipa noastră tehnică te sprijină de la preluare la livrare. Seturi
            calibrare LUT, testare rig, transport și asistență pentru filmări
            internaționale.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {echipamente.map((gear) => (
            <div
              key={gear.nume}
              className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-orange-400/60"
            >
              <div className="flex items-center gap-3">
                <Camera className="size-6 text-orange-300" />
                <h3 className="text-lg font-semibold text-white">{gear.nume}</h3>
              </div>
              <p className="text-sm text-neutral-300">{gear.detalii}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-orange-300">
                  {gear.pret}
                </span>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-200 transition hover:border-orange-400/70 hover:text-white">
                  rezervă <ArrowUpRight className="size-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mb-24 overflow-hidden bg-black/40 py-20">
        <div className="absolute -left-12 top-10 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center lg:px-6">
          <div className="flex-1 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-orange-300">
              Bilete
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Experiențe cinematografice curatoriate
            </h2>
            <p className="text-sm text-neutral-300">
              Proiecții imersive, concerte vizuale și premiere speciale în
              micro-cinema-ul nostru cu 54 de locuri și sunet 7.1.
            </p>
            <ul className="space-y-3 text-sm text-neutral-200">
              <li className="flex items-center gap-3">
                <Film className="size-5 text-orange-300" />
                Premieră „Lumina din Noapte” · 12 aprilie · invitați Q&A live
              </li>
              <li className="flex items-center gap-3">
                <Ticket className="size-5 text-orange-300" />
                Cine-concert „Corpul Sonor” cu mixaj surround improvizat
              </li>
              <li className="flex items-center gap-3">
                <LayoutDashboard className="size-5 text-orange-300" />
                Immersive lab: Work-in-progress screening + feedback
              </li>
            </ul>
            <Link
              href="/bilete"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-1"
            >
              Rezervă acum
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 text-sm text-neutral-200">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="uppercase tracking-[0.3em] text-neutral-400">
                  Seria
                </span>
                <span>OWH Immersive Nights</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="uppercase tracking-[0.3em] text-neutral-400">
                  Locație
                </span>
                <span>Studioul OWH · Str. București 72</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="uppercase tracking-[0.3em] text-neutral-400">
                  Format
                </span>
                <span>4K DCP · Sunet 7.1 · Instalație lumini reactive</span>
              </div>
              <div className="flex justify-between">
                <span className="uppercase tracking-[0.3em] text-neutral-400">
                  Capacitate
                </span>
                <span>54 locuri · 3 tipuri de abonamente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-12 px-4 pb-24 lg:px-6 lg:pb-32">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Despre
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Un mediu în care cercetarea și experimentul întâlnesc comunitatea
            </h2>
            <p className="text-sm text-neutral-300">
              OWH STUDIO înseamnă o echipă de regizori, producători, artiști
              vizuali și ingineri de sunet care construiesc povești cu impact
              social și estetic. Creăm spații sigure pentru colaborare și
              transformăm procesele de producție în experiențe participative.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  Valorile noastre
                </p>
                <ul className="mt-4 space-y-3 text-sm text-neutral-200">
                  <li>• Transparență în proces și bugete</li>
                  <li>• Etică documentară și grijă față de protagoniste</li>
                  <li>• Inovație tehnologică responsabilă</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  Laboratorul nostru
                </p>
                <ul className="mt-4 space-y-3 text-sm text-neutral-200">
                  <li>• Cinema XR cu servere Unreal Engine</li>
                  <li>• Studio audio Dolby Atmos & Foley</li>
                  <li>• Incubatoare anuale pentru regizori emergenți</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Parteneriate cheie
            </p>
            <ul className="space-y-5 text-sm text-neutral-200">
              {parteneriate.map((parteneriat) => (
                <li key={parteneriat.titlu}>
                  <p className="font-semibold text-white">
                    {parteneriat.titlu}
                  </p>
                  <p className="text-neutral-400">{parteneriat.an}</p>
                  <p className="mt-2">{parteneriat.descriere}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-24 lg:px-6 lg:pb-32">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-black/60 p-8 lg:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-300">
                Contacte
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Hai să construim următoarea producție împreună
              </h2>
              <p className="text-sm text-neutral-200">
                Scrie-ne despre proiectul tău, atașează linkuri de referință și
                echipa noastră îți va răspunde în maximum 48h cu un plan de
                producție modular.
              </p>
              <div className="grid gap-4 text-sm text-neutral-200 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-white">Email producție</p>
                  <p>production@owh.studio</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Rezidențe & lab</p>
                  <p>lab@owh.studio</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Telefon</p>
                  <p>+373 60 000 800</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Adresă</p>
                  <p>Str. București 72, Chișinău</p>
                </div>
              </div>
            </div>
            <form className="w-full max-w-xl space-y-5">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Nume & Rol
                </label>
                <input
                  type="text"
                  placeholder="Ana Pop — Producătoare"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white placeholder:text-neutral-500 focus:border-orange-300 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="hello@echipastudio.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white placeholder:text-neutral-500 focus:border-orange-300 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Pitch & nevoi
                </label>
                <textarea
                  rows={4}
                  placeholder="Descrie proiectul, timeline-ul și obiectivele vizuale..."
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white placeholder:text-neutral-500 focus:border-orange-300 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-1"
              >
                Trimite briefing
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-12 px-4 pb-32 lg:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              CRONOGRAF
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Festivalul care transformă Chișinăul într-un ecran viu
            </h2>
          </div>
          <Link
            href="/cronograf"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-200 transition hover:border-orange-400/70 hover:text-white"
          >
            descoperă cronograf
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="absolute left-3 top-0 h-full border-l border-dashed border-white/15 sm:left-6 lg:left-8" />
          <ul className="space-y-10">
            {cronografMomente.map((moment) => (
              <li
                key={moment.an}
                className="relative ml-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:ml-10 lg:ml-12"
              >
                <span className="absolute -left-8 top-6 flex size-10 items-center justify-center rounded-full border border-orange-300/50 bg-neutral-950 text-sm font-semibold text-orange-200 sm:-left-11">
                  {moment.an}
                </span>
                <p className="text-sm text-neutral-200">{moment.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
