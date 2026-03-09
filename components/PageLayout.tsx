"use client";
import { useRouter } from "next/navigation";
import { Great_Vibes } from "next/font/google";
import { useLocale } from "./LocaleProvider";

const script = Great_Vibes({ weight: "400", subsets: ["latin"] });
interface Props { title: string; children: React.ReactNode; }

export default function PageLayout({ title, children }: Props) {
  const router = useRouter();
  const { tr } = useLocale();
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100dvh", background: "#000" }}>
      <video autoPlay muted playsInline style={{ position: "fixed", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }}>
        <source src="/wedding.mp4" type="video/mp4" />
      </video>
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.72)", zIndex: 1 }} />

      {/* Sticky header */}
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px clamp(20px, 5vw, 48px)",
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <button onClick={() => router.push("/")}
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.8)", cursor: "pointer", padding: 0, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Georgia, serif", transition: "color 0.2s" }}
          onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
          onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.8)"; }}
        >
          {tr.back}
        </button>
        <h1 className={script.className} style={{ color: "white", fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1, textShadow: "0 2px 12px rgba(0,0,0,0.8)", margin: 0, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          {title}
        </h1>
        <div style={{ width: 60 }} />
      </div>

      {/* Page content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 680, margin: "0 auto", padding: "24px clamp(20px, 5vw, 48px) 48px" }}>
        {children}
      </div>
    </div>
  );
}
