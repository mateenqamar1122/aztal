# 1. Project Overview 

Project: <u>AZTAL.de</u> — flagship marketing website for AZTAL, a full-service digital agency serving SMBs in Germany, Luxembourg, and neighbouring DACH/European markets. 

Parent company: AZTAL is a subsidiary of HamRah Enterprises, founded 2016.[^1] 

Domain for this build: <u>aztal.de</u> (German-market flagship site, distinct from the existing aztal.co). 

Core positioning (locked, do not deviate): 

"Du brauchst keine weitere Agentur, sondern ein digitales System, das neue Kunden bringt." 

(You do not need another agency, you need a digital system that brings new customers.) 

AZTAL is not positioned as three separate services (Design, Development, Marketing). It is positioned as one integrated system where the three pillars feed into each other in a loop. Every page, section, and line of copy must reinforce this "one system, one partner" idea rather than a menu-of-services feel. 

Primary buyer: SMB owners and managing directors in Germany, Luxembourg, and neighbouring markets who are tired of fragmented vendors, unclear ROI, and agencies that don't understand their market. They want a digital presence that measurably brings more customers and revenue. 

Language: German only for the live site (English used internally for review/QA only). 

# 2. Brand System Reference 

All of the following comes directly from the approved AZTAL Branding Guide and must be treated as non-negotiable.[^1] 

# 2.1 Identity 

Company name: AZTAL 

Domain: <u>aztal.de</u> (this build) 

Parent: HamRah Enterprises 

- Founded: 2016 

Model: Three-pillar system — Design, Development, Digital Marketing — run as one integrated loop, not three separate services 

# 2.2 Contact Details (confirm final German contact set before launch) 

Website: <u>aztal.de</u> 

- Email: <u>info@aztal.de</u> 

- Phone/WhatsApp: +49 6831 1652688 

- LinkedIn: <u>linkedin.com/company/aztal</u> 

- Facebook: <u>facebook.com/AZTALco</u> 

# 2.3 Logo 

Custom geometric logomark: two polygons forming a sharp, angular, upward-pointing chevron. Must be implemented as inline SVG using <mark>currentColor</mark> so it adapts automatically to light and dark mode without needing two separate logo files. Must render cleanly at 24px (favicon/nav) and at 200px+ (footer/hero use if needed). 

# 2.4 Color System 

|Token|Hex|Role|
|---|---|---|
|Ocean Blue|#0565FF|Primary accent—CTAs,active states,links|
|Egyptian Blue|#003399|Deep anchor—hover states,emphasis,active/pressed states|
|Blinding White|#F8FCFF|Primary background,light surfaces|
|Bright Black|#202026|Primary text,dark mode surfaces|



## Implementation requirements: 

- Build as CSS custom properties ( <mark>--color-primary</mark> , <mark>--color-primary-hover</mark> , <mark>--color-bg</mark> , <mark>-color-text,</mark> etc.) following the OKLCH/token-based system so light and dark mode both work from the same variable names. 

- Dark mode is mandatory: Bright Black becomes the background surface, Blinding White becomes the text/foreground, Ocean Blue remains the primary accent (may need a slightly lightened variant for AA contrast on dark backgrounds). 

- Shadows must be blue-tinted, never pure black. Example: <mark>box-shadow: 0 4px 16px rgba(5, 101, 255, 0.08);</mark> — this is a signature AZTAL detail and must not be skipped. 

- No gradients on buttons or CTAs. Solid Ocean Blue fills only. 

- No gradient blobs or decorative gradient meshes anywhere on the site. 

- Maximum 1 accent hue (Ocean Blue/Egyptian Blue family) per viewport. Neutrals carry everything else. 

# 2.5 Typography 

- Display / Headings / Wordmark: Inter, weights 400–900 

- Body / UI: Manrope, weights 300–700 

- Load both via Google Fonts with <mark>preconnect</mark> and <mark>display=swap</mark> . 

- Display font (Inter) only at 24px and above (page titles, section headings, hero). 

- Body font (Manrope) for everything 12px–18px (body copy, buttons, nav, labels). 

- Maximum 2 font families on the entire site — no third font introduced anywhere, including footer or legal pages. 

# 2.6 Iconography 

- Phosphor Icons, solid style, rendered with slightly so�ened edges (not sharp/angular). 

- Never place icons inside colored circles or colored rounded squares. This is explicitly banned — use icons at natural size with generous whitespace, or use typography/weight to create hierarchy instead. 

- Icon-only buttons must have <mark>aria-label</mark> and a visible tooltip on hover/focus. 

# 2.7 Shape Language 

