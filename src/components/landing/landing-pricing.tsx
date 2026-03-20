import Link from "next/link";

import { MotionSection } from "@/components/landing/motion-section";
import { buttonVariants } from "@/components/ui/button-variants";
import { APP_SIGN_UP_URL } from "@/lib/app-urls";
import { cn } from "@/lib/utils";

const planFeatures = [
  "Full access to the trading journal",
  "Strategies & trade analysis",
  "Calendar & session tracking",
  "Screenshots & notes",
  "Export & reporting",
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function FeatureList() {
  return (
    <ul className="mt-6 space-y-3 text-sm text-foreground">
      {planFeatures.map((text) => (
        <li key={text} className="flex gap-2.5">
          <CheckIcon className="mt-0.5 size-5 shrink-0 text-primary" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

export function LandingPricing() {
  return (
    <MotionSection
      id="pricing"
      className="relative overflow-hidden border-t border-border/60 bg-muted/15 py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_58%_45%_at_50%_0%,color-mix(in_oklab,var(--brand)_20%,transparent),transparent_75%)]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Choose your plan
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Get full access to the trading journal and analytics. Start with a{" "}
            <strong className="font-medium text-foreground">
              14-day free trial
            </strong>
            . Checkout is secure and processed through{" "}
            <strong className="font-medium text-foreground">Whop</strong>.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 lg:grid-cols-2 lg:gap-6">
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm ring-1 ring-black/5 sm:p-8 dark:ring-white/10">
            <h3 className="text-lg font-semibold text-foreground">Monthly</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Billed monthly — full access to the app.
            </p>
            <p className="mt-6 text-4xl font-semibold tracking-tight text-foreground">
              $9<span className="text-2xl font-semibold">/mo</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Billed monthly</p>
            <span className="mt-4 inline-flex rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              14 days free trial
            </span>
            <FeatureList />
            <Link
              href={APP_SIGN_UP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-8 w-full justify-center rounded-xl border-border bg-background",
              )}
            >
              Start 14-day free trial
            </Link>
          </div>

          <div className="relative rounded-2xl border-2 border-primary bg-card p-6 shadow-md shadow-primary/15 ring-1 ring-primary/20 sm:p-8">
            <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
              <StarIcon className="size-3.5" />
              Best value
            </div>
            <h3 className="text-lg font-semibold text-foreground">Yearly</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Billed yearly — $5/month. Full access to the app.
            </p>
            <p className="mt-6 text-4xl font-semibold tracking-tight text-foreground">
              $5<span className="text-2xl font-semibold">/mo</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Billed $60 yearly
            </p>
            <span className="mt-4 inline-flex rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              14 days free trial
            </span>
            <FeatureList />
            <Link
              href={APP_SIGN_UP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 w-full justify-center rounded-xl",
              )}
            >
              Start 14-day free trial
            </Link>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Cancel anytime. No commitment.
        </p>
      </div>
    </MotionSection>
  );
}
