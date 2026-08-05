import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, Phone, Twitter, Instagram, Linkedin } from "lucide-react";

import { Button } from "@/components/base/buttons/button";
import { LeadForm } from "@/components/LeadForm";
import { CircleBadge } from "@/components/CircleBadge";
import { HeroEmailForm } from "@/components/HeroEmailForm";


import heroSky from "@/assets/hero-sky.svg";
import aboutBlocks from "@/assets/about-blocks.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const title = "Aztal — Transforming your business with digital growth";
const description =
  "We help businesses in Germany, Austria and Switzerland turn clicks into predictable revenue through strategic design and high-converting websites.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const marqueeTop = ["Mehr Anfragen", "Höhere Konversion", "Markenvertrauen", "Umsatzwachstum"];
const marqueeBottom = ["Skalierbare Systeme", "Marktdominanz", "Qualifizierte Leads", "Planbare Verkäufe"];

const steps = [
  {
    n: "01",
    title: "Design",
    text: "Wir positionieren deine Marke, damit sie den lokalen Markt dominiert, Wettbewerber in den Schatten stellt und sofortiges Vertrauen aufbaut.",
  },
  {
    n: "02",
    title: "Development",
    text: "Wir entwickeln eine schnelle, vertrauenswürdige Plattform, die speziell darauf ausgelegt ist, aus Besuchern kaufbereite Kunden zu machen.",
  },
  {
    n: "03",
    title: "Marketing",
    text: "Wir starten das System und optimieren kontinuierlich deine Performance, um deine monatlichen Anfragen und Verkäufe zu maximieren.",
  },
];

const stats = [
  { value: "10", label: "Jahre Erfahrung" },
  { value: "180+", label: "Abgeschlossene Projekte" },
  { value: "94%", label: "Stammkunden" },
];

const filters = ["Design", "Development", "Marketing"];

const nav = [
  { label: "System", href: "/system" },
  { label: "Pakete", href: "/pakete" },
  { label: "Arbeiten", href: "/arbeiten" },
  { label: "Über AZTAL", href: "/ueber-uns" },
];