- Border radius varies by component size — do not use one uniform radius sitewide. 

   - Small elements (badges, tags, pills): full/pill radius 

   - Medium elements (buttons, inputs, cards): medium radius 

   - Large containers (hero panels, large cards): larger radius, or none at all for full-bleed sections 

- Nested radius must subtract padding: inner-radius = outer-radius − padding, so curves align visually. 

- Borders: alpha-blended (e.g., <mark>oklch(from var(--color-text) l c h / 0.12)</mark> ), never solid flat gray. 

- No colored le�-borders on cards (a common templated/AI-generated pattern) — use surface elevation or shadow instead. 

# 2.8 Motion Identity 

- Scroll-triggered reveals: opacity + subtle vertical movement (translateY 12–24px → 0) as sections enter viewport. 

- Hover-to-reveal abstract micro effects on interactive elements (buttons, cards, links) — used to communicate build quality and cra�smanship, not as pure decoration. 

- Respect <mark>prefers-reduced-motion</mark> — disable all non-essential motion when set. 

- 

- No bouncy/playful easing motion should feel precise and engineered, matching the 

- "high-authority" tone (recommend a controlled ease-out curve, not elastic/spring). 

# 2.9 Brand Voice (copy rules — apply to every string on the site) 

- Second person throughout. Always "du/dein" or formal "Sie/Ihr" (confirm which register with Hamza before copywriting — DACH B2B o�en prefers Sie, but the locked hero copy uses "du," so confirm intended register site-wide before dev starts). 

- Banned words: empowering, seamless, unlock, cutting-edge, and other generic agency buzzwords. Flag and reject any copy containing these during QA. 

- Short, direct sentences. DACH-appropriate precision — no fluff, no filler adjectives. 

- Every claim must be followed by what it concretely means for the reader (outcome, not feature). 

- No centered body paragraphs — le�-align all body text and descriptions. Center only the hero headline and short taglines. 

# 3. Site Architecture (Locked Sitemap) 

Nine main pages plus footer legal pages. This structure is final and approved. 

|#|Page|Slug|Purpose|
|---|---|---|---|
|1|Home|/|System promise,visual proof of the3-pillar loop,routes to<br>Packages/Kontakt|
|2|System|/system|Explains the Design→Development→Marketing loop in depth,routes to3<br>pillar pages|
|3|Design|/design|Dedicated pillar page—brand identity,visual systems,UI/UX|
|4|Development|/development|Dedicated pillar page—websites,web apps,technical build|
|5|Marketing|/marketing|Dedicated pillar page—SEO,paid ads,content,growth|
|6|Pakete|/pakete|Commercial layer— 4packages,pulls from all3pillars|
|7|Arbeiten/<br>Referenzen|/arbeiten|Case studies/proof(placeholder-ready structure,see Section5)|
|8|Über AZTAL|/ueber-uns|Founder story,DACH understanding,trust|
|9|Kontakt|/kontakt|Single CTA—booking/contact form|



Footer only (not in main nav): Impressum, Datenschutz, AGB. 

## Navigation requirements: 

- Primary nav: Home (logo), System, Pakete, Arbeiten, Über AZTAL, Kontakt (as a distinct CTA button, not a plain nav link). 

- Design/Development/Marketing pillar pages are accessed via the System page and via footer/sitemap links, not cluttering the main nav — this keeps top-level nav to 5 items + 1 CTA, which fits mobile nav patterns (5 or fewer items before requiring a hamburger). 

- Sticky header on scroll, with the Kontakt CTA always visible. 

4. Page-by-Page Content Map 

# 4.1 Home (/) 

Goal: Convince a DACH SMB owner that AZTAL is the one system replacing fragmented vendors, then move them to Pakete or Kontakt. 

Sections in order: 

## 1. Hero 

   - Headline: "Du brauchst keine weitere Agentur, sondern ein digitales System, das neue Kunden bringt." 

   - Subheadline: "AZTAL baut und betreut für dein Unternehmen in Deutschland, Luxemburg und der Nachbarscha� eine vollständige digitale Präsenz — Marke, Website und laufendes Marketing greifen wie ein System ineinander und liefern messbare Anfragen statt leere Klicks." 

   - Primary CTA: "Kostenloses Erstgespräch" → links to <mark>/kontakt</mark> 

   - Secondary CTA: "Unser System entdecken" → links to <mark>/system</mark> 

   - Motion: headline/subheadline fade+rise on load; no gradient background, use a restrained blue-tinted depth treatment only (per Section 2.4) 

