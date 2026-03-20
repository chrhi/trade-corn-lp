import { MotionSection } from "@/components/landing/motion-section";
import { cn } from "@/lib/utils";

const rows: { pain: string; outcome: string }[] = [
  {
    pain: "Notes scattered across screenshots, spreadsheets, and chats",
    outcome: "Single trade log with filters and rich detail views",
  },
  {
    pain: "Hard to see if you have edge",
    outcome:
      "Net P&L, expectancy, profit factor, max drawdown, average R, and win rate on the dashboard",
  },
  {
    pain: "Repeating the same mistakes",
    outcome: "Mistake category, emotion, notes, and tags on every trade",
  },
  {
    pain: "No calendar view of activity",
    outcome: "Calendar built for time-based review",
  },
  {
    pain: "Vendor lock-in for raw data",
    outcome: "Export trades to Excel (.xlsx)",
  },
];

export function LandingOutcomes() {
  return (
    <MotionSection
      id="outcomes"
      className="relative overflow-hidden border-y border-border/60 bg-muted/15 py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-primary/[0.07] to-transparent"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          From scattered notes to a real edge
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Trydecorn is built around the problems traders actually run into after
          the charts close.
        </p>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
          {rows.map((row, index) => {
            const isLast = index === rows.length - 1;
            return (
              <li
                key={row.pain}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/80 bg-card/90 p-6 shadow-sm ring-1 ring-black/5 transition-[border-color,box-shadow] duration-200 hover:border-primary/25 hover:shadow-md dark:bg-card dark:ring-white/10",
                  isLast && "md:col-span-2 md:mx-auto md:max-w-3xl md:w-full",
                )}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-px bg-linear-to-b from-primary/50 via-primary/15 to-transparent opacity-60"
                />
                <div className="flex flex-col gap-5 pl-4 sm:flex-row sm:items-stretch sm:gap-6 sm:pl-5">
                  <div className="min-w-0 flex-1 space-y-2">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Friction
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {row.pain}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center justify-center sm:flex-col sm:justify-center">
                    <span
                      aria-hidden
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground shadow-[0_0_0_1px_oklch(1_0_0/0.08)_inset] transition-transform duration-200 group-hover:scale-105 sm:h-10 sm:w-10"
                    >
                      <span className="block sm:hidden" aria-hidden>
                        ↓
                      </span>
                      <span className="hidden sm:block" aria-hidden>
                        →
                      </span>
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 space-y-2 border-t border-border/60 pt-5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary/90">
                      Outcome
                    </p>
                    <p className="text-[0.95rem] font-semibold leading-snug text-foreground">
                      {row.outcome}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </MotionSection>
  );
}
