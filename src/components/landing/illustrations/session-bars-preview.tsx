import { cn } from "@/lib/utils";

const bars: { x: number; h: number; color: string }[] = [
  { x: 32, h: 38, color: "var(--chart-5)" },
  { x: 72, h: 58, color: "var(--chart-4)" },
  { x: 112, h: 44, color: "var(--chart-3)" },
  { x: 152, h: 72, color: "var(--chart-1)" },
  { x: 192, h: 52, color: "var(--chart-2)" },
  { x: 232, h: 66, color: "var(--chart-3)" },
  { x: 272, h: 48, color: "var(--chart-4)" },
];

export function SessionBarsPreview({ className }: { className?: string }) {
  const baseY = 88;
  const barW = 22;

  return (
    <svg
      className={cn("w-full text-muted-foreground", className)}
      viewBox="0 0 320 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrative session activity bars"
    >
      <title>Illustrative weekly activity</title>
      <path
        d="M24 88h272"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="1"
      />
      {bars.map((b) => {
        const y = baseY - b.h;
        return (
          <rect
            key={b.x}
            x={b.x}
            y={y}
            width={barW}
            height={b.h}
            rx="4"
            fill={b.color}
            fillOpacity="0.92"
          />
        );
      })}
      <text
        x="160"
        y="98"
        textAnchor="middle"
        className="text-[8px] text-muted-foreground"
        opacity="0.9"
      >
        Sessions
      </text>
    </svg>
  );
}
