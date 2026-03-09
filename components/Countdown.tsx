
"use client";
import { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";
import { useLocale } from "./LocaleProvider";

const COUNTDOWN_FROM = "2026-09-26T15:00:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR   = MINUTE * 60;
const DAY    = HOUR * 24;

type Unit = "Day" | "Hour" | "Minute" | "Second";

function useTimer(unit: Unit) {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRef     = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    handleCountdown();
    intervalRef.current = setInterval(handleCountdown, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountdown = async () => {
    const distance = new Date(COUNTDOWN_FROM).getTime() - Date.now();
    let newTime = 0;
    switch (unit) {
      case "Day":    newTime = Math.max(0, Math.floor(distance / DAY)); break;
      case "Hour":   newTime = Math.max(0, Math.floor((distance % DAY) / HOUR)); break;
      case "Minute": newTime = Math.max(0, Math.floor((distance % HOUR) / MINUTE)); break;
      default:       newTime = Math.max(0, Math.floor((distance % MINUTE) / SECOND));
    }
    if (newTime !== timeRef.current) {
      await animate(ref.current, { y: ["0%", "-50%"], opacity: [1, 0] }, { duration: 0.35 });
      timeRef.current = newTime;
      setTime(newTime);
      await animate(ref.current, { y: ["50%", "0%"], opacity: [0, 1] }, { duration: 0.35 });
    }
  };

  return { ref, time };
}

function CountdownItem({ unit, label }: { unit: Unit; label: string }) {
  const { ref, time } = useTimer(unit);
  const display = unit === "Second" ? String(time).padStart(2, "0") : time;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "24px 16px 0" }}>
      <div style={{ position: "relative", width: "100%", overflow: "hidden", textAlign: "center" }}>
        <span
          ref={ref}
          style={{
            display: "block",
            fontFamily: "'Courier New', Courier, monospace",
            fontWeight: 600,
            fontSize: "clamp(2rem, 5.5vw, 5rem)",
            color: "#fff",
            textShadow: "0 2px 20px rgba(0,0,0,0.8)",
            lineHeight: 1.1,
          }}
        >
          {display}
        </span>
      </div>
      <span style={{
        fontSize: "clamp(0.65rem, 1.1vw, 0.95rem)",
        fontWeight: 300,
        fontFamily: "Georgia, serif",
        color: "rgba(255,255,255,0.5)",
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
        marginTop: 4,
      }}>
        {label}
      </span>
      <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.25)", marginTop: 12 }} />
    </div>
  );
}

export default function Countdown() {
  const { tr } = useLocale();

  return (
    <div style={{ display: "flex", width: "min(88vw, 540px)" }}>
      <CountdownItem unit="Day"    label={tr.days} />
      <CountdownItem unit="Hour"   label={tr.hrs} />
      <CountdownItem unit="Minute" label={tr.mins} />
      <CountdownItem unit="Second" label={tr.secs} />
    </div>
  );
}
