import { MotionSection } from "@/components/landing/motion-section";

const features: { title: string; description: string }[] = [
  {
    title: "Full access to the trading journal",
    description:
      "Create, edit, and review trades with symbol, direction, prices, size, risk, P&L, R:R, timeframe, session, market type, reasons, emotion, and more.",
  },
  {
    title: "Strategies & trade analysis",
    description:
      "Define strategies and link trades so you can see what setups you actually trade.",
  },
  {
    title: "Calendar & session tracking",
    description:
      "Review when you traded across Asian, London, NY, overlap, and other sessions.",
  },
  {
    title: "Screenshots & notes",
    description:
      "Capture context with uploads and rich notes so the story of the trade stays intact.",
  },
  {
    title: "Export & reporting",
    description:
      "Download your trades as an .xlsx file for offline analysis or backups.",
  },
];

export function LandingFeatures() {
  return (
    <MotionSection
      id="features"
      className="relative overflow-hidden border-y border-border/60 bg-muted/20 py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-primary/10 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Everything in one journal
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          The same capabilities called out on subscribe—grounded in what the
          app ships today.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <li
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background/90 p-6 shadow-sm ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md dark:ring-white/10"
            >
              <span className="text-xs font-semibold tracking-wide text-primary/80">
                0{idx + 1}
              </span>
              <h3 className="font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-primary/70 via-primary/25 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Filter the trade list by symbol, direction, session, timeframe,
          emotion, broker, date range, P&amp;L, R:R, rating, and more. Light and
          dark themes.
        </p>
      </div>
    </MotionSection>
  );
}
