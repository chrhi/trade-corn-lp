import Link from "next/link";

export function LandingFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-muted/20 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <p className="text-sm font-medium text-foreground">Trydecorn</p>
        <p className="max-w-md text-xs text-muted-foreground leading-relaxed">
          Next.js, Clerk, PostgreSQL, Whop — structured journal for traders who
          review what they actually did.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link
            href="/privacy"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-foreground"
          >
            Terms
          </Link>
          <Link
            href="/#pricing"
            className="transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {year} Trydecorn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
