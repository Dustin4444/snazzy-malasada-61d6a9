import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { NewsletterForm } from '@/components/NewsletterForm'

export const Route = createFileRoute('/')({
  component: Landing,
})

function Landing() {
  return (
    <div className="grain min-h-screen">
      <Nav />
      <Hero />
      <Proof />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
        <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M19.5 19.5l6 6" stroke="var(--color-signal)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="font-display text-[1.7rem] leading-none tracking-tight">Quorum</span>
    </a>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          <a href="#features" className="hover:text-ink">Product</a>
          <a href="#customers" className="hover:text-ink">Customers</a>
          <a href="#memo" className="hover:text-ink">The Memo</a>
        </nav>
        <a
          href="#start"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-signal"
        >
          Start a decision
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-rule">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow rise text-signal">Async decision records · for engineering teams</p>
          <h1
            className="rise mt-6 font-display text-[3.4rem] leading-[0.95] tracking-tight sm:text-7xl lg:text-[6.2rem]"
            style={{ animationDelay: '80ms' }}
          >
            Cancel the meeting.
            <br />
            <em className="text-signal">Keep</em> the decision.
          </h1>
          <p
            className="rise mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: '160ms' }}
          >
            Quorum turns "we should sync on this" into a written proposal, structured input from the
            people who matter, and a decision that's on the record. All of it searchable six months from now.
          </p>
          <div className="rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '240ms' }}>
            <a
              href="#start"
              className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 font-medium text-paper transition-colors hover:bg-signal-deep"
            >
              Try it free for your team
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#features" className="inline-flex items-center gap-1.5 px-2 py-3.5 font-medium underline decoration-rule decoration-2 underline-offset-[6px] hover:decoration-ink">
              See how it works
            </a>
          </div>
          <p className="eyebrow mt-8 text-ink-soft">No credit card · Free up to 10 people</p>
        </div>

        <div className="rise lg:col-span-5" style={{ animationDelay: '320ms' }}>
          <DecisionCard />
        </div>
      </div>
    </section>
  )
}

const stances = [
  { name: 'Priya N.', role: 'Staff Eng', stance: 'Agree', note: 'Cuts our p95 by half on the read path.' },
  { name: 'Marcus O.', role: 'SRE', stance: 'Agree w/ concerns', note: 'Need a rollback plan for the migration.' },
  { name: 'Lena K.', role: 'Eng Manager', stance: 'Agree', note: 'Fits Q3 capacity.' },
  { name: 'Tomás R.', role: 'Backend', stance: 'Disagree', note: 'Prefer we fix the indexes first.' },
]

