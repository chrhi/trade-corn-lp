# Top Trader — landing page source copy

Single source of truth for **what the product actually does today**, grounded in the codebase. Use sections verbatim or as prompts for headlines, feature grids, and FAQs. Update this file when the product changes.

---

## Product snapshot

| Item | Detail |
|------|--------|
| **Package name** | `top-trader` |
| **In-app / billing branding** | **Top Trader** (e.g. subscribe page, sidebar) |
| **Site metadata (today)** | Title: *Trading Platform* — Description: *Professional trading dashboard* (`src/app/layout.tsx`). Consider aligning SEO with **Top Trader** when you ship a public marketing site. |
| **What it is** | A **trading journal** SaaS: log trades with rich context, organize by strategies and tags, view performance on a dashboard and calendar, export data, optional chart context on trade detail. Access is gated by **Clerk** auth and **Whop** subscription (plus a signup trial window). |

### Suggested positioning lines (edit freely)

- **Short:** The structured trading journal that turns every trade into data you can learn from.
- **Medium:** Log trades with setups, sessions, and mindset tags—then see equity, daily P&L, and core stats in one place.
- **Literal / technical:** Clerk-protected Next.js app with PostgreSQL-backed trades, Whop billing, and dashboard analytics.

---

## Who it’s for

- Discretionary traders (manual entries) who want **one place** for journal entries and performance review.
- People trading across **Forex, Crypto, Stocks, Indices, Commodities** (market type is a first-class field on trades).
- Users who care about **session** (e.g. Asian, London, NY, Overlap), **timeframe**, **trade type** (Scalping, Swing, Intraday, Position), and **post-trade reflection** (emotion, mistakes, notes, screenshots).

---

## Problems → outcomes (marketing framing)

| Pain | Outcome in Top Trader |
|------|------------------------|
| Notes scattered across screenshots, spreadsheets, and chats | Single **trade log** with filters and detail views |
| Hard to see if you have edge | **Net P&L**, **expectancy**, **profit factor**, **max drawdown**, **average R**, **win rate** on the dashboard |
| Repeating the same mistakes | **Mistake category**, **emotion**, rich **notes**, **tags** |
| No calendar view of activity | **Calendar** route for time-based review |
| Vendor lock-in for raw data | **Excel (.xlsx)** export of trade columns |

---

## Shipped features (copy-ready)

These bullets match the **`FEATURES` list on `/subscribe`** (`src/app/(auth)/subscribe/page.tsx`):

1. Full access to the trading journal  
2. Strategies & trade analysis  
3. Calendar & session tracking  
4. Screenshots & notes  
5. Export & reporting  

### Trade journal (data model)

Trades support create/read/update/delete. Fields stored per trade (`src/db/schema.ts`):

- **Core:** symbol, direction (long/short), entry/exit prices, stop loss, take profit, position size, risk amount, P&L, risk:reward (`rr`)
- **Context:** timeframe, session, trade type, market type, entry reason, exit reason, emotion
- **Advanced:** broker, indicators, trade duration, star rating (1–5), MAE, MFE, mistake category
- **Reflection:** notes (rich text in UI), screenshot URL (uploads)
- **Meta:** trade date, link to optional **strategy**

### Strategies

- User-defined **strategies** (name + optional description). Trades can reference a strategy.

### Tags

- User-defined **tags**; many-to-many link to trades (`trade_tags`).

### Trade list & filters

- Paginated list (default 20 per page). URL-driven filters (`src/app/(dashboard)/trades/page.tsx`):  
  `symbol`, `direction`, `tradeType`, `marketType`, `session`, `timeframe`, `emotion`, `broker`, `dateFrom` / `dateTo`, `minPnl` / `maxPnl`, `minRR` / `maxRR`, `rating`, `page`

### Trade detail

- Full trade view; includes **chart context** mapped for TradingView-style review (see `src/modules/trades/pages/trade.page.tsx`).

### Export

- **Excel `.xlsx`** download via `tradesToExcelBlob` (`src/modules/trades/lib/export-trades.ts`).  
- Columns exported (in order):  
  `id`, `symbol`, `direction`, `tradeDate`, `entryPrice`, `exitPrice`, `stopLoss`, `takeProfit`, `positionSize`, `riskAmount`, `pnl`, `rr`, `timeframe`, `session`, `tradeType`, `marketType`, `entryReason`, `exitReason`, `emotion`, `broker`, `indicators`, `tradeDuration`, `rating`, `notes`, `strategyName`, `createdAt`  
- *Note:* MAE, MFE, mistake category, and screenshot URL are **not** in this export column list today.

### Dashboard (what users actually see)

`src/modules/dashboard/dashboard.page.tsx` renders:

1. **Top stat row** — five cards from `DashboardTopStats` (`src/modules/dashboard/components/dashboard-top-stats.tsx`):

   | UI label | Value | Tooltip (in-app) |
   |----------|--------|------------------|
   | **Net P&L** | Currency | Total profit/loss for the selected period |
   | **Expectancy** | Currency | (Win% × Avg Win) − (Loss% × Avg Loss). Positive = edge. Tooltip also shows Avg Win, Avg Loss, R:R |
   | **Profit Factor** | Number or ∞/— | Gross Profit / Gross Loss. > 1 = profitable. |
   | **Max Drawdown** | Currency | Largest peak-to-trough decline in cumulative P&L |
   | **Avg R** | e.g. `0.50R` | Average R-multiple per trade (P&L / risk). Positive = edge. Subtext: **Win rate** % |

