import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { APP_SIGN_IN_URL, APP_SIGN_UP_URL } from "@/lib/app-urls";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground sm:text-xl"
        >
          tradecorn
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex lg:gap-8"
          aria-label="Page"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Link
            href={APP_SIGN_IN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "rounded-xl px-2.5 sm:px-3",
            )}
          >
            Sign in
          </Link>
          <Link
            href={APP_SIGN_UP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "rounded-xl")}
          >
            Start free trial
          </Link>
        </div>
      </div>
    </header>
  );
}