function DecisionCard() {
  return (
    <div className="relative">
      <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-sm border border-ink lg:block" aria-hidden="true" />
      <article className="relative rounded-sm border border-ink bg-[#fbf9f4] shadow-[0_30px_60px_-30px_rgba(22,20,15,0.35)]">
        <header className="flex items-center justify-between border-b border-rule px-5 py-3">
          <span className="eyebrow text-ink-soft">DR-0142</span>
          <span className="eyebrow rounded-full bg-signal/10 px-2.5 py-1 text-signal">Deciding · closes Fri</span>
        </header>
        <div className="px-5 pb-5 pt-4">
          <h2 className="font-display text-3xl leading-tight">Move session storage from Postgres to Redis</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Proposed by <span className="text-ink">Ana Silva</span> · Decider <span className="text-ink">Lena K.</span>
          </p>

          <div className="mt-5">
            <div className="flex justify-between text-xs text-ink-soft">
              <span className="eyebrow">Input received</span>
              <span className="font-mono">4 / 5</span>
            </div>
            <div className="mt-2 flex h-1.5 gap-0.5 overflow-hidden bg-paper-deep">
              <span className="fill w-[60%] bg-ink" style={{ animationDelay: '600ms' }} />
              <span className="fill w-[20%] bg-signal" style={{ animationDelay: '900ms' }} />
            </div>
          </div>

          <ul className="mt-5 divide-y divide-rule border-y border-rule">
            {stances.map((s) => (
              <li key={s.name} className="grid grid-cols-[1fr_auto] gap-x-3 py-2.5 text-sm">
                <span>
                  <span className="font-medium">{s.name}</span>{' '}
                  <span className="text-ink-soft">· {s.role}</span>
                </span>
                <span
                  className={`font-mono text-[0.7rem] uppercase tracking-wider ${
                    s.stance === 'Disagree' ? 'text-signal' : s.stance === 'Agree' ? 'text-ink' : 'text-ink-soft'
                  }`}
                >
                  {s.stance}
                </span>
                <span className="col-span-2 mt-0.5 text-ink-soft">{s.note}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-ink-soft">Waiting on: Dev P.</span>
            <span className="inline-flex items-center gap-1 font-medium">
              Nudge <ArrowUpRight className="size-3.5" />
            </span>
          </div>
        </div>
      </article>
    </div>
  )
}

function Proof() {
  const logos = ['Fernway', 'Kestrel Labs', 'Northbeam', 'Halcyon', 'Plinth', 'Oxbow']
  return (
    <section className="border-b border-rule">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="eyebrow shrink-0 text-ink-soft">Deciding in writing at</p>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {logos.map((l, i) => (
            <li
              key={l}
              className={`text-xl text-ink/70 ${i % 2 ? 'font-display italic text-2xl' : 'font-semibold tracking-tight'}`}
            >
              {l}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const features = [
  {
    n: '01',
    title: 'Proposals with a shape',
    body: 'Every decision starts from the same template: context, options, a recommendation, and a deadline. Half-formed Slack threads don\'t make the cut.',
  },
  {
    n: '02',
    title: 'Stances, not reactions',
    body: 'Reviewers pick Agree, Concerns, or Disagree and have to write a sentence of reasoning. A thumbs-up emoji doesn\'t count as input.',
  },
  {
    n: '03',
    title: 'One named decider',
    body: 'Consensus is optional. Accountability isn\'t. Each record has exactly one decider, and a deadline that actually closes.',
  },
  {
    n: '04',
    title: 'A log you can trust',
    body: 'Decisions become permanent, linkable records. Search "why did we pick Kafka" and get the answer, the dissent, and who signed off.',
  },
]

function Features() {
  return (
    <section id="features" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-signal">The method</p>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight md:text-6xl">
              Four rules that make writing faster than meeting.
            </h2>
          </div>
          <p className="self-end text-lg leading-relaxed text-ink-soft lg:col-span-5 lg:col-start-8">
            Quorum isn't a doc editor with a vote button bolted on. It's a strict, small process, and
            the strictness is the point. Teams using it report 40% fewer recurring syncs within a quarter.
          </p>
        </div>

        <div className="mt-16 grid border-t border-ink md:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.n}
              className={`group border-b border-rule py-10 md:px-8 ${i % 2 === 0 ? 'md:border-r md:pl-0' : 'md:pr-0'}`}
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-sm text-signal">{f.n}</span>
                <div>
                  <h3 className="font-display text-3xl tracking-tight transition-colors group-hover:text-signal">
                    {f.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{f.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            ['−40%', 'recurring meetings'],
            ['2.1 days', 'median time to decide'],
            ['18k', 'decisions on record'],
            ['94%', 'weekly active reviewers'],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="font-display text-5xl tracking-tight">{v}</dt>
              <dd className="eyebrow mt-2 text-ink-soft">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

const quotes = [
  {
    quote: 'We used to relitigate architecture every quarter because nobody remembered why. Now someone just pastes the DR link and the argument is over.',
    name: 'Ana Silva',
    role: 'Principal Engineer, Fernway',
  },
  {
    quote: 'Forcing people to write one sentence of reasoning did more for our review culture than three offsites.',
    name: 'Dev Patel',
    role: 'VP Engineering, Northbeam',
  },
]

function Testimonials() {
  return (
    <section id="customers" className="border-b border-rule bg-paper-deep/60">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow text-signal">On the record</p>
        <figure className="mt-8 grid gap-10 lg:grid-cols-12">
          <span className="font-display text-[9rem] leading-[0.6] text-signal lg:col-span-1" aria-hidden="true">
            “
          </span>
          <div className="lg:col-span-10">
            <blockquote className="font-display text-4xl leading-[1.12] tracking-tight md:text-[3.4rem]">
              Quorum killed our Thursday architecture meeting. Nobody misses it, and we ship decisions{' '}
              <em className="text-signal">three days faster</em> than we did when we argued in a room.
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-full bg-ink font-display text-xl text-paper">
                MO
              </span>
              <span>
                <span className="block font-medium">Mira Okafor</span>
                <span className="text-sm text-ink-soft">CTO, Kestrel Labs · 140 engineers</span>
              </span>
            </figcaption>
          </div>
        </figure>

        <div className="mt-20 grid gap-px border border-rule bg-rule md:grid-cols-2">
          {quotes.map((q) => (
            <figure key={q.name} className="flex flex-col justify-between gap-8 bg-paper p-8 md:p-10">
              <blockquote className="text-xl leading-relaxed">"{q.quote}"</blockquote>
              <figcaption className="flex items-center justify-between border-t border-rule pt-5 text-sm">
                <span className="font-medium">{q.name}</span>
                <span className="text-ink-soft">{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section id="start" className="bg-signal text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-12 lg:items-end">
        <h2 className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl lg:col-span-8">
          Your next meeting could be a document.
        </h2>
        <div className="lg:col-span-4">
          <p className="text-lg leading-relaxed text-paper/85">
            Set up a workspace in two minutes, import your existing ADRs, and run your first decision this week.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#memo"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Start free
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#memo"
              className="inline-flex items-center rounded-full border border-paper/60 px-6 py-3.5 font-medium transition-colors hover:bg-paper/10"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const columns = [
    { title: 'Product', links: ['Decision records', 'Templates', 'Integrations', 'Pricing'] },
    { title: 'Company', links: ['About', 'Careers', 'Security', 'Contact'] },
    { title: 'Resources', links: ['ADR guide', 'Changelog', 'Help center', 'Status'] },
  ]
  return (
    <footer id="memo" className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-signal">The Decision Memo</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              One essay a month on how good teams decide.
            </h2>
            <p className="mt-4 max-w-md text-paper/60">
              Real decision records from real teams, with the names changed. No product announcements. 9,400 readers.
            </p>
            <div className="mt-8 max-w-md">
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5 lg:col-start-8">
            {columns.map((c) => (
              <div key={c.title}>
                <p className="eyebrow text-paper/50">{c.title}</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#top" className="text-paper/80 transition-colors hover:text-signal">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-paper/15 py-8 text-sm text-paper/50 md:flex-row md:items-center md:justify-between">
          <Logo className="text-paper" />
          <p>© {new Date().getFullYear()} Quorum Labs, Inc. Decided in writing.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-paper">Privacy</a>
            <a href="#top" className="hover:text-paper">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
