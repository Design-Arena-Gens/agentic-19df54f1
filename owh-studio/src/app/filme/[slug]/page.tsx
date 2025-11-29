import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, CalendarRange, Clock3, Share2 } from "lucide-react";
import type { Metadata } from "next";
import { filme } from "@/lib/data";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return filme.map((film) => ({
    slug: film.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const film = filme.find((item) => item.slug === slug);
  if (!film) {
    return {
      title: "Film inexistent — OWH STUDIO",
    };
  }

  return {
    title: `${film.titlu} — OWH STUDIO`,
    description: film.rezumat,
    openGraph: {
      title: film.titlu,
      description: film.rezumat,
      images: [{ url: film.imagine }],
    },
  };
}

export default async function FilmDetail({ params }: Props) {
  const { slug } = params;
  const film = filme.find((item) => item.slug === slug);

  if (!film) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-28 pt-16 lg:px-6">
      <Link
        href="/filme"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-400 hover:text-white"
      >
        <ArrowLeft className="size-4" />
        Înapoi la arhivă
      </Link>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src={film.imagine}
              alt={film.titlu}
              width={1600}
              height={1200}
              className="h-[460px] w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black via-black/30 to-transparent p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-300">
                  {film.gen}
                </p>
                <h1 className="mt-2 text-4xl font-semibold text-white">
                  {film.titlu}
                </h1>
              </div>
              <div className="flex gap-3 text-xs uppercase tracking-[0.3em] text-neutral-200">
                <span>{film.an}</span>
                <span>{film.durata}</span>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-8 text-sm text-neutral-200">
            <p className="text-lg text-white">{film.rezumat}</p>
            <p>{film.descriere}</p>
            <p>
              Lansările filmului sunt însoțite de sesiuni de feedback cu
              publicul, expoziții foto și performance-uri audio-visuale create
              împreună cu artiști locali.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Preview
            </p>
            <p className="mt-3 text-sm text-neutral-200">
              Disponibil pentru festivaluri și platforme OTT în format DCP 4K,
              ProRes HQ și streaming securizat.
            </p>
            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-1">
              Invită la proiecție
              <Share2 className="size-4" />
            </button>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-200">
            <div className="flex items-center gap-3">
              <CalendarRange className="size-5 text-orange-300" />
              <span>Filmări: 48 de zile în România & Moldova</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 className="size-5 text-orange-300" />
              <span>Post-producție: 6 luni · colorizare Dolby Vision</span>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Premii
              </p>
              <ul className="space-y-2">
                {film.premii.map((premiu) => (
                  <li
                    key={premiu}
                    className="flex items-center gap-3 rounded-2xl border border-orange-400/30 bg-orange-400/10 px-4 py-3 text-sm text-orange-100"
                  >
                    <Award className="size-4" />
                    {premiu}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-6 text-sm text-neutral-200">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Distribuție
            </p>
            <ul className="mt-4 space-y-2">
              <li>• Festivaluri: CRONOGRAF, Sarajevo, IDFA, TIFF</li>
              <li>• Platforme: OWH Play, MUBI, Arte Concert</li>
              <li>• Proiecții comunitare: proiecte educaționale în licee</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
