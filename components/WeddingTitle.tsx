"use client";
import { Great_Vibes } from "next/font/google";
import { useLocale } from "./LocaleProvider";

const script = Great_Vibes({ weight: "400", subsets: ["latin"] });

const titleShadow = "0 2px 20px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.95)";

export default function WeddingTitle() {
  const { tr } = useLocale();

  return (
    <div
      className={script.className}
      style={{ textAlign: "center", color: "#fff", userSelect: "none" }}
    >
      <div style={{ fontSize: "clamp(2rem, 5vw, 5rem)", textShadow: titleShadow, lineHeight: 1.1 }}>
        June &amp; Mark&apos;s
      </div>
      <div
        style={{
          fontSize: "clamp(2.8rem, 7vw, 7rem)",
          textShadow: titleShadow,
          lineHeight: 0.95,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.25em",
        }}
      >
        <span style={{ color: "#f4a0b8", fontSize: "0.45em", lineHeight: 1 }}>&#9825;</span>
        {tr.weddingWord}
        <span style={{ color: "#f4a0b8", fontSize: "0.45em", lineHeight: 1 }}>&#9825;</span>
      </div>
      <div style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.4rem)", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "0.5em", color: "rgba(255,255,255,0.85)", textShadow: titleShadow, fontFamily: "Georgia, serif" }}>
        {tr.dateLabel}
      </div>
    </div>
  );
}
