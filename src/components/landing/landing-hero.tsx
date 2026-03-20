import Image from "next/image";
import Link from "next/link";

import { EquityPreview } from "@/components/landing/illustrations/equity-preview";
import { SessionBarsPreview } from "@/components/landing/illustrations/session-bars-preview";
import { buttonVariants } from "@/components/ui/button-variants";
import { APP_SIGN_UP_URL } from "@/lib/app-urls";
import { cn } from "@/lib/utils";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--brand-glow),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_32%_at_78%_35%,color-mix(in_oklab,var(--brand)_24%,transparent),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:items-center lg:py-28">
        <div>
          <p className="text-sm font-medium text-primary">Trydecorn trading journal</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.08]">
            The structured trading journal that turns every trade into data you
            can learn from.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Log trades with setups, sessions, and mindset tags—then see equity,
            daily P&amp;L, and core stats in one place.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={APP_SIGN_UP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full justify-center rounded-xl sm:w-auto",
              )}
            >
              Start 14-day free trial
            </Link>
            <Link
              href="/#features"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full justify-center rounded-xl sm:w-auto",
              )}
            >
              See features
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            For discretionary traders on forex, crypto, stocks, indices, and
            commodities.
          </p>
        </div>
        <div className="relative w-full lg:justify-self-end">
          <div
            aria-hidden
            className="absolute inset-8 rounded-full bg-primary/20 blur-3xl"
          />
          <div className="relative mx-auto w-full max-w-md space-y-6 rounded-[2rem] border border-border/70 bg-card/85 p-6 shadow-[0_24px_80px_-30px_var(--brand-glow)] backdrop-blur sm:p-8">
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Equity curve
              </p>
              <EquityPreview className="max-h-36" />
            </div>
            <div className="space-y-2 border-t border-border/60 pt-5">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Activity by session
              </p>
              <SessionBarsPreview className="max-h-24" />
            </div>
            <div className="flex justify-center border-t border-border/60 pt-6">
              <Image
                src="/traydcorn.svg"
                alt="Trydecorn visual mark"
                width={200}
                height={200}
                className="size-36 drop-shadow-[0_10px_30px_rgba(125,60,255,0.35)] sm:size-40"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
