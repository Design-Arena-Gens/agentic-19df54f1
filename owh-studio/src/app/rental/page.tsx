import Link from "next/link";
import { ArrowLeft, BadgeCheck, CalendarClock, Camera, Truck } from "lucide-react";
import { echipamente } from "@/lib/data";

export const metadata = {
  title: "Rental — OWH STUDIO",
  description:
    "Camera, lumină și sunet premium de închiriat, cu asistență tehnică completă și logistică internațională.",
};

const beneficii = [
  "Kituri personalizate pentru reclame, documentare și evenimente live",
  "Asistență tehnică on-set 24/7 și operatori certificați",
  "Transport național și internațional inclus opțional",
  "Service rapid și backup garantat pentru produsele cheie",
];

export default function RentalPage() {
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
          Rental cinematografie & lumină
        </h1>
        <p className="max-w-2xl text-sm text-neutral-300">
          Selectăm echipamente premium, calibrate și testate înainte fiecare
          livrare. Echipa noastră tehnică se ocupă de configurare, LUT-uri și
          suport pe set.
        </p>
      </header>

      <section className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {echipamente.map((gear) => (
          <article
            key={gear.nume}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-3">
              <Camera className="size-6 text-orange-300" />
              <h2 className="text-lg font-semibold text-white">{gear.nume}</h2>
            </div>
            <p className="mt-4 text-sm text-neutral-200">{gear.detalii}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-orange-200">
                {gear.pret}
              </span>
              <button className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-200 transition hover:border-orange-400/70 hover:text-white">
                rezervă
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-3">
            <BadgeCheck className="size-6 text-orange-300" />
            <h2 className="text-2xl font-semibold text-white">
              Garanția OWH Rental
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-neutral-200">
            {beneficii.map((beneficiu) => (
              <li key={beneficiu}>• {beneficiu}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-neutral-200">
          <div className="flex items-center gap-3">
            <Truck className="size-6 text-orange-300" />
            <p>Livrare și returnare rapidă în Chișinău, București, Iași.</p>
          </div>
          <div className="flex items-center gap-3">
            <CalendarClock className="size-6 text-orange-300" />
            <p>Bloc rezervat pentru teste tehnice înainte de fiecare producție.</p>
          </div>
          <p>
            Pentru proiecte de lungă durată sau co-producții internaționale
            pregătim oferte personalizate cu logistică completă și suport pentru
            vize de muncă.
          </p>
        </div>
      </section>
    </div>
  );
}
