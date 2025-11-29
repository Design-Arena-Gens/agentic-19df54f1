import Link from "next/link";
import { ArrowLeft, Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contacte — OWH STUDIO",
  description:
    "Contactează echipa OWH STUDIO pentru colaborări, proiecte de film, emisiuni și închirieri de echipamente.",
};

export default function ContactePage() {
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
          Contactează OWH STUDIO
        </h1>
        <p className="max-w-2xl text-sm text-neutral-300">
          Trimite-ne un email sau completează formularul. În maximum 48 de ore
          revenim cu un răspuns dedicat proiectului tău.
        </p>
      </header>

      <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-neutral-200">
          <div className="flex items-center gap-3">
            <Mail className="size-5 text-orange-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Email general
              </p>
              <p className="text-white">hello@owh.studio</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="size-5 text-orange-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Telefon producție
              </p>
              <p className="text-white">+373 60 000 800</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="size-5 text-orange-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Studio & cinema
              </p>
              <p className="text-white">Str. București 72, Chișinău, Moldova</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="size-5 text-orange-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Program
              </p>
              <p className="text-white">Luni - Vineri · 10:00 - 20:00</p>
            </div>
          </div>
        </div>

        <form className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Nume
            </label>
            <input
              type="text"
              placeholder="Numele tău"
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white placeholder:text-neutral-500 focus:border-orange-300 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Email
            </label>
            <input
              type="email"
              placeholder="contact@exemplu.com"
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white placeholder:text-neutral-500 focus:border-orange-300 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Subiect
            </label>
            <input
              type="text"
              placeholder="Co-producție, rental, rezidență..."
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white placeholder:text-neutral-500 focus:border-orange-300 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Mesaj
            </label>
            <textarea
              rows={4}
              placeholder="Descrie-ne ideea sau întrebarea ta."
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white placeholder:text-neutral-500 focus:border-orange-300 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-1"
          >
            Trimite mesajul
          </button>
        </form>
      </section>
    </div>
  );
}
