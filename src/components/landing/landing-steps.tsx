import { MotionSection } from "@/components/landing/motion-section";

const steps = [
  "Sign up or sign in with Clerk.",
  "If you don’t have access yet, pick a plan and start your trial.",
  "Log trades with strategies, tags, screenshots, and notes.",
  "Review the dashboard, calendar, and strategies.",
  "Export to Excel when you need your data elsewhere.",
  "Manage account, appearance, and subscription in settings.",
];

export function LandingSteps() {
  return (
    <MotionSection className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="font-heading text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        How it works
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        From first login to a repeatable review habit.
      </p>
      <ol className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
        {steps.map((step, i) => (
          <li
            key={i}
            className="group rounded-2xl border border-border/80 bg-card p-5 shadow-sm ring-1 ring-black/5 transition-colors hover:border-primary/40 dark:ring-white/10"
          >
            <p className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              Step {i + 1}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground sm:text-base">
              {step}
            </p>
          </li>
        ))}
      </ol>
    </MotionSection>
  );
}
