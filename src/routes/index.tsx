import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, Phone, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/base/buttons/button";
import { LeadForm } from "@/components/LeadForm";
import { CircleBadge } from "@/components/CircleBadge";
import { HeroEmailForm } from "@/components/HeroEmailForm";


import heroSky from "@/assets/hero-sky.svg";
import aboutBlocks from "@/assets/about-blocks.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const title = "Aztal — Branding, Web & Marketing for Small Businesses";
const description =
  "A digital agency for small businesses in Germany, Austria and Switzerland. Branding, web development and marketing with fixed packages and a free intro call within 24 hours.";

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

const marqueeTop = ["Branding", "Illustrations", "Development", "Animation"];
const marqueeBottom = ["Digital Marketing", "UI/UX Design", "Copywriting", "Local SEO"];

const steps = [
  {
    n: "01",
    title: "Understanding\nthe brief",
    text: "We listen first: goals, audience, competitors. You leave the call knowing what your presence will cost and what it should return.",
  },
  {
    n: "02",
    title: "Strategy\n& research",
    text: "Positioning, brand story and channel plan — built for the German-speaking market and sized to your budget.",
  },
  {
    n: "03",
    title: "Design\nprocess",
    text: "Logo, website and content take shape in short review rounds. You see every step before anything goes live.",
  },
  {
    n: "04",
    title: "Launch\n& growth",
    text: "We ship, measure enquiries and optimise monthly — SEO, ads and content from one team.",
  },
];

const stats = [
  { value: "10", label: "Years experience" },
  { value: "180+", label: "Completed projects" },
  { value: "94%", label: "Clients who stay" },
];

const filters = ["Design", "Development", "Marketing", "Copywriting"];