2. **Equity Curve** — cumulative P&L over time (area chart). Empty state: *“No trade data yet. Add trades to see cumulative P&L.”*

3. **Net Daily P&L** — bar chart per day. Empty state: *“No trade data yet. Add trades to see daily P&L.”*

### Calendar

- Dedicated route: **`/calendar`** — calendar view over trade activity (`src/modules/calander/` — folder name is spelled `calander` in the repo).

### Settings & profile

- **Settings:** hub plus **account**, **appearance** (light/dark theme), **subscription** (links toward plans/checkout).
- **Profile:** `/profile`.

### Theme

- Light / dark via `next-themes`.

---

## Backend analytics not shown on the main dashboard (honesty for marketing)

`getDashboardAnalytics` in `src/modules/dashboard/actions/index.ts` **computes** additional series that are **not** wired into `dashboard.page.tsx` today. **Do not promise these as visible UI** on the landing page unless you add charts for them.

Returned in the same payload but unused by the main dashboard page includes (non-exhaustive): **R distribution**, **profit factor over time**, **setup performance**, **session performance**, **holding time vs result**, **drawdown curve**, **risk per trade**, **grade vs result**, **MAE/MFE scatter-style points**, **mistake category counts**.

---

## Pricing & access

### Plans (`src/config/plans.ts`)

| Plan | Price | Billing note |
|------|--------|----------------|
| **Monthly** | **$9/mo** | Billed monthly — full access |
| **Yearly** | **$60/yr** (shown as **$5/mo**) | Billed yearly — full access; “Best value” on subscribe UI |

### Trial

- **7 days** free trial (`TRIAL_DAYS = 7`), shown on plan cards and subscribe copy.

### Checkout flow

- **`/subscribe`** → choose plan → **`/payment?plan=monthly|yearly`** (Whop embedded checkout) → **`/payment/complete`**
- Subscribe page notes that **Whop may collect a payment method** for the trial; whether you are charged before trial end depends on **Whop product configuration**.

### Who can use the app (`src/lib/access.ts`)

In **production**, a user has access if **either**:

- They have a subscription with status **`trialing`** or **`active`**, **or**
- They are within **7 days** of account `createdAt` (signup trial).

In **`development`** (`NODE_ENV === development`), access is **always** granted (for local work).

### Auth surface

- **Public:** sign-in, sign-up, password reset, verify email, Clerk callbacks (see `src/proxy.ts` for exact public routes).
- **Subscribe / payment:** require sign-in before checkout links work as intended.

---

## User journey (“How it works”)

1. **Sign up / sign in** (Clerk).  
2. If no access → redirect to **subscribe** / trial path.  
3. **Log trades** (with strategies, tags, screenshots, notes).  
4. Review **dashboard** (stats + equity + daily P&L), **calendar**, and **strategies**.  
5. **Export** trades to Excel when needed.  
6. Manage **account**, **appearance**, and **subscription** in settings.

---

## Routes cheat sheet

### Dashboard (authenticated + access gate)

| Path | Purpose |
|------|---------|
| `/` | Dashboard |
| `/trades` | Trade list |
| `/trades/[tradeId]` | Trade detail |
| `/trades/[tradeId]/edit` | Edit trade |
| `/calendar` | Calendar |
| `/strategies` | Strategies |
| `/strategies/new` | New strategy |
| `/strategies/[strategyId]/edit` | Edit strategy |
| `/profile` | Profile |
| `/settings` | Settings |
| `/settings/account` | Account |
| `/settings/appearance` | Appearance |
| `/settings/subscription` | Subscription |

### Auth & billing

| Path | Purpose |
|------|---------|
| `/sign-in`, `/sign-up` | Clerk |
| `/sign-up/verify-email` | Email verification |
| `/sign-in/reset-password`, `.../step2` | Password reset |
| `/auth-callback`, `/sso-callback` | Clerk callbacks |
| `/subscribe` | Plan selection (**Top Trader** branding) |
| `/payment`, `/payment/complete` | Whop checkout |

### Representative APIs (not exhaustive)

- `/api/whop/*` — checkout session, webhooks  
- `/api/uploadthing/*` — uploads  
- `/api/user/trial` — trial-related user API  

---

## Tech stack (optional “Built with” / trust strip)

From `package.json` dependencies (major items):

- **Framework:** Next.js 16, React 19, App Router  
- **Auth:** Clerk  
- **Database:** PostgreSQL via Drizzle ORM, Neon serverless driver  
- **Payments:** Whop (checkout embed + webhooks)  
- **UI:** Tailwind CSS 4, Radix, shadcn-style components, HeroUI, Framer Motion, Lucide  
- **Data / charts:** TanStack Query & Table, Recharts, lightweight-charts, react-big-calendar  
- **Forms:** react-hook-form, Zod  
- **Other:** Uploadthing, Tiptap, date-fns, xlsx, Sonner  

---

## Brand assets (referenced in app)

- `/traydcorn.svg` — icon/logo (auth, subscribe, payment, sidebar collapsed)  
- `/long-textlogo.svg` — sidebar expanded logo  

---

## Placeholders for your landing page (TBD)

Fill these when you have assets:

- [ ] **Hero screenshot** (dashboard + trade form)  
- [ ] **Social proof** (testimonials, logos, user count)  
- [ ] **Comparison** (vs spreadsheet / generic notes app)  
- [ ] **FAQ** (billing, data export, security)  
- [ ] **Legal** (privacy, terms — link to real pages)  

---

## Changelog hint for maintainers

When you add dashboard charts or export columns, update **Shipped features** and **Backend analytics not shown** so marketing stays accurate.