function Index() {
  const [activeFilter, setActiveFilter] = useState("Design");

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 border-x border-border">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
            <img src="/logo_aztal.png" alt="Aztal Logo" className="h-7 w-auto object-contain" />
            <span>Aztal<span className="text-primary">.</span></span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8 text-[0.8rem] font-medium text-muted-foreground">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <Button
            href="/kontakt"
            size="sm"
            className="shrink-0 rounded-full px-6 shadow-none"
          >
            Kontakt
          </Button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative bg-background">
          <div className="relative mx-auto max-w-7xl border-x border-border overflow-hidden">
            {/* abstract background constrained to border, placed on the right */}
            <img
              src={heroSky}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-full w-[80%] max-w-3xl object-cover opacity-80 mix-blend-multiply"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 40%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 40%)",
              }}
            />

            <div className="relative z-10 px-5 pb-24 pt-36 md:pb-40 md:pt-48">
              <div className="max-w-3xl">
                <h1 className="mt-7 text-[2.8rem] tracking-tight leading-[1.05] sm:text-6xl lg:text-[4.5rem] font-medium text-foreground">
                  Ein digitales System, das neue Kunden bringt.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  AZTAL baut und betreut für dein Unternehmen in Deutschland, Luxemburg und der Nachbarschaft eine vollständige digitale Präsenz — Marke, Website und laufendes Marketing greifen wie ein System ineinander und liefern messbare Anfragen statt leere Klicks.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4 relative z-10">
                  <Button href="/kontakt" size="lg" className="rounded-full px-8 font-medium shadow-none bg-blue-600 hover:bg-blue-700 text-white">
                    Kostenloses Erstgespräch
                  </Button>
                  <Button href="/system" size="lg" color="secondary" className="rounded-full px-8 font-medium bg-secondary/10 hover:bg-secondary/20 text-foreground shadow-none">
                    Unser System entdecken
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* MARQUEE */}
        <section
          id="services"
          className="overflow-hidden border-y border-border bg-primary py-5 text-primary-foreground"
        >
          <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
            {[...marqueeTop, ...marqueeTop, ...marqueeTop, ...marqueeTop].map((item, i) => (
              <span
                key={`t-${item}-${i}`}
                className="font-display text-2xl font-extrabold uppercase tracking-tight sm:text-4xl"
              >
                {item} <span className="px-3">✦</span>
              </span>
            ))}
          </div>
          <div className="marquee-track-reverse mt-3 flex w-max gap-8 whitespace-nowrap">
            {[...marqueeBottom, ...marqueeBottom, ...marqueeBottom, ...marqueeBottom].map(
              (item, i) => (
                <span
                  key={`b-${item}-${i}`}
                  className="font-display text-2xl font-extrabold uppercase tracking-tight sm:text-4xl"
                >
                  {item} <span className="px-3">✦</span>
                </span>
              ),
            )}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:py-28 border-x border-border">
          <h2 className="max-w-3xl text-3xl leading-[1.05] sm:text-5xl">
            Hör auf, <span className="text-primary">Kunden</span> an deine Wettbewerber zu verlieren
            <span className="text-primary">.</span>
          </h2>
          <p className="mt-7 max-w-xl border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground">
            Deine Website soll nicht nur gut aussehen, sie muss als dein bester Verkäufer agieren. Seit zehn Jahren helfen wir Unternehmen in der gesamten DACH-Region dabei, digitale Werte aufzubauen, die beständig qualifizierte Leads generieren und echtes Wachstum fördern.
          </p>

          <div className="mt-14 grid gap-12 md:grid-cols-[1.45fr_1fr] md:items-center">
            <div className="relative">
              <img
                src={aboutBlocks}
                alt="Abstract block structure symbolising a structured brand foundation"
                width={1200}
                height={900}
                loading="lazy"
                className="w-full rounded-2xl object-cover"
              />
              <CircleBadge className="absolute bottom-6 right-6 hidden rounded-full bg-background/70 backdrop-blur sm:grid" />
            </div>
            <dl className="space-y-9">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-5xl font-extrabold text-primary">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="mx-auto max-w-7xl px-5 py-24 border-x border-border">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-primary">
              Prozess
            </span>
            <h2 className="mt-6 text-3xl font-semibold sm:text-5xl">
              Dein Weg zum <span className="text-primary">Erfolg</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-border bg-background p-2 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Visual Area */}
                <div className="relative mb-6 h-56 w-full rounded-[1.5rem] bg-surface/50 border border-border/50 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
                  
                  {/* Abstract UI/Number placeholder */}
                  <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-background shadow-sm border border-border">
                    <span className="font-display text-4xl font-extrabold text-foreground/20 group-hover:text-primary transition-colors">
                      {step.n}
                    </span>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-border" />
                    <div className="h-2 w-2 rounded-full bg-border" />
                  </div>
                </div>

                {/* Text Area */}
                <div className="px-6 pb-8">
                  <h3 className="text-2xl font-semibold">
                    {step.title}
                    <span className="text-primary">.</span>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-7xl px-5 pt-10 pb-20 border-x border-border border-b">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <h2 className="max-w-xl text-[2.5rem] tracking-tight leading-[1.05] sm:text-6xl font-semibold">
                Nachweisbare <span className="text-primary">Ergebnisse</span><br />für ambitionierte<br />Unternehmen<span className="text-primary">.</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Wir messen unseren Erfolg an deinem Wachstum. Sieh, wie wir anderen Unternehmen geholfen haben, Autorität aufzubauen, mehr Marktanteile zu gewinnen und ihre Kundenanfragen drastisch zu steigern.
              </p>
            </div>
            <div className="flex max-w-[22rem] flex-wrap items-center justify-end gap-3 mt-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`rounded-full border px-5 py-2.5 text-center text-[0.65rem] font-medium uppercase tracking-[0.16em] transition-colors ${activeFilter === f
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                >
                  + {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3 md:grid-rows-2">
            <figure className="group relative overflow-hidden rounded-2xl md:row-span-2 bg-surface/50 min-h-[400px]">
              <img
                src={work1}
                alt="Project: brand relaunch for a carpentry business"
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-6 left-6 rounded-full bg-background/90 px-4 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] backdrop-blur">
                Brand relaunch — Bergmann Carpentry
              </figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-2xl md:row-span-2 bg-surface/50 min-h-[400px]">
              <img
                src={work2}
                alt="Project: website for a clinic in Vienna"
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-6 left-6 rounded-full bg-background/90 px-4 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] backdrop-blur">
                Website — Vienna Mitte Clinic
              </figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-2xl bg-surface/50 min-h-[250px]">
              <img
                src={work3}
                alt="Project: local SEO campaign for a Zurich business"
                width={900}
                height={700}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-6 left-6 rounded-full bg-background/90 px-4 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] backdrop-blur">
                Local SEO — Zurich
              </figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-2xl bg-surface/50 min-h-[250px]">
              <img
                src={aboutBlocks}
                alt="Project: Google Ads campaign for a Munich retailer"
                width={900}
                height={700}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-6 left-6 rounded-full bg-background/90 px-4 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] backdrop-blur">
                Google Ads — Munich Retail
              </figcaption>
            </figure>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="grid-bg border-t border-border">
          <div className="mx-auto grid max-w-7xl gap-12 border-x border-border px-5 py-20 md:grid-cols-2 md:items-start md:py-28">
            <div>
              <h2 className="text-3xl leading-[1.05] sm:text-5xl">
                Bereit, dein Geschäft zu <span className="text-primary">skalieren</span>
                <span className="text-primary">?</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Lass kein Geld mehr auf dem Tisch liegen. Sag uns, wo dein Unternehmen feststeckt, und innerhalb von 24 Stunden erhältst du einen klaren, verständlichen Aktionsplan, wie wir dir beim Wachstum helfen können.
              </p>
              <ul className="mt-9 space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="text-primary">✦</span> Feste Pakete ab 1.900 €
                </li>
                <li>
                  <span className="text-primary">✦</span> Kontakte in Deutschland, Österreich und
                  der Schweiz
                </li>
                <li>
                  <span className="text-primary">✦</span> Hosting, Wartung und Support inklusive
                </li>
              </ul>
              <CircleBadge className="mt-10 hidden sm:grid" />
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl border-x border-border flex-col items-center justify-between gap-6 px-5 py-12 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-start">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <div className="flex items-center gap-2 font-display text-base font-extrabold normal-case tracking-tight text-foreground">
              <img src="/logo_aztal.png" alt="Aztal Logo" className="h-6 w-auto object-contain" />
              <span>Aztal<span className="text-primary">.</span></span>
            </div>
            <p>© {new Date().getFullYear()} Aztal Digital Agency. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex items-center gap-4 text-foreground/70">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter className="h-[1.2rem] w-[1.2rem]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram className="h-[1.2rem] w-[1.2rem]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-[1.2rem] w-[1.2rem]" />
              </a>
            </div>
            <p>Terms of Use · Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
