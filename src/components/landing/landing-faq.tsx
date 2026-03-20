import { MotionSection } from "@/components/landing/motion-section";

const faqs: { q: string; a: string }[] = [
  {
    q: "How does the 14-day free trial work?",
    a: "You can explore Trydecorn with a 14-day trial. Checkout runs through Whop; they may collect a payment method for the trial. Whether you are charged before the trial ends depends on your Whop product configuration—check the checkout screen for the exact terms.",
  },
  {
    q: "What can I export?",
    a: "You can download your trades as an Excel (.xlsx) file with core trade fields (symbol, direction, prices, risk, P&L, session, reasons, notes, strategy name, and more). Some optional fields may not be in the export yet—use the in-app journal as the source of truth for every column.",
  },
  {
    q: "What markets and sessions does Trydecorn support?",
    a: "Trades can be tagged by market type—Forex, Crypto, Stocks, Indices, and Commodities—and by session (e.g. Asian, London, NY, overlap) plus timeframe and trade type so your stats match how you actually trade.",
  },
  {
    q: "How do sign-in and billing work?",
    a: "Access is gated by Clerk authentication and a Whop subscription (or trial). After sign-up you’ll be guided through subscribe and checkout when a plan is required.",
  },
  {
    q: "Is my data secure?",
    a: "Accounts are protected with Clerk. Trade data is stored in PostgreSQL with industry-standard hosting practices. For compliance questions specific to your firm, see our Privacy Policy and Terms of Service or contact support.",
  },
];

export function LandingFaq() {
  return (
    <MotionSection id="faq" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="font-heading text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        FAQ
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
        Straight answers about trial, export, and access.
      </p>
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-border/80 bg-card/95 px-5 py-4 shadow-sm ring-1 ring-black/5 transition-colors open:border-primary/35 dark:ring-white/10"
          >
            <summary className="cursor-pointer list-none font-medium text-foreground outline-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-3">
                {item.q}
                <span className="select-none text-primary transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </MotionSection>
  );
}