2. Three-Pillar System, explained visually 

   - Visual must depict a loop, not a flat 3-column grid (explicit anti-pattern to avoid — see Section 8) 

   - Design → Development → Marketing → back to Design, shown as a continuous cycle (SVG path animation on scroll is appropriate here given the Motion Identity) 

   - One outcome-focused line per pillar (not feature lists) 

   - Each pillar links to its dedicated page ( <mark>/design</mark> , <mark>/development</mark> , <mark>/marketing</mark> ) 

3. Why one system beats three vendors 

   - Direct, slightly confrontational section naming the actual pain: separate agencies, no one owns the outcome, unclear reporting 

This is differentiation copy — be specific, not generic 

4. Proof / Results — placeholder-ready (see Section 5 for full spec) 

5. Packages Overview 

   - Visual preview of the 4 tiers: Brand Foundation, Digital Presence Build, Growth Engine, Full System 

   - No pricing shown on Home — link through to <mark>/pakete</mark> for details 

Each tier card links to <mark>/pakete</mark> 

## 6. DACH Understanding / Trust 

Short section on why a DACH-based, DACH-fluent partner matters vs. generic global agencies 

Brief founder mention, full story lives on <mark>/ueber-uns</mark> 

## 7. Final CTA 

Single repeated action: book a call 

No competing second CTA in this section 

CTA rule for entire page: Exactly one primary action type (book a call), reinforced at hero and final section. Secondary CTAs only ever point deeper into the site, never a second competing conversion path. 

# 4.2 System ( <mark>/system</mark> ) 

Goal: Explain how Design, Development, and Marketing work as one continuous loop, and route visitors into the specific pillar page matching their interest. 

## Sections in order: 

1. Header/Intro — restate the core promise: the pillars feed each other in a loop; this is a pagetitle moment, not a second hero 

2. The Loop, explained in sequence — step-by-step walkthrough: Design → Development → Marketing → back to Design. Each step: what happens, why it matters, what the client sees " " 

as output. This is where the full one system beats three vendors argument gets developed (Home only teases it) 

3. Three Pillar Cards — pillar name, one-line outcome, 2–3 concrete deliverables, link to dedicated page. This is the direct handoff into <mark>/design</mark> , <mark>/development</mark> , <mark>/marketing</mark> 

4. How Engagement Works — brief version of the intake-to-execution sequence (diagnostic → roadmap → proposal → execution → reporting). Enough to build confidence without exposing full internal process 

5. CTA — one primary action (book a call), one secondary link (view Pakete) 

# 4.3 Design, Development, Marketing <mark>(/design, /development, /marketing</mark> ) 

