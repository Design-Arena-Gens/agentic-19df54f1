import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OWH STUDIO — Film & Producție Creativă",
  description:
    "OWH STUDIO este un hub creativ din Chișinău dedicat filmului, producției video, emisiunilor și experiențelor cinematografice inovatoare.",
  metadataBase: new URL("https://agentic-19df54f1.vercel.app"),
  openGraph: {
    title: "OWH STUDIO — Film & Producție Creativă",
    description:
      "Arhivă de filme, producție video, emisiuni originale și închirieri de echipamente profesioniste.",
    url: "https://agentic-19df54f1.vercel.app",
    siteName: "OWH STUDIO",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OWH STUDIO — Film & Producție Creativă",
    description:
      "Studio de film și producție video cu arhivă, emisiuni și echipamente premium.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${manrope.variable} bg-neutral-950 text-neutral-100 antialiased`}
      >
        <Navigation />
        <main className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[580px] bg-[radial-gradient(circle_at_top,rgba(255,121,52,0.25),transparent_65%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-32 -z-10 h-[560px] bg-[radial-gradient(circle_at_top_right,rgba(46,127,255,0.22),transparent_70%)] blur-3xl" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
