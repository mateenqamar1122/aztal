import { ArrowDownRight } from "lucide-react";

export function CircleBadge({ className = "" }: { className?: string }) {
  const text = "CREATIVE PARTNER · CREATIVE PARTNER · ";
  return (
    <div className={`relative grid h-32 w-32 place-items-center ${className}`}>
      <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path
            id="badge-circle"
            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
            fill="none"
          />
        </defs>
        <text
          fill="currentColor"
          className="text-primary"
          style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase" }}
        >
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <ArrowDownRight className="h-6 w-6 text-primary" />
    </div>
  );
}
