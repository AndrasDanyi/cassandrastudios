import SculptureHero from "@/components/ui/liquid-sculpture-hero"
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer"
import GlassFolder from "@/components/ui/glass-folder-cards"

/* ────────────────────────────────────────────────────────────────────
   Cassandra Studios — landing page
   Hero = liquid-sculpture-hero (WebGL). Sections below use Tailwind.
   Placeholders in [ brackets ] need real, substantiable content.
   ──────────────────────────────────────────────────────────────────── */

const cases = [
  {
    title: "A booking platform for independent coaches",
    problem:
      "Scheduling ran over email and spreadsheets, with constant back-and-forth and missed bookings.",
    build:
      "A client booking flow and an admin dashboard to manage availability, clients, and sessions.",
    outcome: "[ Real outcome — what changed for the client after launch ]",
    meta: "Product design, frontend, backend, payments · Built in 5 weeks",
  },
  {
    title: "[ Project name ]",
    problem: "[ What needed to change? ]",
    build: "[ What did you make? ]",
    outcome: "[ What happened after launch? ]",
    meta: "[ What you handled ] · [ How long it took ]",
  },
]

const steps = [
  { n: 1, title: "Scope it", body: "Agree on users, core features, price, and timeline." },
  { n: 2, title: "Build it", body: "Review working software regularly and resolve questions early." },
  { n: 3, title: "Launch it", body: "Deploy, hand over the code and accounts, and plan next steps." },
]

const reasons = [
  { title: "Direct access", body: "You work with the person building your product — no account managers, no handoffs." },
  { title: "Written fixed scope", body: "Scope, price, and timeline agreed in writing before work begins." },
  { title: "Full code ownership", body: "You own the code and accounts. Regular demos keep you in control throughout." },
]

