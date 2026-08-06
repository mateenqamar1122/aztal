import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, Phone, Twitter, Instagram, Linkedin } from "lucide-react";

import SmoothButton from "@/components/ui/smoothui/smooth-button";
import { LeadForm } from "@/components/LeadForm";
import { CircleBadge } from "@/components/CircleBadge";
import { HeroEmailForm } from "@/components/HeroEmailForm";
import { StripedPattern } from "@/components/ui/striped-pattern";


import designSvg from "@/assets/Design.svg";
import developmentSvg from "@/assets/development.svg";
import marketingSvg from "@/assets/marketing.svg";

import heroSky from "@/assets/hero-sky.svg";
import aboutBlocks from "@/assets/about-blocks.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

import ExpandableCards from "@/components/ui/smoothui/expandable-cards";

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
    image: designSvg,
  },
  {
    n: "02",
    title: "Development",
    text: "Wir entwickeln eine schnelle, vertrauenswürdige Plattform, die speziell darauf ausgelegt ist, aus Besuchern kaufbereite Kunden zu machen.",
    image: developmentSvg,
  },
  {
    n: "03",
    title: "Marketing",
    text: "Wir starten das System und optimieren kontinuierlich deine Performance, um deine monatlichen Anfragen und Verkäufe zu maximieren.",
    image: marketingSvg,
  },
];

