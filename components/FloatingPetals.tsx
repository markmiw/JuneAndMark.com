"use client";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
}

const EMOJIS = ["🌺", "🌸", "🌺", "🌸", "🌼"];

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 7 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 16 + Math.random() * 12,
        size: 14 + Math.random() * 14,
        emoji: EMOJIS[i % EMOJIS.length],
      }))
    );
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 6,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {petals.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: "-60px",
            fontSize: p.size,
            animation: `petal-fall ${p.duration}s ${p.delay}s linear infinite`,
            opacity: 0,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
