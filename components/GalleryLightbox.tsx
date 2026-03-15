"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function GalleryLightbox({ photos }: { photos: string[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const prev = useCallback(() => {
    setIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }, [photos.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === null ? null : (i + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (index === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") setIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, prev, next]);

  return (
    <>
      <div className="gallery-grid">
        {photos.map((src, i) => (
          <div
            key={src}
            onClick={() => setIndex(i)}
            style={{ borderRadius: 8, overflow: "hidden", cursor: "pointer" }}
          >
            <Image src={`/${src}`} alt="June and Mark" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        ))}
      </div>

      {index !== null && (
        <div
          onClick={() => setIndex(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 1000,
          }}
        >
          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: "absolute", left: 16, background: "none", border: "none",
              color: "white", fontSize: 40, cursor: "pointer", padding: "8px 16px", userSelect: "none",
            }}
          >‹</button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh", width: "min(90vw, 90vh)", height: "min(90vw, 90vh)" }}
          >
            <Image
              src={`/${photos[index]}`}
              alt="June and Mark"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: "absolute", right: 16, background: "none", border: "none",
              color: "white", fontSize: 40, cursor: "pointer", padding: "8px 16px", userSelect: "none",
            }}
          >›</button>

          {/* Counter */}
          <div style={{ position: "absolute", bottom: 16, color: "white", fontSize: 14, opacity: 0.7 }}>
            {index + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