const workCards = [
  {
    id: 1,
    title: "Brand relaunch — Bergmann Carpentry",
    content: "Wir messen unseren Erfolg an deinem Wachstum. Sieh, wie wir anderen Unternehmen geholfen haben, Autorität aufzubauen.",
    image: work1,
  },
  {
    id: 2,
    title: "Website — Vienna Mitte Clinic",
    content: "Mehr Marktanteile gewinnen und Kundenanfragen drastisch steigern.",
    image: work2,
  },
  {
    id: 3,
    title: "Local SEO — Zurich",
    content: "Lass kein Geld mehr auf dem Tisch liegen. Sag uns, wo dein Unternehmen feststeckt.",
    image: work3,
  },
  {
    id: 4,
    title: "Google Ads — Munich Retail",
    content: "Wir starten das System und optimieren kontinuierlich deine Performance, um deine monatlichen Anfragen und Verkäufe zu maximieren.",
    image: aboutBlocks,
  }
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
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur flex justify-center overflow-hidden">
        <div className="flex-1 relative hidden xl:block">
          <StripedPattern className="stroke-foreground/20 stroke-[0.3px] [stroke-dasharray:8,4]" />
        </div>

        <div className="flex h-16 w-full max-w-7xl shrink-0 items-center justify-between px-5 border-x border-border relative z-10 bg-background/95">
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

          <SmoothButton
            asChild
            size="sm"
            className="shrink-0 rounded-full px-6 shadow-none"
          >
            <a href="/kontakt">Kontakt</a>
          </SmoothButton>
        </div>

        <div className="flex-1 relative hidden xl:block">
          <StripedPattern className="stroke-foreground/20 stroke-[0.3px] [stroke-dasharray:8,4]" />
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
                  <SmoothButton asChild size="lg" className="rounded-full px-8 font-medium shadow-none bg-blue-600 hover:bg-blue-700 text-white">
                    <a href="/kontakt">Kostenloses Erstgespräch</a>
                  </SmoothButton>
                  <SmoothButton asChild size="lg" className="rounded-full px-8 font-medium bg-secondary/10 hover:bg-secondary/20 text-foreground shadow-none">
                    <a href="/system">Unser System entdecken</a>
                  </SmoothButton>
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

        {/* ABOUT / PROBLEMS & SOLUTIONS */}
        <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:py-28 border-x border-border">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
              Hör auf, <span className="text-primary">Kunden</span> an deine Wettbewerber zu verlieren.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Deine Website soll nicht nur gut aussehen, sie muss als dein bester Verkäufer agieren. Hier ist, wie wir deine größten digitalen Herausforderungen lösen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Wide (col-span-2) */}
            <div className="md:col-span-2 rounded-3xl bg-surface/30 border border-border p-8 flex flex-col justify-end min-h-[350px] relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
              
              {/* Abstract Visual Placeholder */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-md flex flex-col items-center gap-4 opacity-80 transition-transform duration-500 group-hover:-translate-y-2 pointer-events-none">
                <div className="flex items-center gap-4 w-full px-4">
                  <div className="w-1/3 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-[0.65rem] uppercase tracking-widest text-muted-foreground shadow-sm">Unsichtbar</div>
                  <div className="flex-1 h-[1px] bg-border relative"><div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-border" /></div>
                  <div className="w-12 h-12 shrink-0 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                  </div>
                  <div className="flex-1 h-[1px] bg-border relative"><div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-border" /></div>
                  <div className="w-1/3 h-12 bg-background border border-primary/30 rounded-xl flex items-center justify-center text-[0.65rem] uppercase tracking-widest font-semibold text-primary shadow-md">Marktführer</div>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold mb-2">Vom unsichtbaren Anbieter zum Marktführer</h3>
                <p className="text-sm text-muted-foreground max-w-md">Viele Unternehmen gehen in der Masse unter. Wir positionieren deine Marke durch gezieltes SEO und Premium-Design so, dass du deine lokale Nische online dominierst.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-surface/30 border border-border p-8 flex flex-col justify-end min-h-[350px] relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
              
              <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col gap-3 w-3/4 opacity-80 transition-transform duration-500 group-hover:-translate-y-2 pointer-events-none">
                <div className="w-4/5 h-10 bg-background border border-border rounded-2xl rounded-bl-none self-start shadow-sm" />
                <div className="w-full h-12 bg-primary text-primary-foreground rounded-2xl rounded-br-none self-end shadow-md flex items-center px-4 text-xs font-medium">Conversion Rate +45%</div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold mb-2">Klicks in Kunden verwandeln</h3>
                <p className="text-sm text-muted-foreground">Viel Traffic bringt nichts ohne Conversion. Wir bauen Websites, die Besucher psychologisch fundiert zu Leads machen.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-surface/30 border border-border p-8 flex flex-col justify-end min-h-[350px] relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
              
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 bg-background border border-border rounded-xl shadow-md p-4 flex flex-col gap-3 opacity-90 transition-transform duration-500 group-hover:-translate-y-2 pointer-events-none">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20" />
                  <div className="flex flex-col gap-1.5">
                    <div className="w-16 h-2 bg-muted rounded-full" />
                    <div className="w-10 h-2 bg-muted/50 rounded-full" />
                  </div>
                </div>
                <div className="w-full h-8 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center text-[10px] text-primary font-semibold">
                  Neuer qualifizierter Lead
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold mb-2">Planbare Anfragen</h3>
                <p className="text-sm text-muted-foreground">Hoffnung ist keine Strategie. Wir implementieren Systeme, die dir monatlich verlässliche Kundenanfragen liefern.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-3xl bg-surface/30 border border-border p-8 flex flex-col justify-end min-h-[350px] relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />
              
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-40 flex items-end justify-center gap-2.5 opacity-90 transition-transform duration-500 group-hover:-translate-y-2 pointer-events-none">
                <div className="w-6 h-8 bg-muted rounded-t-md" />
                <div className="w-6 h-14 bg-muted rounded-t-md" />
                <div className="w-6 h-20 bg-primary/40 rounded-t-md" />
                <div className="w-6 h-28 bg-primary rounded-t-md relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary">+120%</div>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold mb-2">Datengestützte Skalierung</h3>
                <p className="text-sm text-muted-foreground">Wir raten nicht, wir messen. Durch klares Tracking optimieren wir deine Performance laufend für maximalen ROI.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="rounded-3xl bg-surface/30 border border-border p-8 flex flex-col justify-end min-h-[350px] relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none" />
              
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 flex flex-col gap-3 opacity-90 transition-transform duration-500 group-hover:-translate-y-2 pointer-events-none">
                <div className="w-full h-10 bg-background border border-border rounded-lg shadow-sm flex items-center justify-between px-3">
                  <div className="w-20 h-2 bg-muted rounded-full" />
                  <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /></div>
                </div>
                <div className="w-full h-10 bg-background border border-border rounded-lg shadow-sm flex items-center justify-between px-3">
                  <div className="w-16 h-2 bg-muted rounded-full" />
                  <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /></div>
                </div>
                <div className="w-full h-10 bg-background border border-border rounded-lg shadow-sm flex items-center justify-between px-3">
                  <div className="w-12 h-2 bg-muted rounded-full" />
                  <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /></div>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold mb-2">Ein System, kein Chaos</h3>
                <p className="text-sm text-muted-foreground">Schluss mit unzähligen Agenturen, die nicht kommunizieren. Bei uns bekommst du Design und Marketing nahtlos aus einer Hand.</p>
              </div>
            </div>
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
                  <img src={step.image} alt={step.title} className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
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

          </div>

          <ExpandableCards 
            cards={workCards} 
            className="mt-16 w-full" 
            cardClassName="h-[400px]" 
            selectedCard={selectedCard}
            onSelect={setSelectedCard}
          />
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-border overflow-hidden">
          <div className="mx-auto max-w-7xl border-x border-border relative">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <StripedPattern className="stroke-foreground/5 opacity-30 stroke-[0.3px] [stroke-dasharray:8,4]" />
            </div>
            
            <div className="grid gap-12 px-5 py-20 md:grid-cols-2 md:items-start md:py-28 relative z-10">
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
