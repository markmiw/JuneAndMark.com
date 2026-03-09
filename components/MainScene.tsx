
"use client";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Countdown from "./Countdown";
import WeddingTitle from "./WeddingTitle";
import { useLocale } from "./LocaleProvider";

const MainScene: React.FC = () => {
  const router = useRouter();
  const { tr } = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.play().catch(() => {
      const unlock = () => { vid.play().catch(() => {}); document.removeEventListener('touchstart', unlock); };
      document.addEventListener('touchstart', unlock, { once: true });
    });
  }, []);

  const NAV_LINKS = [
    { label: tr.nav.gallery, path: "/gallery" },
    { label: tr.nav.rsvp,    path: "/rsvp" },
    { label: tr.nav.info,    path: "/wedding-info" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "100dvh", overflow: "hidden", background: "#000" }}>

      {/* Full-screen video */}
      <video
        autoPlay
        muted
        playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      >
        <source src="/wedding.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay that fades out */}
      <div className="video-overlay" />

      {/* Top gradient — keeps title readable */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "35%",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)",
        zIndex: 6,
        pointerEvents: "none",
      }} />

      {/* Bottom gradient — keeps countdown & nav readable */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "40%",
        background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
        zIndex: 6,
        pointerEvents: "none",
      }} />

      {/* Title */}
      <div style={{ position: "absolute", top: "5%", left: "50%", transform: "translateX(-50%)", zIndex: 10, textAlign: "center", whiteSpace: "nowrap" }}>
        <div className="fade-in-up delay-2"><WeddingTitle /></div>
      </div>

      {/* Countdown + Nav */}
      <div style={{ position: "absolute", bottom: "5%", left: "50%", transform: "translateX(-50%)", zIndex: 10, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(10px, 1.8vh, 18px)", whiteSpace: "nowrap" }}>
        <div className="fade-in-up delay-3">
          <Countdown />
        </div>
        <nav style={{ display: "flex", gap: "clamp(20px, 5vw, 64px)" }}>
          {NAV_LINKS.map(({ label, path }) => (
            <button key={path} className="nav-link fade-in-up delay-4" onClick={() => router.push(path)}>
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MainScene;
