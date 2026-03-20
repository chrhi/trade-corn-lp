import { cn } from "@/lib/utils";

export function EquityPreview({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-full text-muted-foreground", className)}
      viewBox="0 0 320 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrative equity curve preview"
    >
      <title>Illustrative equity curve</title>
      <defs>
        <linearGradient
          id="equityPreviewFill"
          x1="160"
          y1="8"
          x2="160"
          y2="112"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--primary)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {/* Grid */}
      <path
        d="M40 24h256M40 48h256M40 72h256M40 96h256"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1"
      />
      <path d="M40 24v88" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
      {/* Area + line */}
      <path
        d="M40 88 C72 82 88 72 112 68 C136 64 152 52 176 44 C200 36 224 28 248 24 L280 20 L280 112 L40 112 Z"
        fill="url(#equityPreviewFill)"
      />
      <path
        d="M40 88 C72 82 88 72 112 68 C136 64 152 52 176 44 C200 36 224 28 248 24 L280 20"
        className="stroke-primary"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* End dot */}
      <circle cx="280" cy="20" r="4" className="fill-primary" />
      {/* Axis labels (decorative) */}
      <text x="36" y="18" textAnchor="end" className="text-[9px] text-muted-foreground">
        Eq
      </text>
      <text
        x="284"
        y="126"
        className="text-[8px] text-muted-foreground"
        opacity="0.85"
      >
        Time
      </text>
    </svg>
  );
}