Status: Content maps for these three pillar pages are the next planning step — not yet locked. They should share one consistent template structure (hero framing the pillar's role in the loop → outcomes → deliverables → how it connects to the other two pillars → CTA), but exact section copy is pending. Build the template flexibly enough to accommodate this shared structure once finalized. 

# 4.4 Pakete, Arbeiten, Über AZTAL, Kontakt 

Status: Content maps pending — not yet locked. Structure these as standard pages for now (hero/title + body + CTA) and expect detailed section specs in a follow-up brief. Do not finalize final copy or exact section counts for these four pages yet. 

# 5. Proof / Results Section — Placeholder Logic (Build Now) 

Since real client case studies are not yet ready, build this section fully functional with clearly structured placeholder content so it requires zero redesign when real data arrives. 

Structure: 3 result cards in a row (stacking to 1 column on mobile). 

## Each card contains: 

- Industry/client type label (e.g., "Handwerksbetrieb, Süddeutschland") — deliberately generic/anonymized, not a real company name 

- One large metric-style callout (e.g., "+140% Anfragen", "6 Wochen bis Launch", "3× mehr Kunden") — use <mark>tabular-nums</mark> styling, and prepare a simple count-up animation on scrollinto-view 

- One line of context underneath the metric 

- No photos required for placeholders; use a simple neutral icon or abstract graphic element consistent with brand shape language (no icon-in-circle) 

Data structure (for easy swap later): Store these as a simple array/object (industry, metric, context) so a developer or CMS editor can replace 3 objects without touching layout/markup. 

# 6. Technical Requirements 

# 6.1 Stack 

- Confirm with Hamza whether this build uses WordPress + Elementor (AZTAL's typical client stack) or a custom-coded build. Given this is AZTAL's own flagship site, a customcoded build (static HTML/CSS/JS or a lightweight framework) is worth strong consideration - — 

- for full design control and top tier performance raise this decision explicitly before development starts. 

- If WordPress/Elementor: build from Figma exports, page by page, matching the design system tokens exactly (no default Elementor styling). 

# 6.2 Responsive & Mobile 

Mobile-first: design and test at 375px before scaling up. 

- Breakpoints to test: 375px, 390px, 768px, 1024px, 1280px+. 

- Touch targets minimum 44×44px sitewide. 

- Nav collapses to hamburger on mobile (5 main items fits a bottom bar or clean hamburger, per brand simplicity). 

- Loop visual on Home/System must have a clear mobile fallback (e.g., vertical stacked sequence instead of circular loop graphic). 

# 6.3 Dark Mode 

- Mandatory, toggle-based (not just system-preference-only), following the token system in Section 2.4. 

- Verify all text/background combinations meet WCAG AA contrast in both modes, especially Ocean Blue on Bright Black and Bright Black text on Blinding White. 

# 6.4 Performance 

- Target: LCP < 1.5s, CLS < 0.1, INP < 200ms (informational site targets). 

- Total page weight under 800KB initial load where possible. 

- All images: <mark>loading="lazy", decoding="async"</mark> , explicit width/height, WebP/AVIF format. 

- Fonts preconnected, <mark>font-display: swap</mark> . 

# 6.5 SEO Foundation 

- German-language on-page SEO for all pages (title tags, meta descriptions, H1 hierarchy) — exact keyword mapping to be delivered in a separate keyword map document before copywriting finalizes. 

- Schema markup: Organization schema at minimum, LocalBusiness if a physical DACH presence is confirmed. 

- Clean URL structure per the slugs in Section 3. 

- XML sitemap, robots.txt, and Core Web Vitals compliance. 

- <mark>Impressum</mark> , <mark>Datenschutz, AGB</mark> pages are legally mandatory in Germany — must be live before launch, non-negotiable. 

# 6.6 Accessibility 

- Semantic HTML throughout <mark>(header</mark> , <mark>nav, main, section, footer)</mark> . 

- One <mark><h1></mark> per page, correct heading hierarchy, no skipped levels. 

- Visible focus states on all interactive elements <mark>(:focus-visible</mark> ). 

- Alt text on every image; decorative images use <mark>alt="".</mark> 

- Skip-to-content link as first focusable element. 

# 6.7 Analytics & Tracking 

- GA4, Meta Pixel (if paid social planned), Google Tag Manager — confirm exact list with ' 

- Hamza before dev, this may follow AZTALs standard client setup pattern. 

- Cookie banner required under German/EU law (DSGVO-compliant), e.g., Complianz or Borlabs Cookie if WordPress, or custom-built consent banner if custom stack. 

# 7. Content & Copy Status 

|Page|Content map status|Copy status|
|---|---|---|
|Home|Locked|Pending|
|System|Locked|Pending|
|Design|Pending|Pending|
|Development|Pending|Pending|
|Marketing|Pending|Pending|
|Pakete|Pending|Pending|
|Arbeiten|Pending|Pending|
|Über AZTAL|Pending|Pending|
|Kontakt|Pending|Pending|



Do not write final copy for any page until its content map is explicitly locked. Home and 

System content maps are locked and can move into wireframing/design now; the remaining six pages need their content maps finalized before design or copy begins. 

# 8. Explicit Anti-Patterns (Do Not Build These) 

- — - - This is a high authority brand generic AI agency template aesthetics must be actively avoided: 

- No 3-column icon-in-colored-circle feature grids (the most common templated layout — use the loop visual, asymmetric cards, or narrative flow instead) 

- No purple/blue gradient meshes or glowing orb backgrounds 

- No gradient-filled CTA buttons — solid Ocean Blue only 

- No centered body paragraphs — le�-align all descriptive text 

- No colored le�-border accents on cards 

- No uniform border-radius across all components — vary by size per Section 2.7 

- No stock-photo-style generic business imagery — if photography is used, it should feel specific and DACH-grounded, not generic Shutterstock energy 

No emoji as design elements anywhere on the site 

# 9. Immediate Next Steps (In Order) 

1. Confirm formal address register (du vs. Sie) sitewide before any copywriting begins. 

2. Lock content maps for Design, Development, Marketing pillar pages (shared template, page-specific content). 

3. Lock content maps for Pakete, Arbeiten, Über AZTAL, Kontakt. 

4. Deliver full German copy for Home and System (content maps already locked). 

5. Confirm tech stack decision (custom build vs. WordPress/Elementor) before wireframing starts. 

6. Build low-fidelity wireframes in Figma following the locked content maps, before any visual design work begins. 

7. Build high-fidelity Figma designs using the token system in Section 2, validate against the anti-pattern list in Section 8. 

8. Hand off to development with this brief plus finalized Figma files. 

This brief reflects locked decisions as of August 4, 2026. Sections marked "Pending" require follow-up planning sessions before development can proceed on those pages. 

# References 

1. <u>aztal-branding-guide.md</u> 

