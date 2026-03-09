"use client";
import { Great_Vibes } from "next/font/google";

const script = Great_Vibes({ weight: "400", subsets: ["latin"] });

interface Props {
  label: string;
  onClick: () => void;
  size?: "md" | "lg";
}

const Nail = ({ top, left, right }: { top: number; left?: number; right?: number }) => (
  <div
    style={{
      position: "absolute",
      top,
      left,
      right,
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "radial-gradient(circle at 35% 30%, #e0c090, #7a4a18)",
      boxShadow: "0 1px 3px rgba(0,0,0,0.6)",
    }}
  />
);

export default function WoodButton({ label, onClick, size = "md" }: Props) {
  const isLg = size === "lg";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

      {/* ── Rope ── */}
      <div style={{ display: "flex", gap: isLg ? 40 : 30 }}>
        {[0, 1].map((i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: isLg ? 22 : 16,
              background: "repeating-linear-gradient(to bottom, #8a6030 0px, #c09050 3px, #8a6030 6px)",
              borderRadius: 2,
              boxShadow: "1px 0 2px rgba(0,0,0,0.3)",
            }}
          />
        ))}
      </div>

      {/* ── Sign plank ── */}
      <button
        onClick={onClick}
        style={{
          position: "relative",
          padding: isLg ? "14px 36px 16px" : "10px 26px 12px",
          borderRadius: "5px 5px 7px 7px",
          border: "2.5px solid #6b3a10",
          cursor: "pointer",
          background: [
            "repeating-linear-gradient(",
            "  180deg,",
            "  transparent 0px, transparent 18px,",
            "  rgba(0,0,0,0.04) 18px, rgba(0,0,0,0.04) 19px",
            "),",
            "linear-gradient(160deg, #d4a060 0%, #c07838 25%, #b86e28 50%, #c89048 75%, #a86220 100%)",
          ].join(""),
          boxShadow:
            "0 5px 14px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -2px 5px rgba(0,0,0,0.35)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-4px) scale(1.04)";
          e.currentTarget.style.boxShadow =
            "0 10px 24px rgba(0,0,0,0.5), 0 0 18px rgba(255,180,60,0.45), inset 0 1px 0 rgba(255,255,255,0.22)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow =
            "0 5px 14px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -2px 5px rgba(0,0,0,0.35)";
        }}
      >
        {/* Nails */}
        <Nail top={6} left={8} />
        <Nail top={6} right={8} />

        {/* Label */}
        <span
          className={script.className}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35em",
            fontSize: isLg
              ? "clamp(1.5rem, 2.8vw, 2.2rem)"
              : "clamp(1.2rem, 2.2vw, 1.8rem)",
            color: "#2a0d00",
            textShadow: "0 1px 0 rgba(255,255,255,0.18), 0 -1px 0 rgba(0,0,0,0.2)",
            whiteSpace: "nowrap",
            letterSpacing: "0.04em",
          }}
        >
          🌺 {label} 🌺
        </span>
      </button>
    </div>
  );
}