const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4">
        <div className="pointer-events-auto mx-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-border/70 bg-background/80 py-2 pl-5 pr-2 shadow-[0_10px_40px_-16px_rgba(36,35,35,0.45)] backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
            <img src="/logo_aztal.png" alt="Aztal Logo" className="h-7 w-auto object-contain" />
            <span>Aztal<span className="text-primary">.</span></span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-6 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              {nav.map((item, i) => (
                <span key={item.label} className="flex items-center gap-6">
                  <a href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                  {i < nav.length - 1 && <span className="text-border">·</span>}
                </span>
              ))}
            </nav>
          </div>

          <Button
            href="#contact"
            size="md"
            iconLeading={Phone}
            className="shrink-0 rounded-full px-5"
          >
            Work with us
          </Button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="relative overflow-hidden"
        >
          {/* sky backdrop */}
          <img
            src={heroSky}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 55%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 55%, transparent 100%)",
            }}
          />

          {/* cinematic grey gradient rising from the bottom to mid-text */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
            style={{
              background:
                "linear-gradient(to top, color-mix(in oklab, var(--foreground) 26%, transparent) 0%, color-mix(in oklab, var(--foreground) 10%, transparent) 38%, transparent 100%)",
            }}
          />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 pb-24 pt-36 text-center md:pb-32 md:pt-44">
            <span className="rounded-full border border-border bg-background/70 px-4 py-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground backdrop-blur">
              Branding · Web · Marketing
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-7 bg-clip-text text-[2.6rem] leading-[0.94] text-transparent sm:text-6xl lg:text-7xl"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, var(--foreground) 30%, color-mix(in oklab, var(--foreground) 32%, white) 100%)",
              }}
            >
              One <span className="text-primary">brilliant</span> idea can change your business
              <span className="text-primary">.</span>
            </motion.h1>


            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              A digital agency for small businesses in Germany, Austria and Switzerland. Fixed
              packages, plain language and a free intro call within 24 hours.
            </p>

            <HeroEmailForm className="mt-10 relative z-10" />

            <div className="mt-12 w-full flex justify-center pointer-events-none select-none">
              <img
                src="/hero_flow.svg"
                alt="Workflow representation"
                className="w-full max-w-3xl scale-110 md:scale-125 object-contain drop-shadow-md"
              />
            </div>

          </div>
        </motion.section>


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
        <motion.section 
          id="about" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl px-5 py-20 md:py-28"
        >
          <h2 className="max-w-3xl text-3xl leading-[1.05] sm:text-5xl">
            Bringing <span className="text-primary">brands</span> to life with strategy and design
            <span className="text-primary">.</span>
          </h2>
          <p className="mt-7 max-w-xl border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground">
            Small businesses don't need agency folklore, they need results. For ten years we've
            helped owners in Germany, Austria and Switzerland solve problems with design — in plain
            language, with fixed packages, from trades to clinics.
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
        </motion.section>

        {/* PROCESS */}
        <motion.section 
          id="process" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl px-5 pb-20"
        >
          <div className="border-t border-border">
            {steps.map((step, i) => (
              <article
                key={step.n}
                className={`group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-b border-border py-12 md:grid-cols-[1.1fr_1fr_auto] ${i % 2 === 1 ? "bg-surface/40" : ""
                  }`}
              >
                <div className="relative min-w-0 pl-1">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-4 left-0 select-none font-display text-6xl font-extrabold text-foreground/[0.07] sm:text-7xl"
                  >
                    {step.n}
                  </span>
                  <h3 className="relative whitespace-pre-line text-xl leading-tight sm:text-3xl">
                    {step.title}
                    <span className="text-primary">.</span>
                  </h3>
                </div>
                <p className="col-span-2 max-w-sm text-sm leading-relaxed text-muted-foreground md:col-span-1">
                  {step.text}
                </p>
                <span
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-full border transition-colors sm:h-16 sm:w-16 ${i === 1
                    ? "glow border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}
                >
                  <ArrowDownRight className="h-5 w-5" />
                </span>
              </article>
            ))}
          </div>
        </motion.section>

        {/* WORK */}
        <motion.section 
          id="work" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl px-5 pb-20"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-xl text-3xl leading-[1.05] sm:text-5xl">
                We <span className="text-primary">create</span> and innovate
                <span className="text-primary">.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                We love our clients and we love helping them seize opportunities. Together we build
                ideas that bring enquiries — logos, shops, local SEO and ads.
              </p>
            </div>
            <div className="grid max-w-xs grid-cols-2 gap-2">
              {filters.map((f, i) => (
                <span
                  key={f}
                  className={`rounded-full border px-4 py-2 text-center text-[0.65rem] uppercase tracking-[0.16em] ${i === 0
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground"
                    }`}
                >
                  ✦ {f}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            <figure className="group relative overflow-hidden rounded-2xl md:row-span-2">
              <img
                src={work1}
                alt="Project: brand relaunch for a carpentry business"
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-background/80 px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] backdrop-blur">
                Brand relaunch — Bergmann Carpentry
              </figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-2xl md:row-span-2">
              <img
                src={work2}
                alt="Project: website for a clinic in Vienna"
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-background/80 px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] backdrop-blur">
                Website — Vienna Mitte Clinic
              </figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-2xl">
              <img
                src={work3}
                alt="Project: local SEO campaign for a Zurich business"
                width={900}
                height={700}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-background/80 px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] backdrop-blur">
                Local SEO — Zurich
              </figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-2xl">
              <img
                src={aboutBlocks}
                alt="Project: Google Ads campaign for a Munich retailer"
                width={900}
                height={700}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-background/80 px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] backdrop-blur">
                Google Ads — Munich Retail
              </figcaption>
            </figure>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section 
          id="contact" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid-bg border-t border-border"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-start md:py-28">
            <div>
              <h2 className="text-3xl leading-[1.05] sm:text-5xl">
                Any <span className="text-primary">question</span> for us
                <span className="text-primary">?</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Tell us briefly about your plan. Within 24 hours you'll get an honest assessment
                with a timeline and a price range — no jargon.
              </p>
              <ul className="mt-9 space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="text-primary">✦</span> Fixed packages from €1,900
                </li>
                <li>
                  <span className="text-primary">✦</span> Contacts in Germany, Austria and
                  Switzerland
                </li>
                <li>
                  <span className="text-primary">✦</span> Hosting, maintenance and support included
                </li>
              </ul>
              <CircleBadge className="mt-10 hidden sm:grid" />
            </div>
            <LeadForm />
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-12 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-start">
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