const faqs = [
  {
    q: "What kinds of projects are a good fit?",
    a: "[ The sweet spot: focused web apps with one clear core use case, founders validating an idea, replacing a manual workflow. ]",
  },
  {
    q: "How do you set the price?",
    a: "[ Fixed scope agreed upfront, priced by the work involved rather than hourly, confirmed in writing before starting. ]",
  },
  {
    q: "What happens if the scope changes?",
    a: "[ Changes are discussed openly, re-scoped and re-quoted as a small change order, timeline adjusted transparently. ]",
  },
  {
    q: "Who owns the code and accounts?",
    a: "[ You own all code and accounts, handed over in full at launch. ]",
  },
  {
    q: "What support is available after launch?",
    a: "[ 30 days of launch support, plus options for ongoing work if wanted. ]",
  },
  {
    q: "Can you work with an existing design or codebase?",
    a: "[ How you handle existing designs, repos, or partial builds. ]",
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
      {children}
    </p>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ── Hero: liquid sculpture ─────────────────────────────────── */}
      <SculptureHero
        brand="Cassandra"
        navLinks={[
          { label: "Work", href: "#work" },
          { label: "Process", href: "#process" },
          { label: "Pricing", href: "#pricing" },
          { label: "About", href: "#about" },
        ]}
        navCta={{ label: "Discuss your project", href: "#contact" }}
        eyebrow="Fixed-scope builds · You own the code"
        headline={"From idea to a\nworking product."}
        headlineAccent="working product."
        body="I help founders turn a clear problem into a focused web app they can put in front of real users — with scope, timeline, and price agreed upfront."
        primaryCta={{ label: "Discuss your project", href: "#contact" }}
        secondaryCta={{ label: "See selected work", href: "#work" }}
        backdropText="Cassandra"
        theme="light"
      />

      {/* ── Trust strip ────────────────────────────────────────────── */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <Eyebrow>Proof</Eyebrow>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            {[
              "[ Shipped product ]",
              "[ Relevant experience ]",
              "[ Client name — with permission ]",
              "[ Short testimonial ]",
              "[ Self-initiated project — if early ]",
            ].map((c) => (
              <span key={c} className="rounded-full border border-dashed border-border px-4 py-1.5">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected work ──────────────────────────────────────────── */}
      <section id="work" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight">A few things I've built.</h2>
          <p className="mb-9 max-w-xl text-muted-foreground">
            Real problems, real builds, real outcomes. Replace the placeholder figures with results
            you can substantiate — don't invent metrics.
          </p>
          <div className="grid gap-5">
            {cases.map((c) => (
              <article key={c.title} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="mb-4 text-xl font-semibold tracking-tight">{c.title}</h3>
                <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-[110px_1fr]">
                  {[
                    ["Problem", c.problem],
                    ["Build", c.build],
                    ["Outcome", c.outcome],
                  ].map(([k, v]) => (
                    <div key={k} className="contents">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:pt-0.5">
                        {k}
                      </dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 border-t border-border pt-4 text-sm text-muted-foreground">
                  Role &amp; timeline: {c.meta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Glass folders showcase ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-border">
        {/* dotted desk */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 text-foreground opacity-[0.1]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1.1px, transparent 1.4px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Eyebrow>Inside the studio</Eyebrow>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight">Open a folder, take a look.</h2>
          <p className="mb-12 max-w-xl text-muted-foreground">
            How the work is organised — from first brief to shipped product. Hover to lean a folder,
            click to open it.
          </p>
          <div className="grid grid-cols-1 items-end justify-items-center gap-x-14 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            <GlassFolder
              label="Selected work"
              art="aurora"
              seed={3}
              action="none"
              appearDelay={0}
              files={[
                { name: "Coach booking platform", meta: "5 weeks", art: "dusk" },
                { name: "Case study — brief", meta: "PDF" },
                { name: "[ Project name ]", meta: "[ timeline ]", art: "ember" },
              ]}
            />
            <GlassFolder
              label="The process"
              art="none"
              action="more"
              labelPlacement="top-left"
              appearDelay={140}
              files={[
                { name: "01 — Scope it", meta: "Users · features · price" },
                { name: "02 — Build it", meta: "Regular demos" },
                { name: "03 — Launch it", meta: "Deploy · handover" },
                { name: "Working agreement", meta: "PDF · fixed scope" },
              ]}
              menu={[{ label: "See full process" }, { label: "Pricing" }, { label: "Book a call" }]}
            />
            <GlassFolder
              label="Start a project"
              meta="Reply in 1 business day"
              tone="dark"
              art="ember"
              seed={11}
              action="none"
              labelPlacement="top-right"
              appearDelay={280}
              files={[
                { name: "Product Sprint", meta: "from $3,500", art: "verdant" },
                { name: "What I'll need", meta: "A short brief" },
                { name: "hello@cassandrastudios.com", meta: "Email", href: "mailto:hello@cassandrastudios.com" },
              ]}
            />
          </div>
          <p className="mt-14 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Hover to lean · Click to open
          </p>
        </div>
      </section>

      {/* ── The offer / pricing ────────────────────────────────────── */}
      <section id="pricing" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="rounded-3xl bg-primary p-8 text-primary-foreground md:p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] opacity-55">
              The offer
            </p>
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-3xl font-semibold tracking-tight">The Product Sprint</h2>
              <span className="text-xl font-semibold">from $3,500</span>
            </div>
            <p className="mb-6 max-w-xl opacity-75">
              A focused build for founders who need to put one core product in front of users.
            </p>
            <ul className="mb-7 grid gap-2.5">
              {[
                "Product scope and launch plan",
                "Responsive web app for one core use case",
                "Essential integrations, such as sign-in or payments, where appropriate",
                "Deployment, handover, and 30 days of launch support",
              ].map((li) => (
                <li
                  key={li}
                  className="relative pl-6 opacity-90 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-current"
                >
                  {li}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary transition hover:opacity-90"
            >
              Discuss your project
            </a>
            <p className="mt-5 border-t border-white/15 pt-5 text-sm opacity-55">
              Typical delivery: 3–5 weeks, depending on scope. Final price and deliverables agreed in
              writing before work begins. Larger projects available as a separate path.
            </p>
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────────── */}
      <section id="process" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <Eyebrow>Process</Eyebrow>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight">Three steps, no surprises.</h2>
          <p className="mb-9 max-w-xl text-muted-foreground">
            A simple, predictable path from first conversation to a product in users' hands.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-7">
                <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {s.n}
                </span>
                <h3 className="mb-1 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why work with me ───────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <Eyebrow>Why work with me</Eyebrow>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight">What you can count on.</h2>
          <p className="mb-9 max-w-xl text-muted-foreground">
            Three specific, credible reasons — edit to what's true for you.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title}>
                <h3 className="mb-1 text-lg font-semibold">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About + testimonial ────────────────────────────────────── */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <Eyebrow>About</Eyebrow>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight">Who you'd be working with.</h2>
          <div className="grid items-start gap-8 md:grid-cols-[1.3fr_1fr]">
            <div className="space-y-4 text-muted-foreground">
              <p>[ Introduce yourself: your name, background, and the kind of products you build. ]</p>
              <p>[ Your relevant experience — years building, domains you know, technologies you reach for. ]</p>
              <p>[ How you work: communication cadence, where you add the most value, what clients can expect. ]</p>
            </div>
            <blockquote className="rounded-2xl border border-border bg-card p-7">
              <p className="mb-4 text-lg">
                "[ A specific, attributable client quote. Keep it concrete — what you did and the
                difference it made. ]"
              </p>
              <footer className="text-sm text-muted-foreground">— [ Name, role, company ]</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight">Questions, answered.</h2>
          <div className="max-w-2xl">
            {faqs.map((f, i) => (
              <details key={f.q} className="group border-b border-border py-4" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
                  {f.q}
                  <span className="text-muted-foreground transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2.5 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────── */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <h2 className="mx-auto mb-3 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            Have a product idea or a workflow that needs fixing?
          </h2>
          <p className="mx-auto mb-7 max-w-md text-muted-foreground">
            Send a short description. I'll reply within one business day and let you know whether it
            looks like a fit.
          </p>
          <a
            href="mailto:hello@cassandrastudios.com?subject=Project%20enquiry"
            className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Tell me about your project
          </a>
        </div>
      </section>

      {/* ── Footer: halftone wordmark ──────────────────────────────── */}
      <HalftoneWordmarkFooter
        wordmark="cassandra"
        label="Cassandra Studios"
        meta="©2026 · Sofia, Bulgaria · VAT BG206817882"
        preset="night"
        columns={[
          {
            title: "Explore",
            links: [
              { label: "Work", href: "#work" },
              { label: "Process", href: "#process" },
              { label: "Pricing", href: "#pricing" },
              { label: "About", href: "#about" },
            ],
          },
          {
            title: "Studio",
            links: [
              { label: "73 Bulgaria blvd." },
              { label: "Sofia 1404, Bulgaria" },
            ],
          },
          {
            title: "Contact",
            links: [
              { label: "hello@cassandrastudios.com", href: "mailto:hello@cassandrastudios.com" },
              { label: "Discuss your project", href: "#contact" },
            ],
          },
        ]}
      />
    </main>
  )
}
