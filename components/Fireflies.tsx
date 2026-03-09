"use client";
import { useEffect, useState } from "react";

interface Fly {
  id: number;
  left: number;
  bottom: number;
  delay: number;
  duration: number;
  size: number;
}

export default function Fireflies() {
  const [flies, setFlies] = useState<Fly[]>([]);

  useEffect(() => {
    setFlies(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        bottom: 8 + Math.random() * 35,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 4 + Math.random() * 5,
      }))
    );
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 7,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {flies.map((f) => (
        <div
          key={f.id}
          style={{
            position: "absolute",
            left: `${f.left}%`,
            bottom: `${f.bottom}%`,
            width: f.size,
            height: f.size,
            borderRadius: "50%",
            background: "radial-gradient(circle, #ffe87a 0%, #ffb830 60%, transparent 100%)",
            boxShadow: `0 0 ${f.size * 2}px ${f.size}px rgba(255,200,60,0.5)`,
            animation: `firefly ${f.duration}s ${f.delay}s ease-in-out infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
