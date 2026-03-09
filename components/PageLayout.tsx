
"use client";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Great_Vibes } from "next/font/google";
import { useLocale } from "./LocaleProvider";

const script = Great_Vibes({ weight: "400", subsets: ["latin"] });

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, children }: Props) {
  const router = useRouter();
  const { tr } = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { videoRef.current?.play().catch(() => {}); }, []);

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100dvh", background: "#000" }}>
      {/* Background video */}
      <video autoPlay muted playsInline
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }}
      >
        <source src="/wedding.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.72)", zIndex: 1 }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: 680,
        margin: "0 auto",
        padding: "clamp(24px, 5vw, 60px) clamp(20px, 5vw, 48px)",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}>
        {/* Back button */}
        <button
          onClick={() => router.push("/")}
          style={{
            alignSelf: "flex-start",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,200,100,0.4)",
            borderRadius: 24,
            color: "rgba(255,230,160,0.95)",
            cursor: "pointer",
            padding: "7px 20px",
            fontSize: 14,
            letterSpacing: "0.07em",
            backdropFilter: "blur(8px)",
            transition: "background 0.2s, border-color 0.2s",
            fontFamily: "Georgia, serif",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.3)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,200,100,0.7)";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,200,100,0.4)";
          }}
        >
          {tr.back}
        </button>

        {/* Page title */}
        <h1
          className={script.className}
          style={{
            color: "white",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            textAlign: "center",
            lineHeight: 1.1,
            textShadow: "0 2px 20px rgba(255,180,60,0.4), 0 1px 4px rgba(0,0,0,0.7)",
            margin: 0,
          }}
        >
          {title}
        </h1>

        {/* Page content */}
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </div>
  );
}
